console.log("Chosen Block: render.js carregado!");
class ChosenBlockRender {
  constructor(game, audioManager) {
    this.game = game;
    this.audio = audioManager;
    
    // Elementos DOM
    this.boardEl = document.getElementById('game-board');
    this.deckSlots = [
      document.getElementById('slot-0'),
      document.getElementById('slot-1'),
      document.getElementById('slot-2')
    ];
    this.comboContainer = document.getElementById('combo-floater-container');
    
    // Canvas de Partículas
    this.canvas = document.getElementById('particle-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.ambientParticles = [];
    
    // Controle do Arrastar e Soltar (Drag & Drop)
    this.draggedEl = null;
    this.draggedPiece = null;
    this.draggedSlotIndex = -1;
    this.dragStartPos = { x: 0, y: 0 };
    this.dragOffset = { x: 0, y: 0 };
    
    // Configurações do Grid de Prévia
    this.lastPreviewPos = null;
    this.vibrateEnabled = true;
    
    // Variáveis de Cache de Alto Desempenho (FPS Otimizado)
    this.boardCells = [];
    this.activePreviewCells = [];
    this.cachedBoardRect = null;
    this.cachedCellSize = 0;

    // Inicialização
    this.initCanvas();
    this.initAmbientParticles();
    this.animateParticles();
    
    window.addEventListener('resize', () => {
      this.resizeCanvas();
    });
  }

  // Configuração inicial do Canvas de efeitos
  initCanvas() {
    this.resizeCanvas();
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  // Partículas de ambiente flutuando ao fundo
  initAmbientParticles() {
    this.ambientParticles = [];
    const count = 30;
    for (let i = 0; i < count; i++) {
      this.ambientParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.2,
        vy: -0.1 - Math.random() * 0.3,
        size: 1 + Math.random() * 3,
        alpha: 0.1 + Math.random() * 0.3,
        color: Math.random() > 0.5 ? 'var(--primary)' : 'var(--secondary)'
      });
    }
  }

  // Gera o tabuleiro físico com base nas dimensões configuradas
  renderBoard() {
    this.boardEl.innerHTML = '';
    const size = this.game.gridSize;
    
    // Define a classe CSS correspondente
    this.boardEl.className = `board-grid size-${size}`;
    
    // Matriz de cache dos elementos DOM das células do tabuleiro
    this.boardCells = Array(size).fill(null).map(() => Array(size).fill(null));
    
    // Injeta as células no DOM
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        const cellEl = document.createElement('div');
        cellEl.className = 'board-cell';
        cellEl.dataset.row = r;
        cellEl.dataset.col = c;
        
        const cellData = this.game.board[r][c];
        if (cellData) {
          cellEl.classList.add('filled', `color-${cellData.color}`);
          if (cellData.isBomb) {
            cellEl.classList.add('is-bomb');
            cellEl.textContent = cellData.bombTimer;
            if (cellData.bombTimer <= 3) {
              cellEl.classList.add('urgent');
            }
          }
        }
        
        this.boardEl.appendChild(cellEl);
        this.boardCells[r][c] = cellEl; // Salva a referência no cache O(1)
      }
    }
  }

  // Renderiza as três peças no deck inferior
  renderDeck() {
    this.deckSlots.forEach((slot, index) => {
      slot.innerHTML = '';
      const piece = this.game.deck[index];
      
      if (!piece) return;

      // Cria a peça visual dragável
      const pieceEl = document.createElement('div');
      pieceEl.className = 'draggable-piece in-deck';
      pieceEl.dataset.slot = index;
      
      // Define o grid da peça correspondente
      const rows = piece.shape.length;
      const cols = piece.shape[0].length;
      pieceEl.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
      pieceEl.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
      pieceEl.style.gap = '3px';
      
      if (piece.isBomb) {
        pieceEl.classList.add('is-bomb');
      }

      // Preenche os blocos da peça
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const blockEl = document.createElement('div');
          if (piece.shape[r][c] === 1) {
            blockEl.className = `piece-block color-${piece.color}`;
          } else {
            blockEl.className = 'piece-block-empty';
            blockEl.style.visibility = 'hidden';
          }
          pieceEl.appendChild(blockEl);
        }
      }

      // Adiciona eventos de Toque e Mouse
      this.attachDragEvents(pieceEl, index);
      slot.appendChild(pieceEl);
    });
  }

  // Vincula eventos avançados de toque e mouse para Drag and Drop
  attachDragEvents(el, slotIndex) {
    const onDragStart = (clientX, clientY, isTouch) => {
      if (this.game.isGameOver) return;
      
      this.draggedEl = el;
      this.draggedSlotIndex = slotIndex;
      this.draggedPiece = this.game.deck[slotIndex];
      
      // Remove do deck visualmente
      el.classList.remove('in-deck');
      el.classList.add('dragging');

      // Toca um pequeno feedback de início
      this.audio.resume();

      // Cacheia os limites e tamanhos do tabuleiro uma única vez no início do drag
      // para evitar Forced Synchronous Layout / Layout Thrashing em cada frame de mousemove!
      this.cachedBoardRect = this.boardEl.getBoundingClientRect();
      this.cachedCellSize = this.cachedBoardRect.width / this.game.gridSize;

      // Calcula dimensões reais para posicionar perfeitamente sob o dedo
      const rect = el.getBoundingClientRect();
      
      // Se for touch (mobile), aplicamos um offset Y considerável (-65px) 
      // para o bloco flutuar acima do polegar do jogador, não tampando a visão!
      const offsetOffsetY = isTouch ? -65 : 0;
      
      this.dragOffset.x = rect.width / 2;
      this.dragOffset.y = rect.height / 2 - offsetOffsetY;

      // Move inicialmente
      this.moveDraggedElement(clientX, clientY);
    };

    // Eventos de Mouse
    el.addEventListener('mousedown', (e) => {
      e.preventDefault();
      onDragStart(e.clientX, e.clientY, false);
      
      const onMouseMove = (moveEvent) => {
        if (!this.draggedEl) return;
        this.moveDraggedElement(moveEvent.clientX, moveEvent.clientY);
        this.updatePlacementPreview(moveEvent.clientX, moveEvent.clientY);
      };

      const onMouseUp = (upEvent) => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        this.handleDrop(upEvent.clientX, upEvent.clientY);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });

    // Eventos de Toque (Mobile)
    el.addEventListener('touchstart', (e) => {
      // Impede scroll ou zoom indesejado ao arrastar o bloco
      e.preventDefault();
      const touch = e.touches[0];
      onDragStart(touch.clientX, touch.clientY, true);
      
      const onTouchMove = (moveEvent) => {
        if (!this.draggedEl) return;
        const moveTouch = moveEvent.touches[0];
        this.moveDraggedElement(moveTouch.clientX, moveTouch.clientY);
        this.updatePlacementPreview(moveTouch.clientX, moveTouch.clientY);
      };

      const onTouchEnd = (endEvent) => {
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onTouchEnd);
        
        // No touchend, as coordenadas do toque não vêm no 'touches', usamos o 'changedTouches'
        const endTouch = endEvent.changedTouches[0];
        this.handleDrop(endTouch.clientX, endTouch.clientY);
      };

      document.addEventListener('touchmove', onTouchMove, { passive: false });
      document.addEventListener('touchend', onTouchEnd);
    });
  }

  // Move o elemento DOM da peça arrastada
  moveDraggedElement(x, y) {
    if (!this.draggedEl) return;
    this.draggedEl.style.left = `${x - this.dragOffset.x}px`;
    this.draggedEl.style.top = `${y - this.dragOffset.y}px`;
  }

  // Atualiza em tempo real as células sob a peça exibindo a sombra/preview
  updatePlacementPreview(pointerX, pointerY) {
    this.clearAllPreviews();

    const targetCell = this.findGridCellUnderPointer(pointerX, pointerY);
    if (!targetCell) {
      this.lastPreviewPos = null;
      return;
    }

    const { row, col } = targetCell;
    const piece = this.draggedPiece;
    const isValid = this.game.canPlacePiece(piece.shape, row, col);

    // Salva última posição válida
    this.lastPreviewPos = { row, col, isValid };

    // Pinta as células da grade envolvidas na visualização
    const pRows = piece.shape.length;
    const pCols = piece.shape[0].length;

    for (let r = 0; r < pRows; r++) {
      for (let c = 0; c < pCols; c++) {
        if (piece.shape[r][c] === 1) {
          const boardRow = row + r;
          const boardCol = col + c;
          
          if (boardRow >= 0 && boardRow < this.game.gridSize &&
              boardCol >= 0 && boardCol < this.game.gridSize) {
            // Busca direta O(1) na matriz de elementos cacheados (zero DOM query!)
            const cellEl = this.boardCells[boardRow][boardCol];
            if (cellEl) {
              const className = isValid ? 'preview-valid' : 'preview-invalid';
              cellEl.classList.add(className);
              this.activePreviewCells.push(cellEl); // Cacheia para limpeza rápida no próximo movimento
            }
          }
        }
      }
    }
  }

  // Limpa os estados de preview anteriores das células do grid (Ultra Otimizado O(1) DOM reset)
  clearAllPreviews() {
    if (this.activePreviewCells && this.activePreviewCells.length > 0) {
      this.activePreviewCells.forEach(cell => {
        cell.classList.remove('preview-valid', 'preview-invalid');
      });
      this.activePreviewCells = []; // Esvazia o cache de limpeza
    }
  }

  // Encontra a célula de origem no tabuleiro abaixo do cursor (FPS Otimizado usando valores cacheados)
  findGridCellUnderPointer(x, y) {
    if (!this.cachedBoardRect) return null;

    // Para calcular a célula certa, pegamos o topo-esquerdo da peça arrastada
    // ajustada pelo offset, que representa a primeira célula (0,0) da peça.
    const pieceLeft = x - this.dragOffset.x;
    const pieceTop = y - this.dragOffset.y;

    const boardRect = this.cachedBoardRect;
    const cellSize = this.cachedCellSize;

    if (pieceLeft < boardRect.left - 20 || pieceLeft > boardRect.right + 20 ||
        pieceTop < boardRect.top - 20 || pieceTop > boardRect.bottom + 20) {
      return null;
    }

    // Calcula qual linha e coluna o topo-esquerdo da peça sobrepõe
    const relativeX = pieceLeft - boardRect.left + (cellSize / 2); // adiciona metade do tamanho para arredondar melhor
    const relativeY = pieceTop - boardRect.top + (cellSize / 2);

    const col = Math.floor(relativeX / cellSize);
    const row = Math.floor(relativeY / cellSize);

    if (row >= 0 && row < this.game.gridSize && col >= 0 && col < this.game.gridSize) {
      return { row, col };
    }

    return null;
  }

  // Finaliza o movimento ao soltar a peça
  handleDrop(pointerX, pointerY) {
    if (!this.draggedEl) return;

    const el = this.draggedEl;
    const slotIndex = this.draggedSlotIndex;
    this.clearAllPreviews();

    let placed = false;
    let placementResult = null;

    if (this.lastPreviewPos && this.lastPreviewPos.isValid) {
      const { row, col } = this.lastPreviewPos;
      
      // Executa lógica física de colocação
      placementResult = this.game.placePiece(slotIndex, row, col);
      if (placementResult.success) {
        placed = true;
      }
    }

    if (placed) {
      // Sucesso! Toca som tátil de encaixe
      this.audio.playPlace();

      // Vibração no celular
      this.triggerHapticFeedback(15);

      // Limpa peça arrastada
      this.draggedEl.remove();

      // Se houve linhas eliminadas, dispara o show!
      if (placementResult.linesCleared.cleared) {
        const clearData = placementResult.linesCleared;
        
        // Toca som de limpeza e combo
        this.audio.playClear(clearData.combo);
        this.triggerHapticFeedback(35);

        // Dispara partículas em cada célula destruída
        clearData.cells.forEach(cell => {
          this.createExplosionParticles(cell.row, cell.col, cell.color);
        });

        // Mostra texto do Combo flutuante na tela
        this.showComboFloater(clearData.points, clearData.count, clearData.combo);
      }

      // Re-renderiza o estado
      this.renderBoard();
      this.renderDeck();
      
      // Dispara evento global de atualização do placar passando detalhes do encaixe
      const event = new CustomEvent('game-updated', { detail: placementResult });
      window.dispatchEvent(event);
    } else {
      // Falha ao encaixar -> Anima a peça de volta para o deck com efeito mola (Spring Back)
      el.classList.remove('dragging');
      el.classList.add('in-deck');
      el.style.left = '';
      el.style.top = '';
      el.style.gridTemplateRows = `repeat(${this.draggedPiece.shape.length}, 1fr)`;
      el.style.gridTemplateColumns = `repeat(${this.draggedPiece.shape[0].length}, 1fr)`;
    }

    // Reseta estado de arrastar
    this.draggedEl = null;
    this.draggedPiece = null;
    this.draggedSlotIndex = -1;
    this.lastPreviewPos = null;
  }

  // Ativa vibração no celular para melhor feedback sensorial
  triggerHapticFeedback(duration) {
    if (this.vibrateEnabled && 'vibrate' in navigator) {
      try {
        navigator.vibrate(duration);
      } catch (e) {
        // Ignora erros silenciosamente se permissão de vibração não foi concedida
      }
    }
  }

  // Cria texto flutuante em Canvas/HTML5 para combos
  showComboFloater(points, count, combo) {
    // Posiciona no centro do tabuleiro
    const boardRect = this.boardEl.getBoundingClientRect();
    const x = boardRect.left + boardRect.width / 2;
    const y = boardRect.top + boardRect.height / 3;

    const floater = document.createElement('div');
    floater.className = 'combo-text';
    floater.style.left = `${x}px`;
    floater.style.top = `${y}px`;

    // Mensagens divertidas dependendo do tamanho da jogada
    let msg = `+${points}`;
    if (combo > 1) {
      const titles = ["COMBO!", "DUPLO!", "INCRÍVEL!", "MAGNÍFICO!", "LENDÁRIO!"];
      const title = titles[Math.min(combo - 1, titles.length - 1)];
      msg = `${title}<br><span style="font-size:0.75em;color:var(--secondary)">x${combo} (+${points})</span>`;
    } else if (count >= 2) {
      msg = `MULTI ${count}x!<br><span style="font-size:0.8em">+${points}</span>`;
    }

    floater.innerHTML = msg;
    this.comboContainer.appendChild(floater);

    // Remove após terminar animação CSS
    setTimeout(() => {
      floater.remove();
    }, 1200);
  }

  // ==========================================
  // EFEITOS DE PARTÍCULAS NO CANVAS
  // ==========================================

  // Cria a explosão de partículas ao limpar uma célula
  createExplosionParticles(row, col, colorIndex) {
    // Busca elemento DOM correspondente para calcular coordenadas absolutas
    const cellEl = this.boardEl.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    if (!cellEl) return;

    const rect = cellEl.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Cores CSS mapeadas para RGB/Hex de faíscas
    const colors = [
      '#38bdf8', // Cyan
      '#ec4899', // Pink
      '#10b981', // Green
      '#f59e0b', // Yellow
      '#8b5cf6', // Violet
      '#f43f5e', // Rose
      '#06b6d4'  // Teal
    ];
    const particleColor = colors[(colorIndex - 1) % colors.length];

    // Gera 15 a 20 faíscas por bloco
    const sparksCount = 15 + Math.floor(Math.random() * 8);
    for (let i = 0; i < sparksCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 6;
      
      this.particles.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5, // Adiciona impulso para cima
        size: 2 + Math.random() * 4,
        alpha: 1.0,
        decay: 0.02 + Math.random() * 0.03,
        gravity: 0.15,
        color: particleColor
      });
    }
  }

  // Loop contínuo de renderização das faíscas
  animateParticles() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // 1. Atualiza partículas de ambiente (fundo sonhador)
    this.ambientParticles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      // Reseta se passar do topo da tela ou laterais
      if (p.y < -10) {
        p.y = this.canvas.height + 10;
        p.x = Math.random() * this.canvas.width;
      }
      if (p.x < -10 || p.x > this.canvas.width + 10) {
        p.vx *= -1;
      }

      this.ctx.save();
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fillStyle = p.color;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    });

    // 2. Atualiza e desenha partículas de explosão (faíscas neon)
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity; // Gravidade empurra para baixo
      p.alpha -= p.decay; // Reduz visibilidade

      // Se desintegrou, apaga do vetor
      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fillStyle = p.color;
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = p.color; // Efeito neon incrível nas faíscas
      
      this.ctx.beginPath();
      // Desenha com rastro ligeiramente esticado dependendo da velocidade
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed > 2) {
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      } else {
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      }
      this.ctx.fill();
      this.ctx.restore();
    }

    // Próximo frame
    requestAnimationFrame(() => this.animateParticles());
  }
}
