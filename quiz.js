// Banco de dados de perguntas e gerenciador de estado do Desafio Bíblico

const BIBLE_QUIZ_QUESTIONS = {
  facil: [
    {
      question: "Quem construiu a arca para se salvar do grande Dilúvio?",
      options: ["Moisés", "Abraão", "Noé", "Davi"],
      answer: 2,
      explanation: "Deus ordenou que Noé construísse uma arca de madeira de gofer para salvar a si mesmo, sua família e os animais. (Gênesis 6:14)"
    },
    {
      question: "Quantos mandamentos foram escritos por Deus nas tábuas de pedra dadas a Moisés?",
      options: ["5", "7", "10", "12"],
      answer: 2,
      explanation: "Os Dez Mandamentos (ou Decálogo) foram escritos por Deus e entregues a Moisés no Monte Sinai. (Êxodo 20)"
    },
    {
      question: "Qual profeta foi engolido por um grande peixe após tentar fugir da ordem de Deus?",
      options: ["Elias", "Jonas", "Eliseu", "Isaías"],
      answer: 1,
      explanation: "Jonas tentou fugir de sua missão indo para Társis e acabou sendo engolido por um grande peixe durante três dias. (Jonas 1:17)"
    },
    {
      question: "Qual é o primeiro livro da Bíblia Sagrada?",
      options: ["Gênesis", "Êxodo", "Salmos", "Mateus"],
      answer: 0,
      explanation: "O livro de Gênesis abre a Bíblia e relata a criação do mundo e a história dos patriarcas. (Gênesis 1:1)"
    },
    {
      question: "Quem foi o homem conhecido por sua força extraordinária ligada ao voto de não cortar o cabelo?",
      options: ["Golias", "Sansão", "Davi", "Gideão"],
      answer: 1,
      explanation: "Sansão tinha uma força descomunal concedida por Deus enquanto mantivesse seu voto nazireu. (Juízes 16)"
    },
    {
      question: "Quem era o jovem pastor de ovelhas que derrotou o gigante filisteu Golias?",
      options: ["Salomão", "Saul", "Josué", "Davi"],
      answer: 3,
      explanation: "Davi derrotou Golias usando apenas uma funda e uma pedra, confiando no nome do Senhor dos Exércitos. (1 Samuel 17:45)"
    },
    {
      question: "Qual era a profissão de Jesus em Sua vida terrena antes de iniciar Seu ministério?",
      options: ["Pescador", "Carpinteiro", "Médico", "Agricultor"],
      answer: 1,
      explanation: "Jesus trabalhou como carpinteiro, ofício aprendido com Seu pai adotivo, José. (Marcos 6:3)"
    },
    {
      question: "Quantos discípulos Jesus escolheu inicialmente para O seguirem mais de perto?",
      options: ["7", "10", "12", "70"],
      answer: 2,
      explanation: "Jesus escolheu doze apóstolos para estarem com Ele e enviá-los a pregar o evangelho. (Lucas 6:13)"
    },
    {
      question: "Quem foi o discípulo que traiu Jesus por trinta moedas de prata?",
      options: ["Pedro", "Judas Iscariotes", "Tomé", "João"],
      answer: 1,
      explanation: "Judas Iscariotes entregou Jesus aos chefes dos sacerdotes em troca de 30 moedas de prata. (Mateus 26:15)"
    },
    {
      question: "Em qual cidade Jesus Cristo nasceu?",
      options: ["Nazaré", "Jerusalém", "Belém", "Jericó"],
      answer: 2,
      explanation: "Jesus nasceu em Belém da Judeia, na época do rei Herodes, cumprindo a profecia de Miqueias. (Mateus 2:1)"
    },
    {
      question: "Quem é conhecido nas Escrituras como o 'Pai da Fé'?",
      options: ["Moisés", "Abraão", "Jacó", "Noé"],
      answer: 1,
      explanation: "Abraão creu em Deus e isso lhe foi imputado como justiça, tornando-se o pai dos que creem. (Romanos 4:11)"
    },
    {
      question: "Quem, sob a ordem de Deus, abriu o Mar Vermelho estendendo o seu cajado?",
      options: ["Josué", "Arão", "Moisés", "Elias"],
      answer: 2,
      explanation: "Moisés estendeu a mão sobre o mar e o Senhor soprou um vento oriental que dividiu as águas. (Êxodo 14:21)"
    },
    {
      question: "Qual era o nome da esposa de Abraão?",
      options: ["Sara", "Rebeca", "Raquel", "Lia"],
      answer: 0,
      explanation: "Sara era a esposa de Abraão e mãe de Isaque na velhice do casal. (Gênesis 17:15)"
    },
    {
      question: "Qual é o último livro do Novo Testamento e de toda a Bíblia?",
      options: ["Apocalipse", "Judas", "Hebreus", "Apócrifos"],
      answer: 0,
      explanation: "O Apocalipse, escrito pelo apóstolo João na ilha de Patmos, encerra o cânon bíblico. (Apocalipse 22)"
    },
    {
      question: "Quantos livros tem a Bíblia inteira na versão protestante padrão?",
      options: ["39", "27", "66", "73"],
      answer: 2,
      explanation: "A Bíblia protestante padrão contém 66 livros (39 no Antigo Testamento e 27 no Novo Testamento)."
    },
    {
      question: "Quem foi o primeiro homem criado por Deus?",
      options: ["Abel", "Adão", "Caim", "Sete"],
      answer: 1,
      explanation: "Deus formou Adão do pó da terra e soprou em suas narinas o fôlego de vida. (Gênesis 2:7)"
    },
    {
      question: "Quem foi a primeira mulher, criada a partir de uma costela do homem?",
      options: ["Eva", "Lilith", "Sara", "Rute"],
      answer: 0,
      explanation: "Eva foi criada por Deus para ser a ajudadora idônea de Adão, feita de uma de suas costelas. (Gênesis 2:22)"
    },
    {
      question: "Quem era o irmão de Moisés que o ajudava como porta-voz diante do Faraó no Egito?",
      options: ["Josué", "Calebe", "Arão", "Jetro"],
      answer: 2,
      explanation: "Arão foi designado por Deus como porta-voz de Moisés por ter facilidade em falar. (Êxodo 4:14)"
    },
    {
      question: "Qual profeta foi lançado na cova dos leões por se recusar a parar de orar ao Senhor?",
      options: ["Ezequiel", "Daniel", "Jeremias", "Isaías"],
      answer: 1,
      explanation: "Daniel continuou orando três vezes ao dia e foi jogado na cova, mas Deus enviou um anjo para fechar a boca dos leões. (Daniel 6)"
    },
    {
      question: "Quem foi o melhor amigo de Davi, filho do rei Saul?",
      options: ["Jônatas", "Abner", "Salomão", "Samuel"],
      answer: 0,
      explanation: "Jônatas e Davi tinham uma amizade profunda e fizeram uma aliança eterna de lealdade. (1 Samuel 18:1)"
    },
    {
      question: "Que animal Deus usou para levar pão e carne para o profeta Elias perto do ribeiro de Querite?",
      options: ["Águia", "Pomba", "Corvo", "Leão"],
      answer: 2,
      explanation: "Os corvos traziam a Elias pão e carne pela manhã e à tarde, por ordem de Deus. (1 Reis 17:6)"
    },
    {
      question: "Quantos dias e noites durou a chuva do Dilúvio na Terra?",
      options: ["7 dias e noites", "40 dias e noites", "150 dias e noites", "365 dias e noites"],
      answer: 1,
      explanation: "A chuva caiu sobre a terra durante quarenta dias e quarenta noites para o Dilúvio. (Gênesis 7:12)"
    },
    {
      question: "O que Jesus fez ao ver o choro de Maria e dos judeus pela morte de Lázaro?",
      options: ["Abençoou a todos", "Jesus chorou", "Cantou um salmo", "Orou em silêncio"],
      answer: 1,
      explanation: "Jesus chorou ao ver a dor dos presentes, mostrando Sua profunda compaixão e amor. (João 11:35)"
    },
    {
      question: "Quem foi o amigo de Jesus que ressuscitou após estar no túmulo por quatro dias?",
      options: ["Bartimeu", "Zaqueu", "Lázaro", "Pedro"],
      answer: 2,
      explanation: "Jesus clamou em alta voz: 'Lázaro, vem para fora!' e o que estivera morto saiu atado. (João 11:43-44)"
    },
    {
      question: "Qual dos filhos de Jacó foi vendido como escravo por seus irmãos devido a ciúmes?",
      options: ["José", "Benjamim", "Rúben", "Judá"],
      answer: 0,
      explanation: "Os irmãos de José venderam-no a mercadores ismaelitas que viajavam em caravana rumo ao Egito. (Gênesis 37:28)"
    },
    {
      question: "Quem foi o filho sábio do Rei Davi que o sucedeu no trono e ergueu o Templo?",
      options: ["Roboão", "Salomão", "Absalão", "Adonias"],
      answer: 1,
      explanation: "Salomão foi coroado rei e construiu a luxuosa Casa do Senhor em Jerusalém. (1 Reis 6)"
    },
    {
      question: "Que criatura enganou Eva no Jardim do Éden para que provasse do fruto proibido?",
      options: ["Cachorro", "Serpente", "Águia", "Coruja"],
      answer: 1,
      explanation: "A serpente usou de astúcia para enganar a mulher, levando-a a desobedecer à ordem divina. (Gênesis 3:1)"
    },
    {
      question: "Qual era o nome da mãe de Jesus Cristo?",
      options: ["Isabel", "Marta", "Maria", "Ana"],
      answer: 2,
      explanation: "Maria foi a virgem escolhida pelo Altíssimo para conceber e dar à luz o Messias. (Lucas 1:30-31)"
    },
    {
      question: "Quem batizou Jesus Cristo nas águas do Rio Jordão?",
      options: ["João Batista", "Simão Pedro", "O Sumo Sacerdote", "Elias"],
      answer: 0,
      explanation: "João Batista preparou o caminho do Senhor e O batizou para cumprir toda a justiça. (Mateus 3:13)"
    },
    {
      question: "Qual era o nome da esposa de Isaque e mãe dos gêmeos Esaú e Jacó?",
      options: ["Lia", "Raquel", "Rebeca", "Sara"],
      answer: 2,
      explanation: "Rebeca foi guiada pelo Senhor para ser a esposa de Isaque e nora de Abraão. (Gênesis 24)"
    },
    {
      question: "Quantas pragas Deus enviou sobre a terra do Egito para que Faraó libertasse os hebreus?",
      options: ["3", "7", "10", "12"],
      answer: 2,
      explanation: "Deus enviou dez pragas sucessivas para demonstrar Seu poder sobre os deuses do Egito. (Êxodo 7-12)"
    },
    {
      question: "Em qual dia da criação do mundo Deus estabeleceu o sol, a lua e as estrelas?",
      options: ["Primeiro dia", "Terceiro dia", "Quarto dia", "Sexto dia"],
      answer: 2,
      explanation: "No quarto dia, Deus criou os luminares celestes para governar o dia e a noite e marcar as estações. (Gênesis 1:14-19)"
    }
  ],
  medio: [
    {
      question: "Qual era o nome da mãe do profeta Samuel, que era estéril e orou fervorosamente no templo?",
      options: ["Ana", "Penina", "Rute", "Isabel"],
      answer: 0,
      explanation: "Ana orou com lágrimas e prometeu dedicar seu filho ao Senhor caso saísse de sua esterilidade. (1 Samuel 1)"
    },
    {
      question: "Quem foi o sucessor de Moisés, escolhido por Deus para liderar o povo de Israel na conquista de Canaã?",
      options: ["Josué", "Calebe", "Gideão", "Arão"],
      answer: 0,
      explanation: "Josué, assistente de Moisés, foi cheio do espírito de sabedoria e assumiu o comando de Israel. (Deuteronômio 34:9)"
    },
    {
      question: "Qual era a ocupação de Mateus antes de abandonar tudo e seguir Jesus como um apóstolo?",
      options: ["Pescador", "Cobrador de impostos", "Carpinteiro", "Tenda-maker"],
      answer: 1,
      explanation: "Mateus (ou Levi) estava sentado na coletoria de impostos quando Jesus o chamou: 'Segue-me'. (Lucas 5:27)"
    },
    {
      question: "Em qual monte sagrado Moisés recebeu as duas tábuas de pedra contendo os Dez Mandamentos?",
      options: ["Monte Nebo", "Monte Sinai", "Monte das Oliveiras", "Monte Carmelo"],
      answer: 1,
      explanation: "A Lei foi entregue a Moisés no topo fumegante do Monte Sinai, onde Deus desceu em glória. (Êxodo 19-20)"
    },
    {
      question: "Quem era o rei de Israel quando o jovem pastor Davi derrotou o gigante Golias?",
      options: ["Saul", "Salomão", "Roboão", "Acabe"],
      answer: 0,
      explanation: "Saul governava Israel e ofereceu sua própria armadura para Davi lutar contra o filisteu. (1 Samuel 17)"
    },
    {
      question: "Qual apóstolo escreveu a maior quantidade de livros e epístolas do Novo Testamento?",
      options: ["Pedro", "João", "Paulo", "Lucas"],
      answer: 2,
      explanation: "Paulo de Tarso escreveu 13 (ou 14, se contada Hebreus) cartas para diversas igrejas e pastores."
    },
    {
      question: "Qual discípulo de Jesus tentou caminhar sobre as águas em direção ao Mestre, mas duvidou e começou a afundar?",
      options: ["João", "Tiago", "Pedro", "André"],
      answer: 2,
      explanation: "Pedro andou sobre as águas, mas ao sentir a força do vento teve medo e clamou: 'Senhor, salva-me!'. (Mateus 14:28-30)"
    },
    {
      question: "Por quantas moedas de prata os irmãos de José o venderam aos mercadores ismaelitas?",
      options: ["15 moedas", "20 moedas", "30 moedas", "50 moedas"],
      answer: 1,
      explanation: "Os irmãos decidiram vender José por 20 peças de prata aos mercadores que iam ao Egito. (Gênesis 37:28)"
    },
    {
      question: "Qual profeta de Israel subiu ao céu em um redemoinho acompanhado por um carro e cavalos de fogo?",
      options: ["Elias", "Eliseu", "Isaías", "Jeremias"],
      answer: 0,
      explanation: "Elias foi arrebatado aos céus diante dos olhos de seu discípulo Eliseu. (2 Reis 2:11)"
    },
    {
      question: "Quem foi o sucessor do profeta Elias e herdou uma porção dobrada do seu espírito profético?",
      options: ["Eliseu", "Samuel", "Ezequiel", "Josué"],
      answer: 0,
      explanation: "Eliseu acompanhou Elias até o fim e recolheu o seu manto após a sua partida celestial. (2 Reis 2)"
    },
    {
      question: "Quem foi a corajosa rainha judia da Pérsia que arriscou a vida para salvar o seu povo de um decreto de extermínio?",
      options: ["Vasti", "Ester", "Jezabel", "Atalia"],
      answer: 1,
      explanation: "A rainha Ester jejuou e apresentou-se sem convite ao rei Assuero para expor o plano maligno de Hamã. (Ester 4-5)"
    },
    {
      question: "Onde Moisés faleceu após Deus lhe mostrar a Terra Prometida a partir do cume da montanha?",
      options: ["Monte Sinai", "Monte Nebo", "Monte Carmelo", "Monte Hor"],
      answer: 1,
      explanation: "Moisés subiu as planícies de Moabe rumo ao Monte Nebo, onde contemplou Canaã antes de falecer. (Deuteronômio 34:1)"
    },
    {
      question: "Qual o nome do jardim onde Jesus orou e suou gotas de sangue antes de ser preso pelas guardas?",
      options: ["Getsêmani", "Jardim do Éden", "Gólgota", "Betânia"],
      answer: 0,
      explanation: "Getsêmani significa 'prensa de azeite', localizado na encosta do Monte das Oliveiras. (Mateus 26:36)"
    },
    {
      question: "Qual livro poético da Bíblia é composto por 150 cânticos, orações e poemas litúrgicos?",
      options: ["Provérbios", "Eclesiastes", "Cântico dos Cânticos", "Salmos"],
      answer: 3,
      explanation: "O livro dos Salmos era o hinário do templo israelita, escrito por Davi, Asafe e outros. (Salmos 1-150)"
    },
    {
      question: "Quantas aberturas de luz (janelas) a Arca de Noé possuía, de acordo com as instruções divinas?",
      options: ["Uma", "Duas", "Três", "Nenhuma"],
      answer: 0,
      explanation: "Deus mandou fazer apenas uma janela (ou abertura) a um côvado do topo da arca. (Gênesis 6:16)"
    },
    {
      question: "Quem foi o pai do profeta João Batista, que ficou temporariamente mudo até o nascimento do bebê?",
      options: ["Zacarias", "Simeão", "Cofni", "Ananias"],
      answer: 0,
      explanation: "O sacerdote Zacarias duvidou da mensagem do anjo Gabriel sobre o nascimento de João e emudeceu. (Lucas 1)"
    },
    {
      question: "Qual apóstolo ficou temporariamente cego por uma luz intensa enquanto viajava no caminho de Damasco?",
      options: ["Pedro", "Paulo (Saulo)", "Barnabé", "Filipe"],
      answer: 1,
      explanation: "Saulo foi cercado por uma luz celestial e ouviu a voz de Jesus, ficando três dias cego. (Atos 9)"
    },
    {
      question: "Quem foi o primeiro mártir cristão mencionado no livro de Atos, apedrejado após testemunhar sobre Jesus?",
      options: ["Tiago", "Estêvão", "Pedro", "Filipe"],
      answer: 1,
      explanation: "Estêvão, homem cheio de graça e poder, orou por seus assassinos enquanto era apedrejado. (Atos 7)"
    },
    {
      question: "Quem foi obrigado pelos soldados romanos a carregar a pesada cruz de Jesus a caminho do Calvário?",
      options: ["Simão Cireneu", "Pedro", "José de Arimateia", "Nicodemos"],
      answer: 0,
      explanation: "Simão de Cirene, que vinha do campo, foi constrangido a carregar a cruz atrás de Jesus. (Lucas 23:26)"
    },
    {
      question: "Para qual das sete igrejas do Apocalipse foi enviada a repreensão por não ser nem fria nem quente, mas morna?",
      options: ["Éfeso", "Sardes", "Filadélfia", "Laodicéia"],
      answer: 3,
      explanation: "A igreja de Laodicéia foi advertida por sua mornidão espiritual e auto-suficiência enganosa. (Apocalipse 3:15-16)"
    },
    {
      question: "Por quanto tempo o povo judeu ficou cativo na Babilônia, conforme profetizado por Jeremias?",
      options: ["40 anos", "70 anos", "100 anos", "400 anos"],
      answer: 1,
      explanation: "O cativeiro babilônico durou 70 anos, terminando com o decreto de Ciro, rei da Pérsia. (Jeremias 25:11)"
    },
    {
      question: "Qual era o nome do sogro de Moisés, um sacerdote de Midiã que lhe deu valiosos conselhos administrativos?",
      options: ["Jetro (Reuel)", "Labão", "Balaão", "Eliú"],
      answer: 0,
      explanation: "Jetro visitou Moisés e o aconselhou a nomear chefes de mil, de cem e de cinquenta para julgar o povo. (Êxodo 18)"
    },
    {
      question: "Em qual mar Jesus realizou o milagre de repreender o vento e acalmar a tempestade furiosa?",
      options: ["Mar Morto", "Mar Vermelho", "Mar Mediterrâneo", "Mar da Galileia (Tiberíades)"],
      answer: 3,
      explanation: "Jesus dormia no barco quando a tempestade subiu no Mar da Galileia, acordando e acalmando as águas. (Marcos 4:39)"
    },
    {
      question: "Quem era o parente resgatador rico que casou-se com a viúva moabita Rute e tornou-se avô de Jessé?",
      options: ["Elimeleque", "Boaz", "Malom", "Quiliom"],
      answer: 1,
      explanation: "Boaz tomou Rute como esposa e eles geraram Obede, pai de Jessé e avô do Rei Davi. (Rute 4)"
    },
    {
      question: "Quantos cestos cheios de pedaços de pães e peixes sobraram após Jesus alimentar cinco mil homens?",
      options: ["5 cestos", "7 cestos", "12 cestos", "24 cestos"],
      answer: 2,
      explanation: "Após todos comerem e se saciarem, os discípulos recolheram doze cestos cheios de pedaços. (Mateus 14:20)"
    },
    {
      question: "A qual tribo de Israel pertencia o apóstolo Paulo, conforme ele mesmo relata em suas cartas?",
      options: ["Judá", "Levi", "Benjamim", "Dã"],
      answer: 2,
      explanation: "Paulo afirma ser israelita da descendência de Abraão, da tribo de Benjamim. (Romanos 11:1)"
    },
    {
      question: "Qual rei de Judá adoeceu gravemente e teve sua vida prolongada por mais 15 anos por Deus após clamar?",
      options: ["Josias", "Ezequias", "Manassés", "Uziás"],
      answer: 1,
      explanation: "O profeta Isaías deu a mensagem de morte, mas Ezequias orou e Deus acrescentou 15 anos à sua vida. (2 Reis 20)"
    },
    {
      question: "Quem foi o ímpio rei de Israel que casou-se com a fenícia Jezabel e introduziu o culto sistemático a Baal?",
      options: ["Acabe", "Jeroboão", "Jeú", "Manassés"],
      answer: 0,
      explanation: "O rei Acabe fez o que era mau perante o Senhor, mais do que todos os reis que o antecederam. (1 Reis 16:30)"
    },
    {
      question: "Quantas pessoas no total foram salvas dentro da Arca de Noé durante o Dilúvio?",
      options: ["2", "4", "8", "12"],
      answer: 2,
      explanation: "Foram salvas oito pessoas no total: Noé, sua esposa, seus três filhos (Sem, Cam e Jafé) e suas noras. (1 Pedro 3:20)"
    },
    {
      question: "Quem foi a única juíza e profetisa que liderou Israel na libertação contra a opressão do rei Jabim?",
      options: ["Rute", "Débora", "Miriã", "Noemi"],
      answer: 1,
      explanation: "Débora julgava Israel debaixo de uma palmeira e convocou Baraque para guerrear contra Sísera. (Juízes 4)"
    },
    {
      question: "Qual o nome do monte na terra de Moriá onde Abraão preparou o altar para oferecer seu filho Isaque em sacrifício?",
      options: ["Monte Sinai", "Monte Moriá", "Monte Carmelo", "Monte das Oliveiras"],
      answer: 1,
      explanation: "Abraão subiu o Monte Moriá e ergueu o altar onde Deus providenciou um cordeiro para o sacrifício. (Gênesis 22:2)"
    },
    {
      question: "Qual o significado da palavra hebraica 'Emanuel', aplicada como título profético de Jesus Cristo em Mateus?",
      options: ["Deus conosco", "Deus é amor", "Deus é minha força", "Salvador dos homens"],
      answer: 0,
      explanation: "Mateus explica que o nome anunciado por Isaías significa 'Deus conosco' (Immanuel). (Mateus 1:23)"
    }
  ],
  dificil: [
    {
      question: "Quem foi o homem mais velho registrado na genealogia bíblica, tendo vivido 969 anos?",
      options: ["Enoque", "Matusalém", "Lameque", "Jarede"],
      answer: 1,
      explanation: "Matusalém era filho de Enoque e faleceu no ano em que o Dilúvio caiu sobre a terra. (Gênesis 5:27)"
    },
    {
      question: "Qual era o nome da divindade filisteia cujo templo o juiz Sansão derrubou em seu último ato de força?",
      options: ["Baal", "Dagom", "Astarote", "Camos"],
      answer: 1,
      explanation: "Os filisteus estavam reunidos no templo de Dagom celebrando a captura de Sansão quando ele derrubou as colunas. (Juízes 16:23)"
    },
    {
      question: "Qual profeta foi ordenado por Deus a casar-se com uma mulher adúltera chamada Gômer, como ilustração simbólica?",
      options: ["Oseias", "Amós", "Miqueias", "Malaquias"],
      answer: 0,
      explanation: "A infidelidade de Gômer representava o desvio espiritual e a idolatria da nação de Israel. (Oseias 1)"
    },
    {
      question: "No Apocalipse, onde a antiga serpente (o Diabo) é acorrentada por mil anos pelo anjo que desce do céu?",
      options: ["No Inferno", "No Abismo", "No Lago de Fogo", "No vale de Josafá"],
      answer: 1,
      explanation: "O anjo prendeu a serpente e a lançou no Abismo, fechando-o e selando-o por mil anos. (Apocalipse 20:1-3)"
    },
    {
      question: "Quem era o idoso Sumo Sacerdote de Israel que acolheu o menino Samuel no santuário de Siló?",
      options: ["Eli", "Esdras", "Caifás", "Melquisedeque"],
      answer: 0,
      explanation: "Eli cuidou da educação do jovem Samuel, embora tenha falhado em corrigir seus próprios filhos rebeldes. (1 Samuel 2)"
    },
    {
      question: "Quem foi o primeiro rei do Reino do Norte (Israel de dez tribos) após a cisão do reino unido?",
      options: ["Roboão", "Jeroboão I", "Acabe", "Jeú"],
      answer: 1,
      explanation: "Jeroboão I liderou a revolta das dez tribos contra Roboão, filho de Salomão, criando o Reino do Norte. (1 Reis 12)"
    },
    {
      question: "Quem foi o pai de Matusalém, homem que andou com Deus e não experimentou a morte física?",
      options: ["Enoque", "Lameque", "Sete", "Noé"],
      answer: 0,
      explanation: "Enoque andou com Deus por 300 anos após gerar Matusalém, e Deus o levou para Si. (Gênesis 5:21-24)"
    },
    {
      question: "Quantos anos Abraão tinha quando o seu filho prometido Isaque finalmente nasceu de sua esposa Sara?",
      options: ["85 anos", "99 anos", "100 anos", "120 anos"],
      answer: 2,
      explanation: "Abraão tinha cem anos quando Isaque nasceu, um milagre absoluto dada a idade avançada do casal. (Gênesis 21:5)"
    },
    {
      question: "Qual o nome dado ao local onde Jacó lutou com um homem (anjo) até o amanhecer e teve seu nome mudado para Israel?",
      options: ["Betel", "Peniel", "Siquém", "Hebrom"],
      answer: 1,
      explanation: "Jacó chamou aquele lugar de Peniel ('Face de Deus'), dizendo: 'Vi a Deus face a face e minha vida foi salva'. (Gênesis 32:30)"
    },
    {
      question: "Em qual ilha grega o apóstolo João estava exilado quando escreveu o livro do Apocalipse?",
      options: ["Creta", "Patmos", "Chipre", "Maltas"],
      answer: 1,
      explanation: "João foi exilado na pequena ilha de Patmos por causa da Palavra de Deus e do testemunho de Jesus. (Apocalipse 1:9)"
    },
    {
      question: "Qual era o nome do primeiro filho que Moisés teve com sua esposa Zípora na terra de Midiã?",
      options: ["Gérson", "Eliézer", "Coate", "Finéias"],
      answer: 0,
      explanation: "Moisés chamou-o Gérson, pois disse: 'Fui estrangeiro (Ger) em terra alheia'. (Êxodo 18:3)"
    },
    {
      question: "De acordo com a narrativa em 2 Samuel 21:19, quem é mencionado como tendo matado o irmão de Golias de Gate?",
      options: ["Elanan", "Abisai", "Benaia", "Joabe"],
      answer: 0,
      explanation: "Elanan, filho de Jaaré-Oregim, matou Lami, o irmão de Golias, cuja lança parecia o eixo de um tecelão."
    },
    {
      question: "Quem era o rei de Moabe que, temendo o povo de Israel, contratou o profeta pagão Balaão para amaldiçoá-los?",
      options: ["Balaque", "Eglom", "Mesa", "Sifor"],
      answer: 0,
      explanation: "Balaque, filho de Zipor, enviou mensageiros com presentes para contratar Balaão. (Números 22)"
    },
    {
      question: "Qual profeta foi levado em espírito por Deus a um vale de ossos secos e profetizou a ressurreição deles?",
      options: ["Isaías", "Jeremias", "Ezequiel", "Daniel"],
      answer: 2,
      explanation: "Ezequiel profetizou ao sopro e os ossos juntaram-se, formando um vasto exército vivo. (Ezequiel 37)"
    },
    {
      question: "Quantos capítulos possui o longo e importante livro profético de Isaías no Antigo Testamento?",
      options: ["40", "50", "66", "150"],
      answer: 2,
      explanation: "O livro de Isaías contém exatamente 66 capítulos, o mesmo número de livros da Bíblia protestante."
    },
    {
      question: "Quem foi a primeira pessoa a registrar ter visto e conversado com Jesus ressuscitado na manhã do domingo?",
      options: ["Maria Madalena", "Simão Pedro", "João", "Maria, mãe de Tiago"],
      answer: 0,
      explanation: "Jesus ressuscitou de manhã e apareceu primeiramente a Maria Madalena, de quem havia expelido sete demônios. (Marcos 16:9)"
    },
    {
      question: "Com qual palavra solene termina o último livro do Antigo Testamento (Malaquias) na tradução em português de João Ferreira de Almeida?",
      options: ["Amém", "Senhor", "Maldição", "Silêncio"],
      answer: 2,
      explanation: "Malaquias 4:6 termina com a frase: '...para que eu não venha e fira a terra com maldição'."
    },
    {
      question: "Quem era a avó materna do jovem pastor Timóteo, citada nominalmente por Paulo por transmitir sua fé?",
      options: ["Lóide", "Eunice", "Priscila", "Dâmaris"],
      answer: 0,
      explanation: "Paulo elogia a fé sem fingimento de Timóteo, que primeiro habitou em sua avó Lóide e em sua mãe Eunice. (2 Timóteo 1:5)"
    },
    {
      question: "Quantas cidades de refúgio foram estabelecidas na partilha da terra para abrigar quem matasse alguém por acidente?",
      options: ["3", "6", "10", "12"],
      answer: 1,
      explanation: "Foram designadas seis cidades de refúgio (três no lado leste e três no lado oeste do rio Jordão). (Josué 20)"
    },
    {
      question: "Qual rei de Judá começou a reinar com apenas 8 anos de idade e promoveu uma reforma ao achar o Livro da Lei?",
      options: ["Josias", "Joás", "Uzias", "Ezequias"],
      answer: 0,
      explanation: "Josias governou por 31 anos e ordenou a purificação do templo e do reino ao ouvir a leitura da Lei. (2 Reis 22)"
    },
    {
      question: "De qual cidade filisteia era originário o terrível guerreiro gigante Golias?",
      options: ["Gate", "Gaza", "Asdode", "Ascalom"],
      answer: 0,
      explanation: "Golias pertencia à cidade de Gate, um dos redutos históricos de gigantes na Filístia. (1 Samuel 17:4)"
    },
    {
      question: "Por quantos anos consecutivos os israelitas comeram do maná do céu até chegarem à fronteira de Canaã?",
      options: ["7 anos", "40 anos", "50 anos", "70 anos"],
      answer: 1,
      explanation: "Os israelitas comeram maná por 40 anos, cessando no dia seguinte ao que comeram do fruto da terra. (Êxodo 16:35 / Josué 5:12)"
    },
    {
      question: "Qual era o nome da irmã de Moisés e Arão, que entoou o cântico de vitória com tamborins após o Mar Vermelho?",
      options: ["Miriã", "Zípora", "Joquebede", "Cozbi"],
      answer: 0,
      explanation: "A profetisa Miriã, irmã mais velha de Moisés e Arão, liderou as mulheres no cântico do mar. (Êxodo 15:20)"
    },
    {
      question: "Quem sepultou Moisés em um vale secreto na terra de Moabe, de modo que ninguém sabe seu túmulo até hoje?",
      options: ["Josué", "Os anjos", "O próprio Deus", "Ninguém, ele subiu aos céus"],
      answer: 2,
      explanation: "Deuteronômio 34:6 afirma que o próprio Deus sepultou Moisés, preservando o local em segredo."
    },
    {
      question: "Quantos filhos homens biológicos Jacó (Israel) gerou, cujos nomes batizaram as tribos originais?",
      options: ["10", "12", "13", "70"],
      answer: 1,
      explanation: "Jacó teve 12 filhos homens gerados com Lia, Raquel, Bila e Zilpa. (Gênesis 35:22)"
    },
    {
      question: "Qual profeta confrontou pessoalmente o rei Davi por seu pecado de adultério com Bate-Seba e morte de Urias?",
      options: ["Natã", "Gad", "Samuel", "Elias"],
      answer: 0,
      explanation: "Natã contou uma parábola sobre um homem rico e sua ovelhinha antes de apontar: 'Tu és esse homem!'. (2 Samuel 12)"
    },
    {
      question: "Quem era o pai de Davi, morador de Belém, que enviou seus filhos mais velhos ao exército de Saul?",
      options: ["Jessé", "Boaz", "Saul", "Salomão"],
      answer: 0,
      explanation: "Jessé era efrateu de Belém e tinha oito filhos, sendo Davi o caçula. (1 Samuel 16)"
    },
    {
      question: "Qual era o nome da mãe do rei Salomão, que ajudou a desvendar a conspiração de Adonias pelo trono?",
      options: ["Bate-Seba", "Abital", "Maaca", "Hagite"],
      answer: 0,
      explanation: "Bate-Seba, esposa de Davi, intercedeu junto ao rei envelhecido para honrar a promessa de coroar Salomão. (1 Reis 1)"
    },
    {
      question: "Quem foi a moradora de Jericó poupada da ruína com sua família por ter ocultado os dois espiões mandados por Josué?",
      options: ["Raabe", "Rute", "Délila", "Gômer"],
      answer: 0,
      explanation: "Raabe escondeu os espiões sob talos de linho no telhado e colocou um cordão vermelho na janela como sinal. (Josué 2)"
    },
    {
      question: "Qual era o nome da terra natal de Jó, onde ele morava quando vieram as terríveis calamidades?",
      options: ["Uz", "Ur", "Midiã", "Társis"],
      answer: 0,
      explanation: "O livro de Jó abre descrevendo: 'Havia um homem na terra de Uz, cujo nome era Jó...'. (Jó 1:1)"
    },
    {
      question: "Quem foi o homem escolhido para ocupar a vaga de apóstolo deixada por Judas Iscariotes, conforme Atos 1?",
      options: ["Matias", "José Barsabás", "Barnabé", "Estêvão"],
      answer: 0,
      explanation: "A igreja lançou sortes entre Matias e Barsabás, e a sorte caiu sobre Matias, que se uniu aos onze. (Atos 1:26)"
    },
    {
      question: "Qual foi o rei da Babilônia que viu uma mão misteriosa escrevendo o julgamento divino nas paredes de seu banquete?",
      options: ["Nabucodonosor", "Belsazar", "Dario", "Ciro"],
      answer: 1,
      explanation: "Belsazar ofereceu um banquete usando as taças sagradas do Templo quando a escrita apareceu na parede. (Daniel 5)"
    }
  ]
};

class BibleQuizGame {
  constructor() {
    this.level = 'facil'; // 'facil', 'medio', 'dificil'
    this.questions = [];  // Array de 20 perguntas selecionadas
    this.currentIndex = 0;
    this.score = 0;
    this.selectedOption = null;
    this.answered = false;
    this.bestScores = {
      facil: 0,
      medio: 0,
      dificil: 0
    };
    this.loadBestScores();
  }

  // Inicializa uma nova partida do quiz com um nível escolhido
  start(level) {
    this.level = level;
    this.currentIndex = 0;
    this.score = 0;
    this.selectedOption = null;
    this.answered = false;

    const pool = BIBLE_QUIZ_QUESTIONS[level] || [];
    // Clona e embaralha as perguntas da reserva
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    // Seleciona as primeiras 20 perguntas do pool embaralhado
    this.questions = shuffled.slice(0, 20);
    
    // Se por acaso a reserva tiver menos de 20 perguntas (não é o caso), completa com repetição segura
    if (this.questions.length < 20) {
      this.questions = this.questions.concat(shuffled.slice(0, 20 - this.questions.length));
    }
  }

  // Retorna a pergunta atual
  getCurrentQuestion() {
    return this.questions[this.currentIndex];
  }

  // Processa a seleção de uma resposta pelo usuário
  selectOption(optionIndex) {
    if (this.answered) return null;
    this.selectedOption = optionIndex;
    this.answered = true;

    const currentQuestion = this.getCurrentQuestion();
    const isCorrect = (optionIndex === currentQuestion.answer);
    
    if (isCorrect) {
      this.score++;
    }

    return {
      isCorrect: isCorrect,
      correctIndex: currentQuestion.answer
    };
  }

  // Avança para a próxima pergunta. Retorna false se o quiz chegou ao fim.
  nextQuestion() {
    if (this.currentIndex < 19 && this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.selectedOption = null;
      this.answered = false;
      return true;
    }
    
    // Fim das 20 perguntas, atualiza recordes locais
    this.updateBestScores();
    return false;
  }

  // Atualiza recorde local para a dificuldade ativa
  updateBestScores() {
    const currentBest = this.bestScores[this.level] || 0;
    if (this.score > currentBest) {
      this.bestScores[this.level] = this.score;
      this.saveBestScores();
      return true; // Novo recorde alcançado!
    }
    return false;
  }

  saveBestScores() {
    localStorage.setItem('chosen_block_quiz_best_scores', JSON.stringify(this.bestScores));
  }

  loadBestScores() {
    const saved = localStorage.getItem('chosen_block_quiz_best_scores');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.bestScores = {
          facil: parsed.facil || 0,
          medio: parsed.medio || 0,
          dificil: parsed.dificil || 0
        };
      } catch (e) {
        console.error("Erro ao ler recordes do quiz:", e);
      }
    }
  }
}
