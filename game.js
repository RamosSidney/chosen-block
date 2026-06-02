console.log("Chosen Block: game.js carregado!");
class ChosenBlockGame {
  constructor() {
    this.gridSize = 8;
    this.board = []; // Matriz representando a grade
    this.score = 0;
    this.bestScores = {
      classic: { 8: 0, 10: 0 },
      bomb: { 8: 0, 10: 0 },
      time: { 8: 0, 10: 0 }
    };
    this.gameMode = 'classic'; // 'classic', 'bomb', 'time'
    this.deck = [null, null, null]; // Três slots de peças
    
    // Status do Modo de Tempo
    this.timeMax = 60; // 60 segundos base
    this.timeRemaining = 60;
    
    // Combos e Pontuação
    this.consecutiveClears = 0;
    this.isGameOver = false;

    // Carregar recordes persistidos
    this.loadBestScores();
  }

  // Lista de formatos de peças pré-definidas (Matrizes 2D)
  static SHAPES = [
    { name: '1x1', matrix: [[1]] },
    { name: '2x1', matrix: [[1, 1]] },
    { name: '1x2', matrix: [[1], [1]] },
    { name: '3x1', matrix: [[1, 1, 1]] },
    { name: '1x3', matrix: [[1], [1], [1]] },
    { name: '2x2', matrix: [[1, 1], [1, 1]] },
    { name: 'L-2x2', matrix: [[1, 0], [1, 1]] },
    { name: 'J-2x2', matrix: [[0, 1], [1, 1]] },
    { name: 'L-reverse', matrix: [[1, 1], [1, 0]] },
    { name: 'J-reverse', matrix: [[1, 1], [0, 1]] },
    { name: 'T-3x2', matrix: [[1, 1, 1], [0, 1, 0]] },
    { name: 'L-3x3', matrix: [[1, 0, 0], [1, 0, 0], [1, 1, 1]] },
    { name: 'L-3x3-inv', matrix: [[0, 0, 1], [0, 0, 1], [1, 1, 1]] },
    { name: 'Line-4', matrix: [[1, 1, 1, 1]] },
    { name: 'Vert-4', matrix: [[1], [1], [1], [1]] },
    { name: 'Z-shape', matrix: [[1, 1, 0], [0, 1, 1]] },
    { name: 'S-shape', matrix: [[0, 1, 1], [1, 1, 0]] },
    { name: 'Plus', matrix: [[0, 1, 0], [1, 1, 1], [0, 1, 0]] }
  ];

  // Inicializa uma nova partida
  start(mode = 'classic', gridSize = 8) {
    this.gameMode = mode;
    this.gridSize = parseInt(gridSize);
    this.score = 0;
    this.consecutiveClears = 0;
    this.isGameOver = false;

    // Inicializa a grade com nulos
    this.board = Array(this.gridSize).fill(null).map(() => Array(this.gridSize).fill(null));

    // Zera o deck
    this.deck = [null, null, null];
    this.generateDeck();

    // Configura o Modo Tempo
    if (this.gameMode === 'time') {
      this.timeRemaining = this.timeMax;
    }

    this.saveBestScores();
  }

  // Gera três novas peças para o deck inferior
  generateDeck() {
    let piecesNeeded = 0;
    for (let i = 0; i < 3; i++) {
      if (!this.deck[i]) {
        this.deck[i] = this.createRandomPiece();
        piecesNeeded++;
      }
    }
    return piecesNeeded;
  }

  // Cria uma peça aleatória com formato, cor e propriedade de bomba (se aplicável)
  createRandomPiece() {
    const randomShapeIndex = Math.floor(Math.random() * ChosenBlockGame.SHAPES.length);
    const shapeTemplate = ChosenBlockGame.SHAPES[randomShapeIndex];
    
    // Cor aleatória de 1 a 7
    const color = Math.floor(Math.random() * 7) + 1;
    
    // Identifica se será uma bomba (25% de chance no Modo Bomba)
    let isBomb = false;
    let bombTimer = 0;
    if (this.gameMode === 'bomb' && Math.random() < 0.25) {
      isBomb = true;
      bombTimer = 9; // 9 jogadas antes de explodir
    }

    return {
      shape: shapeTemplate.matrix,
      name: shapeTemplate.name,
      color: color,
      isBomb: isBomb,
      bombTimer: bombTimer,
      width: shapeTemplate.matrix[0].length,
      height: shapeTemplate.matrix.length
    };
  }

  // Verifica se uma peça cabe em determinada coordenada da grade
  canPlacePiece(shape, startRow, startCol) {
    const rows = shape.length;
    const cols = shape[0].length;

    // Fora dos limites da grade
    if (startRow < 0 || startRow + rows > this.gridSize || startCol < 0 || startCol + cols > this.gridSize) {
      return false;
    }

    // Verifica sobreposição de células
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (shape[r][c] === 1) {
          const boardRow = startRow + r;
          const boardCol = startCol + c;
          if (this.board[boardRow][boardCol] !== null) {
            return false;
          }
        }
      }
    }

    return true;
  }

  // Encaixa e fixa a peça na grade
  placePiece(slotIndex, startRow, startCol) {
    const piece = this.deck[slotIndex];
    if (!piece) return false;

    if (!this.canPlacePiece(piece.shape, startRow, startCol)) {
      return false;
    }

    const rows = piece.shape.length;
    const cols = piece.shape[0].length;
    let blockCount = 0;

    // Define qual célula receberá a contagem de bomba no caso de uma peça bomba
    let bombRow = -1;
    let bombCol = -1;
    if (piece.isBomb) {
      // Procura o primeiro bloco preenchido da peça para marcar como bomba principal
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (piece.shape[r][c] === 1) {
            bombRow = r;
            bombCol = c;
            break;
          }
        }
        if (bombRow !== -1) break;
      }
    }

    // Coloca os blocos na grade
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (piece.shape[r][c] === 1) {
          const boardRow = startRow + r;
          const boardCol = startCol + c;
          
          const isThisBomb = (piece.isBomb && r === bombRow && c === bombCol);

          this.board[boardRow][boardCol] = {
            color: piece.color,
            isBomb: isThisBomb,
            bombTimer: isThisBomb ? piece.bombTimer : 0
          };
          blockCount++;
        }
      }
    }

    // Pontuação básica: +1 ponto por bloco encaixado
    this.score += blockCount;

    // Esvazia o slot do deck usado
    this.deck[slotIndex] = null;

    // Atualiza contadores das bombas ativas na grade
    if (this.gameMode === 'bomb') {
      this.tickBombs();
    }

    // Verifica se completou linhas e colunas
    const linesCleared = this.checkBoardClears();

    // Se no modo tempo, adicionar recompensa de tempo
    if (this.gameMode === 'time') {
      this.timeRemaining = Math.min(this.timeMax, this.timeRemaining + blockCount * 0.5 + (linesCleared * 8));
    }

    // Se o deck estiver completamente vazio, gera 3 novas peças
    const deckEmpty = this.deck.every(p => p === null);
    if (deckEmpty) {
      this.generateDeck();
    }

    // Verifica se o jogo acabou após essa rodada
    this.checkGameOverState();

    return {
      success: true,
      linesCleared: linesCleared,
      scoreGained: blockCount
    };
  }

  // Diminui em 1 o contador de todas as bombas na grade
  tickBombs() {
    for (let r = 0; r < this.gridSize; r++) {
      for (let c = 0; c < this.gridSize; c++) {
        const cell = this.board[r][c];
        if (cell && cell.isBomb) {
          cell.bombTimer--;
          if (cell.bombTimer <= 0) {
            // Bomba explodiu! Game Over catastrófico
            this.isGameOver = true;
          }
        }
      }
    }
  }

  // Varre e apaga linhas e colunas completas da grade
  checkBoardClears() {
    const rowsToClear = [];
    const colsToClear = [];

    // Verifica linhas cheias
    for (let r = 0; r < this.gridSize; r++) {
      let isRowFull = true;
      for (let c = 0; c < this.gridSize; c++) {
        if (this.board[r][c] === null) {
          isRowFull = false;
          break;
        }
      }
      if (isRowFull) rowsToClear.push(r);
    }

    // Verifica colunas cheias
    for (let c = 0; c < this.gridSize; c++) {
      let isColFull = true;
      for (let r = 0; r < this.gridSize; r++) {
        if (this.board[r][c] === null) {
          isColFull = false;
          break;
        }
      }
      if (isColFull) colsToClear.push(c);
    }

    const totalLines = rowsToClear.length + colsToClear.length;
    if (totalLines > 0) {
      // Registra combo consecutivo
      this.consecutiveClears++;

      // Calcula pontuação da eliminação: (Total de células apagadas) * (Multiplicador de Combo)
      // Células apagadas: total de linhas e colunas combinadas * tamanho do grid (menos interseções se houver)
      // Simplificando: tamanho da linha * linhas * combo + bônus consecutivos
      const basePointsPerLine = this.gridSize * 10;
      let pointsGained = basePointsPerLine * totalLines;

      // Multiplicador de linhas simultâneas (ex: 2 linhas = 1.5x, 3 linhas = 2.0x, 4+ = 3x)
      let simultaneousMultiplier = 1;
      if (totalLines === 2) simultaneousMultiplier = 1.5;
      else if (totalLines === 3) simultaneousMultiplier = 2.0;
      else if (totalLines >= 4) simultaneousMultiplier = 3.0;

      // Multiplicador de combos consecutivos
      const consecutiveBonus = (this.consecutiveClears - 1) * 35;

      pointsGained = Math.round(pointsGained * simultaneousMultiplier) + consecutiveBonus;
      this.score += pointsGained;

      // Armazena as coordenadas a serem limpas para animação de partículas
      const cellsToAnimate = [];

      // Efetua a limpeza de fato da matriz lógica
      // Linhas:
      rowsToClear.forEach(r => {
        for (let c = 0; c < this.gridSize; c++) {
          if (this.board[r][c]) {
            cellsToAnimate.push({ row: r, col: c, color: this.board[r][c].color });
          }
        }
      });
      // Colunas:
      colsToClear.forEach(c => {
        for (let r = 0; r < this.gridSize; r++) {
          if (this.board[r][c]) {
            // Garante que não adicione duplicado se estiver na interseção
            if (!cellsToAnimate.some(cell => cell.row === r && cell.col === c)) {
              cellsToAnimate.push({ row: r, col: c, color: this.board[r][c].color });
            }
          }
        }
      });

      // Aplica a remoção lógica na grade
      rowsToClear.forEach(r => {
        for (let c = 0; c < this.gridSize; c++) {
          this.board[r][c] = null;
        }
      });
      colsToClear.forEach(c => {
        for (let r = 0; r < this.gridSize; r++) {
          this.board[r][c] = null;
        }
      });

      // Retorna metadados para renderizador animar partículas nas posições certas
      return {
        cleared: true,
        count: totalLines,
        cells: cellsToAnimate,
        points: pointsGained,
        combo: this.consecutiveClears
      };
    } else {
      // Interrompe combos consecutivos se jogada não limpou nada
      this.consecutiveClears = 0;
      return { cleared: false, count: 0, cells: [], points: 0, combo: 0 };
    }
  }

  // Verifica se o jogo acabou baseado na falta de movimentos possíveis
  checkGameOverState() {
    if (this.isGameOver) return true; // Já foi marcado por explosão de bomba

    // Se houver pelo menos um slot de peça preenchido, vê se ele cabe em algum lugar
    let hasAvailableMoves = false;
    let piecesInDeckCount = 0;

    for (let i = 0; i < 3; i++) {
      const piece = this.deck[i];
      if (piece) {
        piecesInDeckCount++;
        // Tenta encaixar esta peça em qualquer célula livre da grade
        if (this.canPieceFitAnywhere(piece.shape)) {
          hasAvailableMoves = true;
          break;
        }
      }
    }

    // Se há peças no deck mas nenhuma cabe em lugar algum da grade -> Game Over!
    if (piecesInDeckCount > 0 && !hasAvailableMoves) {
      this.isGameOver = true;
    }

    if (this.isGameOver) {
      this.updateHighScores();
    }

    return this.isGameOver;
  }

  // Verifica se uma peça cabe em QUALQUER posição vazia do tabuleiro
  canPieceFitAnywhere(shape) {
    const rows = this.gridSize;
    const cols = this.gridSize;
    
    for (let r = 0; r <= rows - shape.length; r++) {
      for (let c = 0; c <= cols - shape[0].length; c++) {
        if (this.canPlacePiece(shape, r, c)) {
          return true;
        }
      }
    }
    return false;
  }

  // Atualiza os recordes no LocalStorage se a pontuação atual superá-los
  updateHighScores() {
    const currentBest = this.bestScores[this.gameMode][this.gridSize] || 0;
    if (this.score > currentBest) {
      this.bestScores[this.gameMode][this.gridSize] = this.score;
      this.saveBestScores();
      return true; // Novo recorde alcançado!
    }
    return false;
  }

  // Persiste pontuações recordes
  saveBestScores() {
    localStorage.setItem('chosen_block_best_scores', JSON.stringify(this.bestScores));
  }

  // Carrega recordes salvos
  loadBestScores() {
    const saved = localStorage.getItem('chosen_block_best_scores');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Garante integridade do objeto se novos campos forem adicionados
        this.bestScores = {
          classic: { ...this.bestScores.classic, ...parsed.classic },
          bomb: { ...this.bestScores.bomb, ...parsed.bomb },
          time: { ...this.bestScores.time, ...parsed.time }
        };
      } catch (e) {
        console.error("Erro ao ler recordes salvos:", e);
      }
    }
  }

  // Zera todos os recordes salvos
  resetHighScores() {
    this.bestScores = {
      classic: { 8: 0, 10: 0 },
      bomb: { 8: 0, 10: 0 },
      time: { 8: 0, 10: 0 }
    };
    this.saveBestScores();
  }
}
