console.log("Chosen Block: app.js carregado!");
const initApp = () => {
  console.log("Chosen Block: initApp() disparado com sucesso!");
  // Inicialização das Instâncias Principais
  const game = new ChosenBlockGame();
  const audio = AudioManager;
  const renderer = new ChosenBlockRender(game, audio);

  // Estados e Referências de Controle
  let timeInterval = null;
  let currentGridSize = 8;
  let activeTheme = 'theme-neon';

  // Mapeamento dos Elementos DOM
  const loaderScreen = document.getElementById('screen-loader');
  const menuScreen = document.getElementById('screen-menu');
  const gameScreen = document.getElementById('screen-game');
  
  const modalSettings = document.getElementById('modal-settings');
  const modalScores = document.getElementById('modal-scores');
  const modalGameOver = document.getElementById('modal-gameover');

  // Elementos do Jogo
  const currentScoreEl = document.getElementById('current-score');
  const bestScoreEl = document.getElementById('best-score');
  const gameModeTitle = document.getElementById('game-mode-title');
  const timeBarContainer = document.getElementById('time-bar-container');
  const timeBarFill = document.getElementById('time-bar-fill');

  // Elementos de Configuração
  const themeSelect = document.getElementById('theme-select');
  const gridSelect = document.getElementById('grid-size-select');
  const vibrationToggle = document.getElementById('vib-toggle');
  
  // Elementos de Recordes
  const highClassicEl = document.getElementById('high-classic');
  const highBombEl = document.getElementById('high-bomb');
  const highTimeEl = document.getElementById('high-time');

  // Sons
  const btnToggleSound = document.getElementById('btn-toggle-sound');
  const soundIconOn = btnToggleSound.querySelector('.sound-icon-on');
  const soundIconOff = btnToggleSound.querySelector('.sound-icon-off');

  // Elementos dos Salmos Bíblicos
  const psalmDisplay = document.getElementById('psalm-display');
  const psalmText = document.getElementById('psalm-text');
  const psalmRef = document.getElementById('psalm-ref');

  const psalmsList = [
    { text: '"O Senhor é o meu pastor, nada me faltará."', ref: 'Salmos 23:1' },
    { text: '"Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia."', ref: 'Salmos 46:1' },
    { text: '"Elevo os meus olhos para os montes; de onde vem o meu socorro? O meu socorro vem do Senhor."', ref: 'Salmos 121:1-2' },
    { text: '"Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará."', ref: 'Salmos 37:5' },
    { text: '"Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará."', ref: 'Salmos 91:1' },
    { text: '"Este é o dia que fez o Senhor; regozijemo-nos, e alegremo-nos nele."', ref: 'Salmos 118:24' },
    { text: '"O choro pode durar uma noite, mas a alegria vem pela manhã."', ref: 'Salmos 30:5' },
    { text: '"Lâmpada para os meus pés é tua palavra, e luz para o meu caminho."', ref: 'Salmos 119:105' },
    { text: '"Esperei com paciência no Senhor, e ele se inclinou para mim, e ouviu o meu clamor."', ref: 'Salmos 40:1' },
    { text: '"Sejam agradáveis as palavras da minha boca e a meditação do meu coração perante a tua face, Senhor."', ref: 'Salmos 19:14' },
    { text: '"Grandes coisas fez o Senhor por nós, pelas quais estamos alegres."', ref: 'Salmos 126:3' },
    { text: '"Eu te louvarei, porque de um modo terrível e tão maravilhoso fui formado."', ref: 'Salmos 139:14' },
    { text: '"O Senhor é a minha força e o meu escudo; nele confiou o meu coração, e fui socorrido."', ref: 'Salmos 28:7' },
    { text: '"Provai, e vede que o Senhor é bom; bem-aventurado o homem que nele confia."', ref: 'Salmos 34:8' },
    { text: '"O Senhor é a minha luz e a minha salvação; a quem temerei?"', ref: 'Salmos 27:1' },
    { text: '"Deleita-te também no Senhor, e te concederá os desejos do teu coração."', ref: 'Salmos 37:4' },
    { text: '"O anjo do Senhor acampa-se ao redor dos que o temem, e os livra."', ref: 'Salmos 34:7' },
    { text: '"Porque aos seus anjos dará ordem a teu respeito, para te guardarem em todos os teus caminhos."', ref: 'Salmos 91:11' },
    { text: '"Como purificará o jovem o seu caminho? Observando-o conforme a tua palavra."', ref: 'Salmos 119:9' },
    { text: '"Cria em mim, ó Deus, um coração puro, e renova em mim um espírito reto."', ref: 'Salmos 51:10' },
    { text: '"Perto está o Senhor de todos os que o invocam, de todos os que o invocam em verdade."', ref: 'Salmos 145:18' },
    { text: '"Bendize, ó minha alma, ao Senhor, e tudo o que há em mim bendiga o seu santo nome."', ref: 'Salmos 103:1' },
    { text: '"Ó Senhor, Senhor nosso, quão admirável é o teu nome em toda a terra!"', ref: 'Salmos 8:1' },
    { text: '"O Senhor é o meu rochedo, a minha fortaleza e o meu libertador; o meu Deus, o meu refúgio."', ref: 'Salmos 18:2' },
    { text: '"O Senhor guardará a tua entrada e a tua saída, desde agora e para sempre."', ref: 'Salmos 121:8' },
    { text: '"Porque o Senhor é bom, e eterna a sua misericórdia; e a sua fidelidade de geração em geração."', ref: 'Salmos 100:5' },
    { text: '"Perto está o Senhor dos que têm o coração quebrantado, e salva os contritos de espírito."', ref: 'Salmos 34:18' },
    { text: '"Fui moço, e agora sou velho; mas nunca vi desamparado o justo, nem a sua semente a mendigar o pão."', ref: 'Salmos 37:25' },
    { text: '"Aquietai-vos, e sabei que eu sou Deus; serei exaltado entre as nações."', ref: 'Salmos 46:10' },
    { text: '"Escondi a tua palavra no meu coração, para não pecar contra ti."', ref: 'Salmos 119:11' }
  ];

  let currentPsalmIdx = -1;

  function showRandomPsalm() {
    if (!psalmDisplay || !psalmText || !psalmRef) return;
    
    // Escolhe um índice diferente do atual para garantir que o versículo mude!
    let randomIdx;
    do {
      randomIdx = Math.floor(Math.random() * psalmsList.length);
    } while (randomIdx === currentPsalmIdx && psalmsList.length > 1);
    
    currentPsalmIdx = randomIdx;
    const psalm = psalmsList[randomIdx];

    psalmDisplay.classList.add('psalm-fade-out');
    setTimeout(() => {
      psalmText.textContent = psalm.text;
      psalmRef.textContent = psalm.ref;
      psalmDisplay.classList.remove('psalm-fade-out');
    }, 300);
  }

  const gameoverPsalmsList = [
    { text: '"Não fui eu que lhe ordenei? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar."', ref: 'Josué 1:9' },
    { text: '"Tudo posso naquele que me fortalece."', ref: 'Filipenses 4:13' },
    { text: '"Mas os que esperam no Senhor renovarão as suas forças; subirão com asas como águias."', ref: 'Isaías 40:31' },
    { text: '"Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará."', ref: 'Salmos 37:5' },
    { text: '"Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus."', ref: 'Romanos 8:28' },
    { text: '"Confie no Senhor de todo o seu coração e não se apóie em seu próprio entendimento."', ref: 'Provérbios 3:5-6' },
    { text: '"Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia."', ref: 'Salmos 46:1' },
    { text: '"Não andeis ansiosos por coisa alguma; antes em tudo sejam os vossos pedidos conhecidos diante de Deus."', ref: 'Filipenses 4:6' },
    { text: '"Portanto, meus amados irmãos, sede firmes e constantes, sempre abundantes na obra do Senhor."', ref: '1 Coríntios 15:58' },
    { text: '"Espera pelo Senhor, tem bom ânimo, e fortifique-se o teu coração."', ref: 'Salmos 27:14' }
  ];

  /* ==========================================
     CARREGAMENTO INICIAL & PREFERÊNCIAS
     ========================================== */
  
  // Carrega tema visual persistido
  const savedTheme = localStorage.getItem('chosen_block_theme');
  if (savedTheme) {
    activeTheme = savedTheme;
    document.body.className = activeTheme;
    themeSelect.value = activeTheme;
  }

  // Carrega tamanho de grade persistido
  const savedGrid = localStorage.getItem('chosen_block_grid');
  if (savedGrid) {
    currentGridSize = parseInt(savedGrid);
    gridSelect.value = savedGrid;
  }

  // Configura estado do som
  audio.init();
  updateSoundUI();

  // Esconde loader após tempo mínimo de apresentação estética
  setTimeout(() => {
    transitionScreen(loaderScreen, menuScreen);
    audio.playGameStart();
  }, 1600);


  /* ==========================================
     NAVEGAÇÃO DE TELAS & TAREFAS DE UI
     ========================================== */

  function transitionScreen(from, to) {
    from.classList.remove('active');
    to.classList.add('active');
  }

  function openModal(modal) {
    modal.classList.remove('hidden');
  }

  function closeModal(modal) {
    modal.classList.add('hidden');
  }

  // Atualiza placar exibido em tela de jogo
  function updateScoresUI() {
    currentScoreEl.textContent = game.score;
    
    // Pega o recorde do modo atual
    const best = game.bestScores[game.gameMode][game.gridSize] || 0;
    bestScoreEl.textContent = best;
  }

  // Sincroniza ícones do botão de volume
  function updateSoundUI() {
    if (audio.muted) {
      soundIconOn.classList.add('hidden');
      soundIconOff.classList.remove('hidden');
    } else {
      soundIconOn.classList.remove('hidden');
      soundIconOff.classList.add('hidden');
    }
  }


  /* ==========================================
     GERENCIAMENTO DE LOGICA DO JOGO
     ========================================== */

  function startNewGame(mode) {
    // Interrompe loops de tempo anteriores
    stopTimer();

    // Inicializa a física do jogo
    game.start(mode, currentGridSize);
    
    // Atualiza tags visuais
    const modesLabels = {
      classic: 'Clássico',
      bomb: 'Bomba 💣',
      time: 'Tempo ⏳'
    };
    gameModeTitle.textContent = modesLabels[mode] || 'Clássico';

    // Trata visibilidade de elementos dos modos
    if (mode === 'time') {
      timeBarContainer.classList.remove('hidden');
      startTimeAttackLoop();
    } else {
      timeBarContainer.classList.add('hidden');
    }

    // Renderiza o tabuleiro e peças
    renderer.renderBoard();
    renderer.renderDeck();
    updateScoresUI();
    
    // Mostra um Salmo bíblico inspirador ao iniciar a partida
    showRandomPsalm();

    // Transição para tela de jogo
    transitionScreen(menuScreen, gameScreen);
    closeModal(modalGameOver);
  }

  function checkGameStatus() {
    updateScoresUI();
    
    // Se no modo bomba, precisamos atualizar o tabuleiro para ver as contagens dos turnos
    if (game.gameMode === 'bomb') {
      renderer.renderBoard();
      // Efeito sonoro de tik-tok das bombas a cada turno
      const activeBombs = document.querySelectorAll('.board-cell.is-bomb');
      if (activeBombs.length > 0) {
        let isUrgent = false;
        activeBombs.forEach(b => {
          if (parseInt(b.textContent) <= 3) isUrgent = true;
        });
        audio.playBombTick(isUrgent);
      }
    }

    if (game.isGameOver) {
      handleGameOver();
    }
  }

  // Evento disparado pelo renderer.js ao posicionar bloco com sucesso
  window.addEventListener('game-updated', (e) => {
    checkGameStatus();
    
    // Se o encaixe resultou em eliminação de linhas, comemora trocando por um salmo encorajador!
    if (e.detail && e.detail.linesCleared && e.detail.linesCleared.cleared) {
      showRandomPsalm();
    }
  });

  // Gerenciador do Fim de Jogo
  function handleGameOver() {
    stopTimer();
    
    // Se explodiu por bomba, toca som diferente
    if (game.gameMode === 'bomb' && game.board.some(row => row.some(cell => cell && cell.isBomb && cell.bombTimer <= 0))) {
      audio.playBombExplosion();
      document.getElementById('gameover-message').textContent = 'Uma bomba explodiu!';
    } else {
      audio.playGameOver();
      document.getElementById('gameover-message').textContent = 'Não há mais movimentos!';
    }

    // Atualiza Recordes Locais
    const isNewRecord = game.updateHighScores();
    const newRecordBadge = document.getElementById('new-record-badge');
    
    if (isNewRecord) {
      newRecordBadge.classList.remove('hidden');
    } else {
      newRecordBadge.classList.add('hidden');
    }

    // Exibe placar final
    document.getElementById('final-score-val').textContent = game.score;

    // Seleciona um versículo motivacional aleatório de encorajamento para o fim de jogo
    const randomIdx = Math.floor(Math.random() * gameoverPsalmsList.length);
    const psalm = gameoverPsalmsList[randomIdx];
    document.getElementById('gameover-psalm-text').textContent = psalm.text;
    document.getElementById('gameover-psalm-ref').textContent = psalm.ref;

    // Abre o modal de Game Over
    openModal(modalGameOver);
  }


  /* ==========================================
     LOOP CONTRA O TEMPO (TIME ATTACK)
     ========================================== */

  function startTimeAttackLoop() {
    timeInterval = setInterval(() => {
      // Drena o tempo continuamente
      // A velocidade de dreno acelera levemente dependendo da pontuação obtida
      const drenoBase = 0.55; 
      const fatorAceleracao = Math.min(0.45, game.score / 2000 * 0.15);
      
      game.timeRemaining -= (drenoBase + fatorAceleracao);
      
      // Atualiza visualmente a barra
      const pct = (game.timeRemaining / game.timeMax) * 100;
      timeBarFill.style.width = `${Math.max(0, pct)}%`;

      // Som urgente de aviso se o tempo estiver perto de acabar (menos de 20%)
      if (pct <= 20 && Math.floor(game.timeRemaining) % 2 === 0) {
        audio.playBombTick(true);
      }

      if (game.timeRemaining <= 0) {
        game.isGameOver = true;
        handleGameOver();
      }
    }, 500); // Roda 2x por segundo para suavizar barra
  }

  function stopTimer() {
    if (timeInterval) {
      clearInterval(timeInterval);
      timeInterval = null;
    }
  }


  /* ==========================================
     MAPEAMENTO DE EVENTOS DOS BOTÕES
     ========================================== */

  // Botões de Seleção de Modo do Menu Principal
  document.querySelectorAll('.btn-mode').forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.mode;
      startNewGame(mode);
    });
  });

  // Botão de Recordes (Menu)
  document.getElementById('btn-show-scores').addEventListener('click', () => {
    highClassicEl.textContent = game.bestScores.classic[currentGridSize] || 0;
    highBombEl.textContent = game.bestScores.bomb[currentGridSize] || 0;
    highTimeEl.textContent = game.bestScores.time[currentGridSize] || 0;
    openModal(modalScores);
  });

  document.getElementById('btn-close-scores').addEventListener('click', () => {
    closeModal(modalScores);
  });

  // Botão Limpar Recordes
  document.getElementById('btn-reset-scores').addEventListener('click', () => {
    if (confirm('Deseja realmente apagar todo o seu histórico de recordes deste tamanho de grade?')) {
      game.resetHighScores();
      highClassicEl.textContent = 0;
      highBombEl.textContent = 0;
      highTimeEl.textContent = 0;
      updateScoresUI();
    }
  });

  // Botão de Ajustes (Menu)
  document.getElementById('btn-show-settings').addEventListener('click', () => {
    openModal(modalSettings);
  });

  document.getElementById('btn-close-settings').addEventListener('click', () => {
    closeModal(modalSettings);
  });

  // Evento de Troca de Tema Visual
  themeSelect.addEventListener('change', (e) => {
    const newTheme = e.target.value;
    document.body.className = newTheme;
    localStorage.setItem('chosen_block_theme', newTheme);
    
    // Atualiza cor de fundo das partículas no render
    renderer.initAmbientParticles();
  });

  // Evento de Troca de Tamanho do Grid
  gridSelect.addEventListener('change', (e) => {
    currentGridSize = parseInt(e.target.value);
    localStorage.setItem('chosen_block_grid', currentGridSize);
  });

  // Evento de Troca de Vibração
  vibrationToggle.addEventListener('change', (e) => {
    renderer.vibrateEnabled = e.target.checked;
  });

  // Botão Retornar ao Menu (Durante o Jogo)
  document.getElementById('btn-back-menu').addEventListener('click', () => {
    if (confirm('Tem certeza que deseja sair do jogo atual? Seu progresso será perdido.')) {
      stopTimer();
      transitionScreen(gameScreen, menuScreen);
    }
  });

  // Botão Reiniciar Partida (Durante o Jogo)
  document.getElementById('btn-game-reset').addEventListener('click', () => {
    if (confirm('Deseja reiniciar a partida atual?')) {
      startNewGame(game.gameMode);
    }
  });

  // Botão Ativar/Desativar Sons
  btnToggleSound.addEventListener('click', () => {
    audio.toggleMute();
    updateSoundUI();
  });

  // Ações de Game Over
  document.getElementById('btn-gameover-restart').addEventListener('click', () => {
    startNewGame(game.gameMode);
  });

  document.getElementById('btn-gameover-menu').addEventListener('click', () => {
    closeModal(modalGameOver);
    transitionScreen(gameScreen, menuScreen);
  });
};

if (document.readyState === 'interactive' || document.readyState === 'complete') {
  initApp();
} else {
  document.addEventListener('DOMContentLoaded', initApp);
}
