console.log("Chosen Block: audio.js carregado!");
const AudioManager = {
  ctx: null,
  muted: false,
  quizMusicNodes: [],
  quizMusicInterval: null,

  init() {
    if (this.ctx) return;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.muted = localStorage.getItem('chosen_block_muted') === 'true';
      this.setupUnlock();
    } catch (e) {
      console.warn("Web Audio API não é suportada neste navegador.", e);
    }
  },

  setupUnlock() {
    if (!this.ctx) return;
    
    const unlock = () => {
      if (this.ctx && this.ctx.state === 'suspended') {
        const resumePromise = this.ctx.resume();
        if (resumePromise && typeof resumePromise.then === 'function') {
          resumePromise.then(() => {
            this.playSilentSound();
            removeListeners();
          }).catch(err => {
            console.warn("Erro ao retomar o AudioContext no iOS:", err);
          });
        } else {
          this.playSilentSound();
          removeListeners();
        }
      } else {
        this.playSilentSound();
        removeListeners();
      }
    };
    
    const events = ['touchstart', 'touchend', 'mousedown', 'click'];
    const removeListeners = () => {
      events.forEach(evt => {
        window.removeEventListener(evt, unlock, { capture: true });
      });
    };
    
    events.forEach(evt => {
      window.addEventListener(evt, unlock, { passive: true, capture: true });
    });
  },

  playSilentSound() {
    try {
      if (!this.ctx) return;
      const buffer = this.ctx.createBuffer(1, 1, 22050);
      const source = this.ctx.createBufferSource();
      source.buffer = buffer;
      source.connect(this.ctx.destination);
      if (source.start) {
        source.start(0);
      } else if (source.noteOn) {
        source.noteOn(0);
      }
      console.log("AudioContext desbloqueado com sucesso!");
    } catch (e) {
      console.warn("Erro ao reproduzir som silencioso para desbloqueio:", e);
    }
  },

  resume() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  },

  toggleMute() {
    this.init();
    this.muted = !this.muted;
    localStorage.setItem('chosen_block_muted', this.muted);
    if (this.muted) {
      this.stopQuizMusic();
    }
    return this.muted;
  },

  // Efeito 1: Encaixar bloco (Tapa/Thump satisfatório)
  playPlace() {
    this.resume();
    if (this.muted || !this.ctx) return;

    const now = this.ctx.currentTime;
    
    // Sub-bass thump
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.12);
    
    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
    
    // Filtro passa-baixa para amaciar o grave
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(200, now);
    
    osc.connect(gain);
    gain.connect(filter);
    filter.connect(this.ctx.destination);
    
    osc.start(now);
    osc.stop(now + 0.16);

    // Click sutil de ataque para dar impacto físico ao bloco
    const clickOsc = this.ctx.createOscillator();
    const clickGain = this.ctx.createGain();
    
    clickOsc.type = 'sine';
    clickOsc.frequency.setValueAtTime(900, now);
    clickOsc.frequency.exponentialRampToValueAtTime(150, now + 0.02);
    
    clickGain.gain.setValueAtTime(0.12, now);
    clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);
    
    clickOsc.connect(clickGain);
    clickGain.connect(this.ctx.destination);
    
    clickOsc.start(now);
    clickOsc.stop(now + 0.03);
  },

  // Efeito 2: Linha completada com som de Harpa/Cristal ascendente dependendo do Combo
  playClear(combo = 1) {
    this.resume();
    if (this.muted || !this.ctx) return;

    const now = this.ctx.currentTime;
    // Escala pentatônica brilhante em C (C4, D4, E4, G4, A4, C5, D5, E5, G5, A5, C6)
    const scale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 783.99, 880.00, 1046.50];
    
    // Determina notas baseado no combo
    let notesToPlay = [];
    const startIndex = Math.min((combo - 1) * 2, scale.length - 4);
    
    // Combo 1 toca 3 notas, combo maior toca arpejos maiores e mais rápidos
    const count = 3 + Math.min(combo, 4);
    for (let i = 0; i < count; i++) {
      const idx = (startIndex + i) % scale.length;
      notesToPlay.push(scale[idx]);
    }

    const noteDuration = 0.08; // Tempo entre notas
    
    notesToPlay.forEach((freq, idx) => {
      const time = now + (idx * noteDuration);
      
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();
      
      // Combina senoidal e triangular para som de sino limpo
      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, time);
      
      // Vibrato sutil
      osc.frequency.linearRampToValueAtTime(freq + (idx * 3), time + 0.3);
      
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(0.2, time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.4);
      
      filter.type = 'peaking';
      filter.frequency.setValueAtTime(freq * 1.5, time);
      filter.Q.setValueAtTime(1.0, time);
      
      osc.connect(gain);
      gain.connect(filter);
      filter.connect(this.ctx.destination);
      
      osc.start(time);
      osc.stop(time + 0.5);
    });
  },

  // Efeito 3: Início de jogo (Arpejo alegre e ascendente)
  playGameStart() {
    this.resume();
    if (this.muted || !this.ctx) return;

    const now = this.ctx.currentTime;
    const arpeggio = [261.63, 329.63, 392.00, 523.25]; // C maior (C4, E4, G4, C5)
    
    arpeggio.forEach((freq, idx) => {
      const time = now + (idx * 0.1);
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, time);
      
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(0.15, time + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.35);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start(time);
      osc.stop(time + 0.4);
    });
  },

  // Efeito 4: Game Over (Notas menores, tristes e descendentes)
  playGameOver() {
    this.resume();
    if (this.muted || !this.ctx) return;

    const now = this.ctx.currentTime;
    const chord = [392.00, 311.13, 261.63, 196.00]; // Sol menor decrescente (G4, Eb4, C4, G3)
    
    chord.forEach((freq, idx) => {
      const time = now + (idx * 0.15);
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sawtooth'; // Onda mais áspera/melancólica
      osc.frequency.setValueAtTime(freq, time);
      
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(0.15, time + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.8);
      
      // Filtro para escurecer o som
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(500, time);
      filter.frequency.exponentialRampToValueAtTime(100, time + 0.8);
      
      osc.connect(gain);
      gain.connect(filter);
      filter.connect(this.ctx.destination);
      
      osc.start(time);
      osc.stop(time + 0.9);
    });
  },

  // Efeito 5: Tic-tac da bomba (Metrônomo tenso)
  playBombTick(isUrgent = false) {
    this.resume();
    if (this.muted || !this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'sine';
    // Se estiver urgente (baixo contador), apita mais agudo e tenso
    osc.frequency.setValueAtTime(isUrgent ? 1400 : 800, now);
    
    gain.gain.setValueAtTime(isUrgent ? 0.2 : 0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start(now);
    osc.stop(now + 0.07);
  },

  // Efeito 6: Explosão da bomba (Ruído branco com decaimento grave)
  playBombExplosion() {
    this.resume();
    if (this.muted || !this.ctx) return;

    const now = this.ctx.currentTime;
    
    // Cria buffer de ruído branco para explosão
    const bufferSize = this.ctx.sampleRate * 1.5; // 1.5 segundos
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noiseNode = this.ctx.createBufferSource();
    noiseNode.buffer = buffer;
    
    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.8, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
    
    // Filtro passa-baixa dramático que desce na frequência
    const lpFilter = this.ctx.createBiquadFilter();
    lpFilter.type = 'lowpass';
    lpFilter.frequency.setValueAtTime(800, now);
    lpFilter.frequency.exponentialRampToValueAtTime(40, now + 1.0);
    
    noiseNode.connect(lpFilter);
    lpFilter.connect(noiseGain);
    noiseGain.connect(this.ctx.destination);
    
    noiseNode.start(now);
    noiseNode.stop(now + 1.5);
    
    // Adiciona um rumble sub-bass síncrono para tremer os fones
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(100, now);
    subOsc.frequency.linearRampToValueAtTime(10, now + 0.8);
    
    subGain.gain.setValueAtTime(0.5, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
    
    subOsc.connect(subGain);
    subGain.connect(this.ctx.destination);
    
    subOsc.start(now);
    subOsc.stop(now + 0.9);
  },

  // Efeito 7: Acerto no Quiz Bíblico (Arpejo alegre curto)
  playQuizCorrect() {
    this.resume();
    if (this.muted || !this.ctx) return;
    const now = this.ctx.currentTime;
    const notes = [329.63, 392.00, 523.25]; // E4, G4, C5
    notes.forEach((freq, idx) => {
      const time = now + (idx * 0.08);
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, time);
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(0.15, time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(time);
      osc.stop(time + 0.3);
    });
  },

  // Efeito 8: Erro no Quiz Bíblico (Som curto decrescente abafado)
  playQuizIncorrect() {
    this.resume();
    if (this.muted || !this.ctx) return;
    const now = this.ctx.currentTime;
    const notes = [185.00, 155.56]; // F#3, D#3
    notes.forEach((freq, idx) => {
      const time = now + (idx * 0.12);
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, time);
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(0.12, time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.3);
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(300, time);
      osc.connect(gain);
      gain.connect(filter);
      filter.connect(this.ctx.destination);
      osc.start(time);
      osc.stop(time + 0.4);
    });
  },

  // Efeito 9: Música tema de suspense do Quiz (Show do Milhão)
  playQuizMusic() {
    this.resume();
    if (this.muted || !this.ctx) return;
    if (this.quizMusicInterval) return; // Já está tocando

    let beat = 0;
    const playBeat = () => {
      if (this.muted || !this.ctx) return;
      const now = this.ctx.currentTime;
      
      // Batida 1: Baixo super grave (coração)
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(65, now); // Freqüência baixa
      osc1.frequency.exponentialRampToValueAtTime(30, now + 0.15);
      
      gain1.gain.setValueAtTime(0.25, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      
      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.2);
      this.quizMusicNodes.push(osc1);

      // Batida 2: Eco da batida do coração
      const t2 = now + 0.22;
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(60, t2);
      osc2.frequency.exponentialRampToValueAtTime(30, t2 + 0.12);
      
      gain2.gain.setValueAtTime(0.18, t2);
      gain2.gain.exponentialRampToValueAtTime(0.001, t2 + 0.15);
      
      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      osc2.start(t2);
      osc2.stop(t2 + 0.18);
      this.quizMusicNodes.push(osc2);

      // A cada 4 batidas, toca um acorde menor em drone
      if (beat % 4 === 0) {
        // D2 (73.42Hz), A2 (110.0Hz), C3 (130.81Hz) - acorde menor de tensão
        const notes = [73.42, 110.0, 130.81];
        notes.forEach((freq, idx) => {
          const oscP = this.ctx.createOscillator();
          const gainP = this.ctx.createGain();
          
          oscP.type = 'triangle'; // Onda triangular suave e escura
          oscP.frequency.setValueAtTime(freq, now);
          
          gainP.gain.setValueAtTime(0, now);
          gainP.gain.linearRampToValueAtTime(0.06, now + 0.5);
          gainP.gain.exponentialRampToValueAtTime(0.001, now + 2.2);
          
          oscP.connect(gainP);
          gainP.connect(this.ctx.destination);
          
          oscP.start(now);
          oscP.stop(now + 2.3);
          this.quizMusicNodes.push(oscP);
        });
      }

      // Limpa referências antigas para evitar vazamento de memória na lista
      if (this.quizMusicNodes.length > 50) {
        this.quizMusicNodes = this.quizMusicNodes.slice(-20);
      }

      beat++;
    };

    playBeat();
    this.quizMusicInterval = setInterval(() => {
      playBeat();
    }, 1200); // Batida a cada 1.2 segundos
  },

  stopQuizMusic() {
    if (this.quizMusicInterval) {
      clearInterval(this.quizMusicInterval);
      this.quizMusicInterval = null;
    }
    this.quizMusicNodes.forEach(node => {
      try {
        node.stop();
      } catch (e) {}
    });
    this.quizMusicNodes = [];
  }
};
