// Banco de dados de perguntas e gerenciador de estado do Desafio Bíblico

const BIBLE_QUIZ_QUESTIONS = {
  "facil": [
    {
      "question": "Quem construiu a arca para se salvar do grande Dilúvio?",
      "options": [
        "Moisés",
        "Abraão",
        "Noé",
        "Davi"
      ],
      "answer": 2,
      "explanation": "Deus ordenou que Noé construísse uma arca de madeira de gofer para salvar a si mesmo, sua família e os animais. (Gênesis 6:14)"
    },
    {
      "question": "Quantos mandamentos foram escritos por Deus nas tábuas de pedra dadas a Moisés?",
      "options": [
        "5",
        "7",
        "10",
        "12"
      ],
      "answer": 2,
      "explanation": "Os Dez Mandamentos foram escritos por Deus e entregues a Moisés no Monte Sinai. (Êxodo 20)"
    },
    {
      "question": "Qual profeta foi engolido por um grande peixe após tentar fugir da ordem de Deus?",
      "options": [
        "Elias",
        "Jonas",
        "Eliseu",
        "Isaías"
      ],
      "answer": 1,
      "explanation": "Jonas tentou fugir de sua missão indo para Társis e acabou sendo engolido por um grande peixe durante três dias. (Jonas 1:17)"
    },
    {
      "question": "Qual é o primeiro livro da Bíblia Sagrada?",
      "options": [
        "Gênesis",
        "Êxodo",
        "Salmos",
        "Mateus"
      ],
      "answer": 0,
      "explanation": "O livro de Gênesis abre a Bíblia e relata a criação do mundo e a história dos patriarcas. (Gênesis 1:1)"
    },
    {
      "question": "Quem foi o homem conhecido por sua força extraordinária ligada ao voto de não cortar o cabelo?",
      "options": [
        "Golias",
        "Sansão",
        "Davi",
        "Gideão"
      ],
      "answer": 1,
      "explanation": "Sansão tinha uma força descomunal concedida por Deus enquanto mantivesse seu voto nazireu. (Juízes 16)"
    },
    {
      "question": "Quem era o jovem pastor de ovelhas que derrotou o gigante filisteu Golias?",
      "options": [
        "Salomão",
        "Saul",
        "Josué",
        "Davi"
      ],
      "answer": 3,
      "explanation": "Davi derrotou Golias usando apenas uma funda e uma pedra, confiando no nome do Senhor dos Exércitos. (1 Samuel 17:45)"
    },
    {
      "question": "Qual era a profissão de Jesus em Sua vida terrena antes de iniciar Seu ministério?",
      "options": [
        "Pescador",
        "Carpinteiro",
        "Médico",
        "Agricultor"
      ],
      "answer": 1,
      "explanation": "Jesus trabalhou como carpinteiro, ofício aprendido com Seu pai adotivo, José. (Marcos 6:3)"
    },
    {
      "question": "Quantos discípulos Jesus escolheu inicialmente para O seguirem mais de perto?",
      "options": [
        "7",
        "10",
        "12",
        "70"
      ],
      "answer": 2,
      "explanation": "Jesus escolheu doze apóstolos para estarem com Ele e enviá-los a pregar o evangelho. (Lucas 6:13)"
    },
    {
      "question": "Quem foi o discípulo que traiu Jesus por trinta moedas de prata?",
      "options": [
        "Pedro",
        "Judas Iscariotes",
        "Tomé",
        "João"
      ],
      "answer": 1,
      "explanation": "Judas Iscariotes entregou Jesus aos chefes dos sacerdotes em troca de 30 moedas de prata. (Mateus 26:15)"
    },
    {
      "question": "Em qual cidade Jesus Cristo nasceu?",
      "options": [
        "Nazaré",
        "Jerusalém",
        "Belém",
        "Jericó"
      ],
      "answer": 2,
      "explanation": "Jesus nasceu em Belém da Judeia, na época do rei Herodes, cumprindo a profecia de Miqueias. (Mateus 2:1)"
    },
    {
      "question": "Quem é conhecido nas Escrituras como o 'Pai da Fé'?",
      "options": [
        "Moisés",
        "Abraão",
        "Jacó",
        "Noé"
      ],
      "answer": 1,
      "explanation": "Abraão creu em Deus e isso lhe foi imputado como justiça, tornando-se o pai dos que creem. (Romanos 4:11)"
    },
    {
      "question": "Quem, sob a ordem de Deus, abriu o Mar Vermelho estendendo o seu cajado?",
      "options": [
        "Josué",
        "Arão",
        "Moisés",
        "Elias"
      ],
      "answer": 2,
      "explanation": "Moisés estendeu a mão sobre o mar e o Senhor soprou um vento oriental que dividiu as águas. (Êxodo 14:21)"
    },
    {
      "question": "Qual era a nome da esposa de Abraão?",
      "options": [
        "Sara",
        "Rebeca",
        "Raquel",
        "Lia"
      ],
      "answer": 0,
      "explanation": "Sara era a esposa de Abraão e mãe de Isaque na velhice do casal. (Gênesis 17:15)"
    },
    {
      "question": "Qual é o último livro do Novo Testamento e de toda a Bíblia?",
      "options": [
        "Apocalipse",
        "Judas",
        "Hebreus",
        "Apócrifos"
      ],
      "answer": 0,
      "explanation": "O Apocalipse, escrito pelo apóstolo João na ilha de Patmos, encerra o cânon bíblico. (Apocalipse 22)"
    },
    {
      "question": "Quantos livros tem a Bíblia inteira na versão protestante padrão?",
      "options": [
        "39",
        "27",
        "66",
        "73"
      ],
      "answer": 2,
      "explanation": "A Bíblia protestante padrão contém 66 livros (39 no Antigo Testamento e 27 no Novo Testamento)."
    },
    {
      "question": "Quem foi o primeiro homem criado por Deus?",
      "options": [
        "Abel",
        "Adão",
        "Caim",
        "Sete"
      ],
      "answer": 1,
      "explanation": "Deus formou Adão do pó da terra e soprou em suas narinas o fôlego de vida. (Gênesis 2:7)"
    },
    {
      "question": "Quem foi a primeira mulher, criada a partir de uma costela do homem?",
      "options": [
        "Eva",
        "Lilith",
        "Sara",
        "Rute"
      ],
      "answer": 0,
      "explanation": "Eva foi criada por Deus para ser a ajudadora idônea de Adão, feita de uma de suas costelas. (Gênesis 2:22)"
    },
    {
      "question": "Quem era o irmão de Moisés que o ajudava como porta-voz diante do Faraó no Egito?",
      "options": [
        "Josué",
        "Calebe",
        "Arão",
        "Jetro"
      ],
      "answer": 2,
      "explanation": "Arão foi designado por Deus como porta-voz de Moisés por ter facilidade em falar. (Êxodo 4:14)"
    },
    {
      "question": "Qual profeta foi lançado na cova dos leões por se recusar a parar de orar ao Senhor?",
      "options": [
        "Ezequiel",
        "Daniel",
        "Jeremias",
        "Isaías"
      ],
      "answer": 1,
      "explanation": "Daniel continuou orando três vezes ao dia e foi jogado na cova, mas Deus enviou um anjo para fechar a boca dos leões. (Daniel 6)"
    },
    {
      "question": "Quem foi o melhor amigo de Davi, filho do rei Saul?",
      "options": [
        "Jônatas",
        "Abner",
        "Salomão",
        "Samuel"
      ],
      "answer": 0,
      "explanation": "Jônatas e Davi tinham uma amizade profunda e fizeram uma aliança eterna de lealdade. (1 Samuel 18:1)"
    },
    {
      "question": "Que animal Deus usou para levar pão e carne para o profeta Elias perto do ribeiro de Querite?",
      "options": [
        "Águia",
        "Pomba",
        "Corvo",
        "Leão"
      ],
      "answer": 2,
      "explanation": "Os corvos traziam a Elias pão e carne pela manhã e à tarde, por ordem de Deus. (1 Reis 17:6)"
    },
    {
      "question": "Quantos dias e noites durou a chuva do Dilúvio na Terra?",
      "options": [
        "7 dias e noites",
        "40 dias e noites",
        "150 dias e noites",
        "365 dias e noites"
      ],
      "answer": 1,
      "explanation": "A chuva caiu sobre a terra durante quarenta dias e quarenta noites para o Dilúvio. (Gênesis 7:12)"
    },
    {
      "question": "O que Jesus fez ao ver o choro de Maria e dos judeus pela morte de Lázaro?",
      "options": [
        "Abençoou a todos",
        "Jesus chorou",
        "Cantou um salmo",
        "Orot em silêncio"
      ],
      "answer": 1,
      "explanation": "Jesus chorou ao ver a dor dos presentes, mostrando Sua profunda compaixão e amor. (João 11:35)"
    },
    {
      "question": "Quem foi o amigo de Jesus que ressuscitou após estar no túmulo por quatro dias?",
      "options": [
        "Bartimeu",
        "Zaqueu",
        "Lázaro",
        "Pedro"
      ],
      "answer": 2,
      "explanation": "Jesus clamou em alta voz: 'Lázaro, vem para fora!' e o que estivera morto saiu atado. (João 11:43-44)"
    },
    {
      "question": "Qual dos filhos de Jacó foi vendido como escravo por seus irmãos devido a ciúmes?",
      "options": [
        "José",
        "Benjamim",
        "Rúben",
        "Judá"
      ],
      "answer": 0,
      "explanation": "Os irmãos de José venderam-no a mercadores ismaelitas que viajavam em caravana rumo ao Egito. (Gênesis 37:28)"
    },
    {
      "question": "Quem foi o filho sábio do Rei Davi que o sucedeu no trono e ergueu o Templo?",
      "options": [
        "Roboão",
        "Salomão",
        "Absalão",
        "Adonias"
      ],
      "answer": 1,
      "explanation": "Salomão foi coroado rei e construiu a luxuosa Casa do Senhor em Jerusalém. (1 Reis 6)"
    },
    {
      "question": "Que criatura enganou Eva no Jardim do Éden para que provasse do fruto proibido?",
      "options": [
        "Cachorro",
        "Serpente",
        "Águia",
        "Coruja"
      ],
      "answer": 1,
      "explanation": "A serpente usou de astúcia para enganar a mulher, levando-a a desobedecer à ordem divina. (Gênesis 3:1)"
    },
    {
      "question": "Qual era o nome da mãe de Jesus Cristo?",
      "options": [
        "Isabel",
        "Marta",
        "Maria",
        "Ana"
      ],
      "answer": 2,
      "explanation": "Maria foi a virgem escolhida pelo Altíssimo para conceber e dar à luz o Messias. (Lucas 1:30-31)"
    },
    {
      "question": "Quem batizou Jesus Cristo nas águas do Rio Jordão?",
      "options": [
        "João Batista",
        "Simão Pedro",
        "O Sumo Sacerdote",
        "Elias"
      ],
      "answer": 0,
      "explanation": "João Batista preparou o caminho do Senhor e O batizou para cumprir toda a justiça. (Mateus 3:13)"
    },
    {
      "question": "Qual era o nome da esposa de Isaque e mãe dos gêmeos Esaú e Jacó?",
      "options": [
        "Lia",
        "Raquel",
        "Rebeca",
        "Sara"
      ],
      "answer": 2,
      "explanation": "Rebeca foi guiada pelo Senhor para ser a esposa de Isaque e nora de Abraão. (Gênesis 24)"
    },
    {
      "question": "Quantas pragas Deus enviou sobre a terra do Egito para que Faraó libertasse os hebreus?",
      "options": [
        "3",
        "7",
        "10",
        "12"
      ],
      "answer": 2,
      "explanation": "Deus enviou dez pragas sucessivas para demonstrar Seu poder sobre os deuses do Egito. (Êxodo 7-12)"
    },
    {
      "question": "Em qual dia da criação do mundo Deus estabeleceu o sol, a lua e as estrelas?",
      "options": [
        "Primeiro dia",
        "Terceiro dia",
        "Quarto dia",
        "Sexto dia"
      ],
      "answer": 2,
      "explanation": "No quarto dia, Deus criou os luminares celestes para governar o dia e a noite e marcar as estações. (Gênesis 1:14-19)"
    },
    {
      "question": "Quem foi a mãe de Isaque?",
      "options": [
        "Raquel",
        "Sara",
        "Rebeca",
        "Lia"
      ],
      "answer": 1,
      "explanation": "Sara foi a mãe de Isaque, tendo-o gerado em sua velhice. (Gênesis 21:1-3)"
    },
    {
      "question": "Quantas pessoas entraram na arca de Noé?",
      "options": [
        "2",
        "4",
        "8",
        "12"
      ],
      "answer": 2,
      "explanation": "Apenas 8 pessoas foram salvas na arca: Noé, sua esposa, seus três filhos e noras. (1 Pedro 3:20)"
    },
    {
      "question": "Qual é o primeiro livro do Novo Testamento?",
      "options": [
        "Lucas",
        "Marcos",
        "Mateus",
        "João"
      ],
      "answer": 2,
      "explanation": "O Evangelho de Mateus é o primeiro livro do Novo Testamento. (Mateus 1:1)"
    },
    {
      "question": "Quem era o irmão de Abel?",
      "options": [
        "Caim",
        "Sete",
        "Enos",
        "Adão"
      ],
      "answer": 0,
      "explanation": "Caim era o irmão mais velho de Abel. (Gênesis 4:1-2)"
    },
    {
      "question": "Quem escreveu os dez mandamentos nas tábuas de pedra?",
      "options": [
        "Moisés",
        "Arão",
        "Deus",
        "Josué"
      ],
      "answer": 2,
      "explanation": "As tábuas foram escritas com o dedo de Deus. (Êxodo 31:18)"
    },
    {
      "question": "Qual dos discípulos era conhecido por ser pescador antes de seguir Jesus?",
      "options": [
        "Mateus",
        "Pedro",
        "Lucas",
        "Paulo"
      ],
      "answer": 1,
      "explanation": "Pedro e seu irmão André eram pescadores no Mar da Galileia. (Mateus 4:18)"
    },
    {
      "question": "Que presente o pai de José (do Egito) deu a ele que causou ciúmes nos irmãos?",
      "options": [
        "Uma túnica colorida",
        "Um anel de ouro",
        "Um cajado de pastor",
        "Uma espada"
      ],
      "answer": 0,
      "explanation": "Jacó deu a José uma túnica colorida de mangas compridas, demonstrando predileção. (Gênesis 37:3)"
    },
    {
      "question": "Quem foi o gigante que Davi derrotou com uma funda e uma pedra?",
      "options": [
        "Sansão",
        "Golias",
        "Hércules",
        "Saul"
      ],
      "answer": 1,
      "explanation": "Davi derrotou o gigante filisteu Golias no vale de Elá. (1 Samuel 17:49-50)"
    },
    {
      "question": "Qual profeta foi levado ao céu em uma carruagem de fogo?",
      "options": [
        "Jonas",
        "Elias",
        "Isaías",
        "Daniel"
      ],
      "answer": 1,
      "explanation": "Elias foi arrebatado por um redemoinho ao céu em um carro de fogo. (2 Reis 2:11)"
    },
    {
      "question": "Quantos livros compõem o Novo Testamento?",
      "options": [
        "27",
        "39",
        "66",
        "12"
      ],
      "answer": 0,
      "explanation": "O Novo Testamento é composto por 27 livros."
    },
    {
      "question": "Qual é a cidade conhecida pelas muralhas que caíram após o povo rodear por 7 dias?",
      "options": [
        "Jerusalém",
        "Jericó",
        "Belém",
        "Damasco"
      ],
      "answer": 1,
      "explanation": "As muralhas de Jericó caíram depois que o exército de Israel marchou ao redor delas por 7 dias. (Josué 6)"
    },
    {
      "question": "Quem foi o sucessor de Moisés que liderou o povo até a Terra Prometida?",
      "options": [
        "Arão",
        "Josué",
        "Calebe",
        "Gideão"
      ],
      "answer": 1,
      "explanation": "Josué foi o escolhido de Deus para suceder Moisés e guiar o povo em Canaã. (Josué 1:1-2)"
    },
    {
      "question": "Qual discípulo andou sobre a água para ir ao encontro de Jesus?",
      "options": [
        "João",
        "Pedro",
        "André",
        "Tomé"
      ],
      "answer": 1,
      "explanation": "Pedro andou sobre as águas para ir até Jesus, mas teve medo do vento e afundou. (Mateus 14:29-30)"
    },
    {
      "question": "Quem é a mãe de João Batista?",
      "options": [
        "Maria",
        "Ana",
        "Isabel",
        "Marta"
      ],
      "answer": 2,
      "explanation": "Isabel, parente de Maria, era a mãe de João Batista. (Lucas 1:57-60)"
    },
    {
      "question": "Quem orava três vezes ao dia voltado para Jerusalém?",
      "options": [
        "Daniel",
        "Davi",
        "Samuel",
        "Salomão"
      ],
      "answer": 0,
      "explanation": "Daniel orava três vezes ao dia em seu quarto superior com janelas abertas para Jerusalém. (Daniel 6:10)"
    },
    {
      "question": "Que animal falou com Balaão no caminho?",
      "options": [
        "Uma serpente",
        "Uma jumenta",
        "Um cordeiro",
        "Um corvo"
      ],
      "answer": 1,
      "explanation": "Deus abriu a boca da jumenta de Balaão para repreendê-lo. (Números 22:28)"
    },
    {
      "question": "Qual dos evangelhos foi escrito por um médico?",
      "options": [
        "Mateus",
        "Lucas",
        "Marcos",
        "João"
      ],
      "answer": 1,
      "explanation": "Lucas, o 'médico amado' e companheiro de Paulo, escreveu o terceiro Evangelho. (Colossenses 4:14)"
    },
    {
      "question": "Quem era o imperador romano no nascimento de Jesus?",
      "options": [
        "César Augusto",
        "Nero",
        "Pôncio Pilatos",
        "Herodes"
      ],
      "answer": 0,
      "explanation": "Um decreto de César Augusto ordenou o recenseamento de todo o Império no nascimento de Jesus. (Lucas 2:1)"
    },
    {
      "question": "Quem foi jogado na cova dos leões?",
      "options": [
        "Sansão",
        "Davi",
        "Daniel",
        "José"
      ],
      "answer": 2,
      "explanation": "Daniel foi jogado na cova por continuar orando a Deus contrariando o decreto do rei. (Daniel 6)"
    },
    {
      "question": "Qual era a comida providenciada por Deus no deserto para o povo de Israel?",
      "options": [
        "Codornas e Mel",
        "Maná",
        "Trigo e Uvas",
        "Peixe e Pão"
      ],
      "answer": 1,
      "explanation": "Deus enviou o maná dos céus todas as manhãs para alimentar os israelitas. (Êxodo 16)"
    },
    {
      "question": "Qual apóstolo era cobrador de impostos antes de seguir Jesus?",
      "options": [
        "Pedro",
        "Mateus",
        "João",
        "André"
      ],
      "answer": 1,
      "explanation": "Mateus (também chamado Levi) era publicano antes de ser chamado por Jesus. (Mateus 9:9)"
    },
    {
      "question": "Quem foi a rainha que salvou o povo judeu da destruição na Pérsia?",
      "options": [
        "Rute",
        "Ester",
        "Jezabel",
        "Vasti"
      ],
      "answer": 1,
      "explanation": "Ester intercedeu perante o rei Assuero para salvar seu povo do extermínio planejado por Haman. (Ester 7)"
    },
    {
      "question": "Quem era a sogra de Rute?",
      "options": [
        "Orpa",
        "Noemi",
        "Sara",
        "Isabel"
      ],
      "answer": 1,
      "explanation": "Noemi era a sogra de Rute, a quem Rute acompanhou com lealdade de volta a Belém. (Rute 1:16)"
    },
    {
      "question": "De que árvore Eva colheu o fruto proibido no Éden?",
      "options": [
        "Árvore da Vida",
        "Árvore do Conhecimento do Bem e do Mal",
        "Figueira",
        "Oliveira"
      ],
      "answer": 1,
      "explanation": "Eles comeram do fruto da árvore do conhecimento do bem e do mal. (Gênesis 3:6)"
    },
    {
      "question": "Quem foi o primeiro rei de Israel?",
      "options": [
        "Davi",
        "Saul",
        "Salomão",
        "Samuel"
      ],
      "answer": 1,
      "explanation": "Saul foi ungido por Samuel como o primeiro rei. (1 Samuel 10:1)"
    },
    {
      "question": "Em qual rio Jesus foi batizado por João Batista?",
      "options": [
        "Nilo",
        "Eufrates",
        "Jordão",
        "Tigre"
      ],
      "answer": 2,
      "explanation": "Jesus foi batizado por João Batista no Rio Jordão. (Mateus 3:13)"
    },
    {
      "question": "Que sinal Deus deu no céu de que nunca mais destruiria a terra por água?",
      "options": [
        "Uma estrela cadente",
        "O arco-íris",
        "Uma nuvem brilhante",
        "O eclipse"
      ],
      "answer": 1,
      "explanation": "Deus colocou o arco-íris nas nuvens como aliança perpétua. (Gênesis 9:13)"
    },
    {
      "question": "Qual dos discípulos duvidou da ressurreição de Jesus até ver as marcas dos cravos?",
      "options": [
        "Pedro",
        "Tomé",
        "Filipe",
        "Judas"
      ],
      "answer": 1,
      "explanation": "Tomé declarou que não acreditaria a menos que visse as chagas de Jesus. (João 20:25)"
    },
    {
      "question": "Quem interpretou os sonhos do Faraó sobre as vacas gordas e magras?",
      "options": [
        "Moisés",
        "José",
        "Daniel",
        "Neemias"
      ],
      "answer": 1,
      "explanation": "José revelou ao Faraó que o sonho anunciou vacas gordas e magras. (Gênesis 41)"
    },
    {
      "question": "Qual era a principal característica física de Sansão que continha seu segredo de força?",
      "options": [
        "Sua barba",
        "Seus longos cabelos",
        "Sua grande altura",
        "Seus olhos azuis"
      ],
      "answer": 1,
      "explanation": "Sua força estava no seu cabelo intocado devido ao voto de nazireu. (Juízes 16)"
    },
    {
      "question": "Quem foi vendido por seus irmãos?",
      "options": [
        "José",
        "Benjamim",
        "Jacó",
        "Judá"
      ],
      "answer": 0,
      "explanation": "José foi vendido aos ismaelitas por ciúmes de seus irmãos. (Gênesis 37:28)"
    },
    {
      "question": "Qual instrumento Davi tocava para acalmar Saul?",
      "options": [
        "Harpa",
        "Flauta",
        "Trombeta",
        "Lira"
      ],
      "answer": 0,
      "explanation": "Davi tocava harpa para aliviar o espírito perturbado de Saul. (1 Samuel 16:23)"
    },
    {
      "question": "Qual foi a última praga do Egito?",
      "options": [
        "Trevas",
        "Morte dos primogênitos",
        "Gafanhotos",
        "Rãs"
      ],
      "answer": 1,
      "explanation": "A morte dos primogênitos foi a décima e última praga. (Êxodo 12)"
    },
    {
      "question": "Quem escreveu os Salmos?",
      "options": [
        "Davi",
        "Salomão",
        "Moisés",
        "Vários autores"
      ],
      "answer": 3,
      "explanation": "Davi escreveu a maioria, mas os Salmos têm vários autores, incluindo Asafe e os filhos de Corá."
    },
    {
      "question": "Quem era o pai de Jacó e Esaú?",
      "options": [
        "Abraão",
        "Isaque",
        "José",
        "Ló"
      ],
      "answer": 1,
      "explanation": "Isaque era o pai dos gêmeos gerados com Rebeca. (Gênesis 25)"
    },
    {
      "question": "Qual o menor livro do Novo Testamento?",
      "options": [
        "Judas",
        "2 João",
        "3 João",
        "Filemom"
      ],
      "answer": 2,
      "explanation": "3 João é o menor livro da Bíblia inteira em número de palavras."
    },
    {
      "question": "Quem era a irmã de Moisés?",
      "options": [
        "Rute",
        "Miriã",
        "Zípora",
        "Lia"
      ],
      "answer": 1,
      "explanation": "Miriã era a irmã mais velha de Moisés e Arão. (Êxodo 15:20)"
    },
    {
      "question": "De que era feito o altar do tabernáculo no deserto?",
      "options": [
        "Madeira de acácia e bronze",
        "Pedra pura",
        "Ouro maciço",
        "Prata"
      ],
      "answer": 0,
      "explanation": "O altar do holocausto era feito de acácia e revestido de bronze. (Êxodo 27:1-2)"
    },
    {
      "question": "Quem foi jogado na cisterna e depois no Egito virou governador?",
      "options": [
        "Benjamim",
        "José",
        "Davi",
        "Daniel"
      ],
      "answer": 1,
      "explanation": "José foi vendido e tornou-se governador do Egito. (Gênesis 41)"
    },
    {
      "question": "Qual apóstolo era pescador no mar da Galileia?",
      "options": [
        "Mateus",
        "Lucas",
        "Pedro",
        "Paulo"
      ],
      "answer": 2,
      "explanation": "Pedro pescava quando foi chamado por Jesus. (Mateus 4:18)"
    },
    {
      "question": "Quem foi a mulher de Ló que virou estátua de sal?",
      "options": [
        "Olhou para trás",
        "Tocou no fogo",
        "Correu",
        "Gritou"
      ],
      "answer": 0,
      "explanation": "Ela desobedeceu e olhou para trás na fuga de Sodoma. (Gênesis 19:26)"
    },
    {
      "question": "Quem foi o primeiro rei de Israel?",
      "options": [
        "Davi",
        "Saul",
        "Salomão",
        "Samuel"
      ],
      "answer": 1,
      "explanation": "Saul foi ungido por Samuel como o primeiro rei. (1 Samuel 10)"
    },
    {
      "question": "Onde Jesus nasceu?",
      "options": [
        "Nazaré",
        "Jerusalém",
        "Belém",
        "Jericó"
      ],
      "answer": 2,
      "explanation": "Jesus nasceu em Belém da Judeia. (Mateus 2:1)"
    },
    {
      "question": "Qual o primeiro milagre de Jesus?",
      "options": [
        "Água em vinho",
        "Cura de cego",
        "Multiplicação",
        "Caminhar na água"
      ],
      "answer": 0,
      "explanation": "Jesus transformou água em vinho nas bodas de Caná. (João 2)"
    },
    {
      "question": "Quantos livros tem o Novo Testamento?",
      "options": [
        "24",
        "27",
        "39",
        "66"
      ],
      "answer": 1,
      "explanation": "O Novo Testamento é composto de 27 livros."
    },
    {
      "question": "Quantos livros tem o Antigo Testamento (protestante)?",
      "options": [
        "27",
        "39",
        "46",
        "66"
      ],
      "answer": 1,
      "explanation": "O Antigo Testamento protestante tem 39 livros."
    },
    {
      "question": "Qual animal tentou Eva no Éden?",
      "options": [
        "Leão",
        "Serpente",
        "Lobo",
        "Águia"
      ],
      "answer": 1,
      "explanation": "A serpente enganou Eva com astúcia. (Gênesis 3)"
    },
    {
      "question": "Quem foi o primeiro mártir cristão?",
      "options": [
        "Tiago",
        "Estêvão",
        "Pedro",
        "Paulo"
      ],
      "answer": 1,
      "explanation": "Estêvão foi apedrejado por sua fé em Cristo. (Atos 7)"
    },
    {
      "question": "Quem abriu o Mar Vermelho?",
      "options": [
        "Josué",
        "Moisés",
        "Arão",
        "Elias"
      ],
      "answer": 1,
      "explanation": "Moisés estendeu o cajado e abriu o mar sob ordem de Deus. (Êxodo 14)"
    },
    {
      "question": "Quantos discípulos Jesus escolheu?",
      "options": [
        "10",
        "12",
        "70",
        "120"
      ],
      "answer": 1,
      "explanation": "Jesus escolheu doze apóstolos para segui-Lo mais de perto. (Lucas 6)"
    },
    {
      "question": "Quem era o melhor amigo de Davi?",
      "options": [
        "Saul",
        "Jônatas",
        "Samuel",
        "Absalão"
      ],
      "answer": 1,
      "explanation": "Jônatas, filho de Saul, tinha aliança de amizade com Davi. (1 Samuel 18)"
    },
    {
      "question": "Quem batizou Jesus?",
      "options": [
        "Pedro",
        "João Batista",
        "Moisés",
        "Elias"
      ],
      "answer": 1,
      "explanation": "João Batista batizou Jesus no rio Jordão. (Mateus 3)"
    },
    {
      "question": "Quem derrotou o gigante Golias?",
      "options": [
        "Saul",
        "Sansão",
        "Davi",
        "Josué"
      ],
      "answer": 2,
      "explanation": "Davi derrotou Golias com uma funda e uma pedra. (1 Samuel 17)"
    },
    {
      "question": "Quantos dias durou a chuva do Dilúvio?",
      "options": [
        "7",
        "40",
        "150",
        "365"
      ],
      "answer": 1,
      "explanation": "A chuva caiu sobre a terra por 40 dias e 40 noites. (Gênesis 7:12)"
    },
    {
      "question": "Quem foi arrebatado num carro de fogo?",
      "options": [
        "Elias",
        "Eliseu",
        "Enoque",
        "Moisés"
      ],
      "answer": 0,
      "explanation": "Elias subiu ao céu num redemoinho de fogo. (2 Reis 2:11)"
    },
    {
      "question": "Quem andou com Deus e desapareceu?",
      "options": [
        "Adão",
        "Enoque",
        "Noé",
        "Matusalém"
      ],
      "answer": 1,
      "explanation": "Enoque andou com Deus e não foi mais visto. (Gênesis 5:24)"
    },
    {
      "question": "Quem foi a mãe de Jesus?",
      "options": [
        "Marta",
        "Maria",
        "Isabel",
        "Ana"
      ],
      "answer": 1,
      "explanation": "Maria deu à luz Jesus pelo Espírito Santo. (Lucas 1)"
    },
    {
      "question": "Quem traiu Jesus?",
      "options": [
        "Pedro",
        "Judas Iscariotes",
        "Tomé",
        "João"
      ],
      "answer": 1,
      "explanation": "Judas entregou Jesus por 30 moedas de prata. (Mateus 26)"
    },
    {
      "question": "Quem ressuscitou depois de 4 dias no túmulo?",
      "options": [
        "Lázaro",
        "Jesus",
        "Estêvão",
        "Jair"
      ],
      "answer": 0,
      "explanation": "Jesus chamou Lázaro para fora do túmulo. (João 11)"
    },
    {
      "question": "Qual é o primeiro livro da Bíblia?",
      "options": [
        "Mateus",
        "Êxodo",
        "Gênesis",
        "Apocalipse"
      ],
      "answer": 2,
      "explanation": "Gênesis abre a Bíblia e relata a criação. (Gênesis 1)"
    },
    {
      "question": "Quem era o pai de Davi?",
      "options": [
        "Jessé",
        "Saul",
        "Salomão",
        "Boaz"
      ],
      "answer": 0,
      "explanation": "Jessé era efrateu de Belém e pai de Davi. (1 Samuel 16)"
    },
    {
      "question": "Qual animal trouxe pão e carne para Elias?",
      "options": [
        "Águia",
        "Pomba",
        "Corvo",
        "Leão"
      ],
      "answer": 2,
      "explanation": "Os corvos alimentavam Elias no ribeiro de Querite. (1 Reis 17)"
    },
    {
      "question": "Qual discípulo andou sobre as águas e afundou por ter medo?",
      "options": [
        "João",
        "Pedro",
        "André",
        "Tomé"
      ],
      "answer": 1,
      "explanation": "Pedro andou nas águas até duvidar. (Mateus 14:30)"
    },
    {
      "question": "Quem era a esposa de Abraão?",
      "options": [
        "Sara",
        "Rebeca",
        "Raquel",
        "Lia"
      ],
      "answer": 0,
      "explanation": "Sara foi a mãe de Isaque. (Gênesis 17)"
    },
    {
      "question": "Quem era o sogro de Moisés?",
      "options": [
        "Labão",
        "Jetro",
        "Abraão",
        "Arão"
      ],
      "answer": 1,
      "explanation": "Jetro (ou Reuel) era sacerdote de Midiã. (Êxodo 3)"
    },
    {
      "question": "Qual o significado de Emanuel?",
      "options": [
        "Deus é amor",
        "Deus conosco",
        "Salvador",
        "Senhor da Glória"
      ],
      "answer": 1,
      "explanation": "Significa 'Deus conosco'. (Mateus 1:23)"
    },
    {
      "question": "Quem foi a rainha que salvou seu povo?",
      "options": [
        "Vasti",
        "Ester",
        "Jezabel",
        "Atalia"
      ],
      "answer": 1,
      "explanation": "Ester intercedeu pelo povo judeu na Pérsia. (Ester 7)"
    },
    {
      "question": "Quem foi o sucessor de Moisés?",
      "options": [
        "Josué",
        "Calebe",
        "Arão",
        "Gideão"
      ],
      "answer": 0,
      "explanation": "Josué liderou a conquista de Canaã. (Josué 1)"
    }
  ],
  "medio": [
    {
      "question": "Qual era o nome da mãe do profeta Samuel, que era estéril e orou fervorosamente no templo?",
      "options": [
        "Ana",
        "Penina",
        "Rute",
        "Isabel"
      ],
      "answer": 0,
      "explanation": "Ana orou com lágrimas e prometeu dedicar seu filho ao Senhor caso saísse de sua esterilidade. (1 Samuel 1)"
    },
    {
      "question": "Quem foi o successor de Moisés, escolhido por Deus para liderar o povo de Israel na conquista de Canaã?",
      "options": [
        "Josué",
        "Calebe",
        "Gideão",
        "Arão"
      ],
      "answer": 0,
      "explanation": "Josué, assistente de Moisés, foi cheio do espírito de sabedoria e assumiu o comando de Israel. (Deuteronômio 34:9)"
    },
    {
      "question": "Qual era a ocupação de Mateus antes de abandonar tudo e seguir Jesus como um apóstolo?",
      "options": [
        "Pescador",
        "Cobrador de impostos",
        "Carpinteiro",
        "Tenda-maker"
      ],
      "answer": 1,
      "explanation": "Mateus (ou Levi) estava sentado na coletoria de impostos quando Jesus o chamou: 'Segue-me'. (Lucas 5:27)"
    },
    {
      "question": "Em qual monte sagrado Moisés recebeu as duas tábuas de pedra contendo os Dez Mandamentos?",
      "options": [
        "Monte Nebo",
        "Monte Sinai",
        "Monte das Oliveiras",
        "Monte Carmelo"
      ],
      "answer": 1,
      "explanation": "A Lei foi entregue a Moisés no topo fumegante do Monte Sinai, onde Deus desceu em glória. (Êxodo 19-20)"
    },
    {
      "question": "Quem era o rei de Israel quando o jovem pastor Davi derrotou o gigante Golias?",
      "options": [
        "Saul",
        "Salomão",
        "Roboão",
        "Acabe"
      ],
      "answer": 0,
      "explanation": "Saul governava Israel e ofereceu sua própria armadura para Davi lutar contra o filisteu. (1 Samuel 17)"
    },
    {
      "question": "Qual apóstolo escreveu a maior quantidade de livros e epístolas do Novo Testamento?",
      "options": [
        "Pedro",
        "João",
        "Paulo",
        "Lucas"
      ],
      "answer": 2,
      "explanation": "Paulo de Tarso escreveu 13 (ou 14, se contada Hebreus) cartas para diversas igrejas e pastores."
    },
    {
      "question": "Qual discípulo de Jesus tentou caminhar sobre as águas em direção ao Mestre, mas duvidou e começou a afundar?",
      "options": [
        "João",
        "Tiago",
        "Pedro",
        "André"
      ],
      "answer": 2,
      "explanation": "Pedro andou sobre as águas, mas ao sentir a força do vento teve medo e clamou: 'Senhor, salva-me!'. (Mateus 14:28-30)"
    },
    {
      "question": "Por quantas moedas de prata os irmãos de José o venderam aos mercadores ismaelitas?",
      "options": [
        "15 moedas",
        "20 moedas",
        "30 moedas",
        "50 moedas"
      ],
      "answer": 1,
      "explanation": "Os irmãos decidiram vender José por 20 peças de prata aos mercadores que iam ao Egito. (Gênesis 37:28)"
    },
    {
      "question": "Qual profeta de Israel subiu ao céu em um redemoinho acompanhado por um carro e cavalos de fogo?",
      "options": [
        "Elias",
        "Eliseu",
        "Isaías",
        "Jeremias"
      ],
      "answer": 0,
      "explanation": "Elias foi arrebatado aos céus diante dos olhos de seu discípulo Eliseu. (2 Reis 2:11)"
    },
    {
      "question": "Quem foi o sucessor do profeta Elias e herdou uma porção dobrada do seu espírito profético?",
      "options": [
        "Eliseu",
        "Samuel",
        "Ezequiel",
        "Josué"
      ],
      "answer": 0,
      "explanation": "Eliseu acompanhou Elias até o fim e recolheu o seu manto após a sua partida celestial. (2 Reis 2)"
    },
    {
      "question": "Quem foi a corajosa rainha judia da Pérsia que arriscou a vida para salvar o seu povo de um decreto de extermínio?",
      "options": [
        "Vasti",
        "Ester",
        "Jezabel",
        "Atalia"
      ],
      "answer": 1,
      "explanation": "A rainha Ester jejuou e apresentou-se sem convite ao rei Assuero para expor o plano maligno de Hamã. (Ester 4-5)"
    },
    {
      "question": "Onde Moisés faleceu após Deus lhe mostrar a Terra Prometida a partir do cume da montanha?",
      "options": [
        "Monte Sinai",
        "Monte Nebo",
        "Monte Carmelo",
        "Monte Hor"
      ],
      "answer": 1,
      "explanation": "Moisés subiu as planícies de Moabe rumo ao Monte Nebo, onde contemplou Canaã antes de falecer. (Deuteronômio 34:1)"
    },
    {
      "question": "Qual o nome do jardim onde Jesus orou e suou gotas de sangue antes de ser preso pelas guardas?",
      "options": [
        "Getsêmani",
        "Jardim do Éden",
        "Gólgota",
        "Betânia"
      ],
      "answer": 0,
      "explanation": "Getsêmani significa 'prensa de azeite', localizado na encosta do Monte das Oliveiras. (Mateus 26:36)"
    },
    {
      "question": "Qual livro poético da Bíblia é composto por 150 cânticos, orações e poemas litúrgicos?",
      "options": [
        "Provérbios",
        "Eclesiastes",
        "Cântico dos Cânticos",
        "Salmos"
      ],
      "answer": 3,
      "explanation": "O livro dos Salmos era o hinário do templo israelita, escrito por Davi, Asafe e outros. (Salmos 1-150)"
    },
    {
      "question": "Quantas aberturas de luz (janelas) a Arca de Noé possuía, de acordo com as instruções divinas?",
      "options": [
        "Uma",
        "Duas",
        "Três",
        "Nenhuma"
      ],
      "answer": 0,
      "explanation": "Deus mandou fazer apenas uma janela (ou abertura) a um côvado do topo da arca. (Gênesis 6:16)"
    },
    {
      "question": "Quem foi o pai do profeta João Batista, que ficou temporariamente mudo até o nascimento do bebê?",
      "options": [
        "Zacarias",
        "Simeão",
        "Cofni",
        "Ananias"
      ],
      "answer": 0,
      "explanation": "O sacerdote Zacarias duvidou da mensagem do anjo Gabriel sobre o nascimento de João e emudeceu. (Lucas 1)"
    },
    {
      "question": "Qual apóstolo ficou temporariamente cego por uma luz intensa enquanto viajava no caminho de Damasco?",
      "options": [
        "Pedro",
        "Paulo (Saulo)",
        "Barnabé",
        "Filipe"
      ],
      "answer": 1,
      "explanation": "Saulo foi cercado por uma luz celestial e ouviu a voz de Jesus, ficando três dias cego. (Atos 9)"
    },
    {
      "question": "Quem foi o primeiro mártir cristão mencionado no livro de Atos, apedrejado após testemunhar sobre Jesus?",
      "options": [
        "Tiago",
        "Estêvão",
        "Pedro",
        "Filipe"
      ],
      "answer": 1,
      "explanation": "Estêvão, homem cheio de graça e poder, orou por seus assassinos enquanto era apedrejado. (Atos 7)"
    },
    {
      "question": "Quem foi obrigado pelos soldados romanos a carregar a pesada cruz de Jesus a caminho do Calvário?",
      "options": [
        "Simão Cireneu",
        "Pedro",
        "José de Arimateia",
        "Nicodemos"
      ],
      "answer": 0,
      "explanation": "Simão de Cirene, que vinha do campo, foi constrangido a carregar a cruz atrás de Jesus. (Lucas 23:26)"
    },
    {
      "question": "Para qual das sete igrejas do Apocalipse foi enviada a repreensão por não ser nem fria nem quente, mas morna?",
      "options": [
        "Éfeso",
        "Sardes",
        "Filadélfia",
        "Laodicéia"
      ],
      "answer": 3,
      "explanation": "A igreja de Laodicéia foi advertida por sua mornidão espiritual e auto-suficiência enganosa. (Apocalipse 3:15-16)"
    },
    {
      "question": "Por quanto tempo o povo judeu ficou cativo na Babilônia, conforme profetizado por Jeremias?",
      "options": [
        "40 anos",
        "70 anos",
        "100 anos",
        "400 anos"
      ],
      "answer": 1,
      "explanation": "O cativeiro babilônico durou 70 anos, terminando com o decreto de Ciro, rei da Pérsia. (Jeremias 25:11)"
    },
    {
      "question": "Qual era o nome del sogro de Moisés, um sacerdote de Midiã que lhe deu valiosos conselhos administrativos?",
      "options": [
        "Jetro (Reuel)",
        "Labão",
        "Balaão",
        "Eliú"
      ],
      "answer": 0,
      "explanation": "Jetro visitou Moisés e o aconselhou a nomear chefes de mil, de cem e de cinquenta para julgar o povo. (Êxodo 18)"
    },
    {
      "question": "Em qual mar Jesus realizou o milagre de repreender o vento e acalmar a tempestade furiosa?",
      "options": [
        "Mar Morto",
        "Mar Vermelho",
        "Mar Mediterrâneo",
        "Mar da Galileia (Tiberíades)"
      ],
      "answer": 3,
      "explanation": "Jesus dormia no barco quando a tempestade subiu no Mar da Galileia, acordando e acalmando as águas. (Marcos 4:39)"
    },
    {
      "question": "Quem era o parente resgatador rico que casou-se com a viúva moabita Rute e tornou-se avô de Jessé?",
      "options": [
        "Elimeleque",
        "Boaz",
        "Malom",
        "Quiliom"
      ],
      "answer": 1,
      "explanation": "Boaz tomou Rute como esposa e eles geraram Obede, pai de Jessé e avô do Rei Davi. (Rute 4)"
    },
    {
      "question": "Quantos cestos cheios de pedaços de pães e peixes sobraram após Jesus alimentar cinco mil homens?",
      "options": [
        "5 cestos",
        "7 cestos",
        "12 cestos",
        "24 cestos"
      ],
      "answer": 2,
      "explanation": "Após todos comerem e se saciarem, os discípulos recolheram doze cestos cheios de pedaços. (Mateus 14:20)"
    },
    {
      "question": "A qual tribo de Israel pertencia o apóstolo Paulo, conforme ele mesmo relata em suas cartas?",
      "options": [
        "Judá",
        "Levi",
        "Benjamim",
        "Dã"
      ],
      "answer": 2,
      "explanation": "Paulo afirma ser israelita da descendência de Abraão, da tribo de Benjamim. (Romanos 11:1)"
    },
    {
      "question": "Qual rei de Judá adoeceu gravemente e teve sua vida prolongada por mais 15 anos por Deus após clamar?",
      "options": [
        "Josias",
        "Ezequias",
        "Manassés",
        "Uziás"
      ],
      "answer": 1,
      "explanation": "O profeta Isaías deu a mensagem de morte, mas Ezequias orou e Deus acrescentou 15 anos à sua vida. (2 Reis 20)"
    },
    {
      "question": "Quem foi o ímpio rei de Israel que casou-se com a fenícia Jezabel e introduziu o culto sistemático a Baal?",
      "options": [
        "Acabe",
        "Jeroboão",
        "Jeú",
        "Manassés"
      ],
      "answer": 0,
      "explanation": "O rei Acabe fez o que era mau perante o Senhor, mais do que todos os reis que o antecederam. (1 Reis 16:30)"
    },
    {
      "question": "Quantas pessoas no total foram salvas dentro da Arca de Noé durante o Dilúvio?",
      "options": [
        "2",
        "4",
        "8",
        "12"
      ],
      "answer": 2,
      "explanation": "Foram salvas oito pessoas no total: Noé, sua esposa, seus três filhos (Sem, Cam e Jafé) e suas noras. (1 Pedro 3:20)"
    },
    {
      "question": "Quem foi a única juíza e profetisa que liderou Israel na libertação contra a opressão do rei Jabim?",
      "options": [
        "Rute",
        "Débora",
        "Miriã",
        "Noemi"
      ],
      "answer": 1,
      "explanation": "Débora julgava Israel debaixo de uma palmeira e convocou Baraque para guerrear contra Sísera. (Juízes 4)"
    },
    {
      "question": "Qual o nome do monte na terra de Moriá onde Abraão preparou o altar para oferecer seu filho Isaque em sacrifício?",
      "options": [
        "Monte Sinai",
        "Monte Moriá",
        "Monte Carmelo",
        "Monte das Oliveiras"
      ],
      "answer": 1,
      "explanation": "Abraão subiu o Monte Moriá e ergueu o altar onde Deus providenciou um cordeiro para o sacrifício. (Gênesis 22:2)"
    },
    {
      "question": "Qual o significado da palavra hebraica 'Emanuel', aplicada como título profético de Jesus Cristo em Mateus?",
      "options": [
        "Deus conosco",
        "Deus é amor",
        "Deus é minha força",
        "Salvador dos homens"
      ],
      "answer": 0,
      "explanation": "Mateus explica que o nome anunciado por Isaías significa 'Deus conosco' (Immanuel). (Mateus 1:23)"
    },
    {
      "question": "Quem foi a rainha que visitou Salomão atraída por sua sabedoria?",
      "options": [
        "Jezabel",
        "Rainha de Sabá",
        "Ester",
        "Vasti"
      ],
      "answer": 1,
      "explanation": "A Rainha de Sabá veio provar Salomão com perguntas difíceis. (1 Reis 10)"
    },
    {
      "question": "Qual dos filhos de Jacó deu origem à tribo sacerdotal?",
      "options": [
        "Judá",
        "José",
        "Levi",
        "Benjamim"
      ],
      "answer": 2,
      "explanation": "A tribo de Levi foi separada por Deus para o serviço do Tabernáculo. (Números 3)"
    },
    {
      "question": "Que jovem foi ressuscitado por Paulo após cair do terceiro andar?",
      "options": [
        "Estêvão",
        "Timóteo",
        "Êutico",
        "Silas"
      ],
      "answer": 2,
      "explanation": "Êutico dormiu e caiu da janela enquanto Paulo pregava. (Atos 20:9)"
    },
    {
      "question": "Qual o nome do sogro de Moisés, também chamado Reuel?",
      "options": [
        "Jetro",
        "Labão",
        "Abraão",
        "Arão"
      ],
      "answer": 0,
      "explanation": "Jetro, sacerdote de Midiã, era o pai de Zípora, esposa de Moisés. (Êxodo 3)"
    },
    {
      "question": "Quantos homens Gideão usou para derrotar os midianitas?",
      "options": [
        "300",
        "1000",
        "3000",
        "10000"
      ],
      "answer": 0,
      "explanation": "Deus escolheu 300 homens que lamberam a água como cães. (Juízes 7)"
    },
    {
      "question": "Qual o nome hebraico da rainha Ester?",
      "options": [
        "Hadassa",
        "Vasti",
        "Raquel",
        "Noemi"
      ],
      "answer": 0,
      "explanation": "Hadassa era seu nome de nascimento antes de ir ao palácio. (Ester 2:7)"
    },
    {
      "question": "Quem matou o general Sísera fincando uma estaca na cabeça dele?",
      "options": [
        "Débora",
        "Jael",
        "Rute",
        "Miriã"
      ],
      "answer": 1,
      "explanation": "Jael cravou uma estaca na têmpora de Sísera enquanto ele dormia. (Juízes 4:21)"
    },
    {
      "question": "Qual profeta repreendeu o pecado de Davi através da parábola da ovelha?",
      "options": [
        "Samuel",
        "Natã",
        "Gad",
        "Elias"
      ],
      "answer": 1,
      "explanation": "O profeta Natã confrontou Davi após a morte de Urias. (2 Samuel 12)"
    },
    {
      "question": "Qual rei teve os olhos furados após ver a morte de seus filhos?",
      "options": [
        "Sedequias",
        "Jeoaquim",
        "Saul",
        "Acabe"
      ],
      "answer": 0,
      "explanation": "Sedequias foi capturado e cegado pelo rei da Babilônia. (2 Reis 25:7)"
    },
    {
      "question": "Quantas pedras preciosas havia no peitoral do Sumo Sacerdote?",
      "options": [
        "7",
        "12",
        "24",
        "40"
      ],
      "answer": 1,
      "explanation": "Representavam as doze tribos de Israel. (Êxodo 28)"
    },
    {
      "question": "Qual era o nome do servo que teve a orelha cortada por Pedro?",
      "options": [
        "Caifás",
        "Malco",
        "Zacarias",
        "Ananias"
      ],
      "answer": 1,
      "explanation": "Pedro cortou a orelha direita de Malco no Getsêmani. (João 18:10)"
    },
    {
      "question": "Quem correu à frente dos cavalos de Acabe sob o poder de Deus?",
      "options": [
        "Elias",
        "Eliseu",
        "Moisés",
        "Enoque"
      ],
      "answer": 0,
      "explanation": "Elias cingiu-se e correu sob a força do Senhor. (1 Reis 18:46)"
    },
    {
      "question": "Quem foi o principal artesão do tabernáculo construído por Moisés?",
      "options": [
        "Bezalel",
        "Aoliabe",
        "Arão",
        "Hur"
      ],
      "answer": 0,
      "explanation": "Bezalel, da tribo de Judá, foi cheio do Espírito para criar obras artísticas. (Êxodo 31)"
    },
    {
      "question": "Quem escreveu três epístolas e um evangelho além do Apocalipse?",
      "options": [
        "Pedro",
        "João",
        "Paulo",
        "Lucas"
      ],
      "answer": 1,
      "explanation": "O apóstolo João escreveu todos esses livros no Novo Testamento."
    },
    {
      "question": "Quem era Melquisedeque de acordo com Gênesis?",
      "options": [
        "Rei de Salém e sacerdote",
        "Irmão de Abraão",
        "Anjo do Senhor",
        "Sumo Sacerdote de Levi"
      ],
      "answer": 0,
      "explanation": "Melquisedeque abençoou Abraão e era rei de Salém (paz). (Gênesis 14)"
    },
    {
      "question": "Qual livro foi escrito diretamente por Paulo para combater os judaizantes?",
      "options": [
        "Romanos",
        "Gálatas",
        "Hebreus",
        "Apocalipse"
      ],
      "answer": 1,
      "explanation": "A epístola aos Gálatas defende a salvação pela graça através da fé."
    },
    {
      "question": "Onde Paulo foi apedrejado e arrastado para fora achando que estava morto?",
      "options": [
        "Listra",
        "Darbe",
        "Icônio",
        "Antioquia"
      ],
      "answer": 0,
      "explanation": "Multidões instigadas apedrejaram Paulo em Listra. (Atos 14:19)"
    },
    {
      "question": "Quem era o casal de fazedores de tendas que ajudou Paulo em Corinto?",
      "options": [
        "Priscila e Áquila",
        "Febe e Silas",
        "Lídia e Barnabé",
        "Ananias e Safira"
      ],
      "answer": 0,
      "explanation": "Priscila e Áquila acolheram Paulo por terem o mesmo ofício. (Atos 18)"
    },
    {
      "question": "Qual rei de Judá viu a sombra do sol retroceder 10 graus?",
      "options": [
        "Uzias",
        "Ezequias",
        "Josias",
        "Davi"
      ],
      "answer": 1,
      "explanation": "Ezequias pediu esse sinal de cura ao profeta Isaías. (2 Reis 20)"
    },
    {
      "question": "Quem era o deus de Ecrom que o rei Acazias foi consultar?",
      "options": [
        "Baal-Zebube",
        "Camos",
        "Dagom",
        "Moloque"
      ],
      "answer": 0,
      "explanation": "O profeta Elias repreendeu o rei por consultar Baal-Zebube. (2 Reis 1)"
    },
    {
      "question": "Quantos capítulos tem o livro de Daniel?",
      "options": [
        "10",
        "12",
        "14",
        "16"
      ],
      "answer": 1,
      "explanation": "O livro de Daniel possui 12 capítulos de história e profecia."
    },
    {
      "question": "Quem foi a mãe do rei Salomão?",
      "options": [
        "Bate-Seba",
        "Maaca",
        "Abital",
        "Hagite"
      ],
      "answer": 0,
      "explanation": "Bate-Seba, que fora esposa de Urias, foi a mãe de Salomão. (2 Samuel 12)"
    },
    {
      "question": "Quem era o pai do juiz Gideão?",
      "options": [
        "Joás",
        "Samuel",
        "Josué",
        "Elimeleque"
      ],
      "answer": 0,
      "explanation": "Joás defendia o altar que Gideão derrubou. (Juízes 6)"
    },
    {
      "question": "Qual profeta repreendeu Saul por oferecer sacrifício em vez de obedecer?",
      "options": [
        "Samuel",
        "Natã",
        "Elias",
        "Isaías"
      ],
      "answer": 0,
      "explanation": "Samuel declarou que a obediência agrada mais a Deus. (1 Samuel 15)"
    },
    {
      "question": "Quem foi a esposa amada por quem Jacó trabalhou 14 anos?",
      "options": [
        "Lia",
        "Raquel",
        "Bila",
        "Zilpa"
      ],
      "answer": 1,
      "explanation": "Jacó trabalhou para Labão a fim de casar com Raquel. (Gênesis 29)"
    },
    {
      "question": "Onde Arão faleceu?",
      "options": [
        "Monte Nebo",
        "Monte Hor",
        "Monte Sinai",
        "Monte Gerizim"
      ],
      "answer": 1,
      "explanation": "Arão subiu ao Monte Hor com Moisés e lá morreu. (Números 20)"
    },
    {
      "question": "Quem ameaçou de morte o profeta Elias após o desafio do Monte Carmelo?",
      "options": [
        "Jezabel",
        "Atalia",
        "Vasti",
        "Ester"
      ],
      "answer": 0,
      "explanation": "A rainha Jezabel jurou matar Elias pelas mortes dos profetas de Baal. (1 Reis 19)"
    },
    {
      "question": "Quem era o comandante do exército de Davi?",
      "options": [
        "Joabe",
        "Abner",
        "Benaia",
        "Amasa"
      ],
      "answer": 0,
      "explanation": "Joabe comandou as forças militares de Davi por muitos anos. (2 Samuel 8)"
    },
    {
      "question": "Qual profeta casou-se com Gômer?",
      "options": [
        "Oseias",
        "Amós",
        "Miqueias",
        "Joel"
      ],
      "answer": 0,
      "explanation": "O casamento de Oseias simbolizou a infidelidade de Israel. (Oseias 1)"
    },
    {
      "question": "Qual profeta fez metade dos milagres de Eliseu?",
      "options": [
        "Elias",
        "Isaías",
        "Jeremias",
        "Daniel"
      ],
      "answer": 0,
      "explanation": "Eliseu herdou a porção dobrada e fez o dobro de milagres de Elias."
    },
    {
      "question": "Quem era o discípulo de Paulo considerado seu 'filho na fé'?",
      "options": [
        "Timóteo",
        "Tito",
        "Silas",
        "Lucas"
      ],
      "answer": 0,
      "explanation": "Paulo enviou duas cartas pastorais a seu cooperador Timóteo."
    },
    {
      "question": "Qual rei persa permitiu a reconstrução do templo de Jerusalém?",
      "options": [
        "Ciro",
        "Dario",
        "Artaxerxes",
        "Xerxes"
      ],
      "answer": 0,
      "explanation": "O rei Ciro emitiu o edito de retorno do cativeiro. (Esdras 1)"
    },
    {
      "question": "De que tribo era o rei Saul?",
      "options": [
        "Judá",
        "Benjamim",
        "Levi",
        "Efraim"
      ],
      "answer": 1,
      "explanation": "Saul pertencia à menor tribo, a de Benjamim. (1 Samuel 9)"
    },
    {
      "question": "Quem enganou Jacó dando-lhe a filha mais velha em casamento?",
      "options": [
        "Labão",
        "Esau",
        "Isaque",
        "Abimeleque"
      ],
      "answer": 0,
      "explanation": "Labão deu Lia no lugar de Raquel na noite de núpcias. (Gênesis 29)"
    },
    {
      "question": "Quem foi a primeira esposa de Moisés?",
      "options": [
        "Zípora",
        "Miriã",
        "Tamar",
        "Cozbi"
      ],
      "answer": 0,
      "explanation": "Zípora era filha de Jetro, sacerdote de Midiã. (Êxodo 2)"
    },
    {
      "question": "Quem era Melquisedeque de acordo com Hebreus?",
      "options": [
        "Sem genealogia na Torá",
        "Sumo Sacerdote levita",
        "Irmão de Moisés",
        "Profeta messiânico"
      ],
      "answer": 0,
      "explanation": "Hebreus descreve Melquisedeque como rei da justiça sem genealogia. (Hebreus 7)"
    },
    {
      "question": "Qual profeta purificou a boca com brasa viva trazida por serafim?",
      "options": [
        "Isaías",
        "Jeremias",
        "Ezequiel",
        "Daniel"
      ],
      "answer": 0,
      "explanation": "Um serafim tocou a boca de Isaías para purificar seus pecados. (Isaías 6)"
    },
    {
      "question": "Qual profeta menor profetizou contra Nínive além de Jonas?",
      "options": [
        "Naum",
        "Joel",
        "Miqueias",
        "Obadias"
      ],
      "answer": 0,
      "explanation": "O livro de Naum é a sentença definitiva contra Nínive. (Naum 1)"
    },
    {
      "question": "Qual mulher comerciante de púrpura converteu-se em Filipos?",
      "options": [
        "Lídia",
        "Febe",
        "Priscila",
        "Dâmaris"
      ],
      "answer": 0,
      "explanation": "Lídia acolheu Paulo em sua casa após ser batizada. (Atos 16)"
    },
    {
      "question": "Quem contratou Balaão para amaldiçoar Israel?",
      "options": [
        "Balaque",
        "Eglom",
        "Mesa",
        "Sihon"
      ],
      "answer": 0,
      "explanation": "O rei de Moabe, Balaque, temia a força militar de Israel. (Números 22)"
    },
    {
      "question": "Qual profetisa consultada ajudou o rei Josias a entender a Lei?",
      "options": [
        "Hulda",
        "Débora",
        "Miriã",
        "Ana"
      ],
      "answer": 0,
      "explanation": "A profetisa Hulda confirmou a ira de Deus contra o pecado de Judá. (2 Reis 22)"
    },
    {
      "question": "De que tribo era Sansão?",
      "options": [
        "Dã",
        "Judá",
        "Levi",
        "Benjamim"
      ],
      "answer": 0,
      "explanation": "Sansão nasceu da tribo de Dã no vilarejo de Zorá. (Juízes 13)"
    },
    {
      "question": "Quantos profetas de Baal desafiaram Elias no Carmelo?",
      "options": [
        "450",
        "400",
        "850",
        "1000"
      ],
      "answer": 0,
      "explanation": "Havia 450 profetas de Baal no altar do confronto. (1 Reis 18)"
    },
    {
      "question": "Qual profeta usou a parábola da ovelha do pobre para confrontar Davi?",
      "options": [
        "Samuel",
        "Natã",
        "Elias",
        "Isaías"
      ],
      "answer": 1,
      "explanation": "Natã contou a história da ovelha roubada por um homem rico. (2 Samuel 12)"
    },
    {
      "question": "Quem era o pai de Matusalém?",
      "options": [
        "Enoque",
        "Lameque",
        "Noé",
        "Jarede"
      ],
      "answer": 0,
      "explanation": "Enoque gerou Matusalém antes de ser trasladado. (Gênesis 5)"
    },
    {
      "question": "Quem escreveu Lamentações?",
      "options": [
        "Jeremias",
        "Isaías",
        "Davi",
        "Ezequiel"
      ],
      "answer": 0,
      "explanation": "Jeremias lamentou a queda e destruição de Jerusalém. (Lamentações 1)"
    },
    {
      "question": "Quem matou Absalão no carvalho?",
      "options": [
        "Joabe",
        "Abisai",
        "Saul",
        "Davi"
      ],
      "answer": 0,
      "explanation": "Joabe cravou dardos no coração de Absalão preso pelo cabelo. (2 Samuel 18)"
    },
    {
      "question": "Quantos capítulos tem o evangelho de Mateus?",
      "options": [
        "24",
        "28",
        "30",
        "16"
      ],
      "answer": 1,
      "explanation": "Mateus contém 28 capítulos no Novo Testamento."
    },
    {
      "question": "Qual rei de Judá ficou leproso no altar de incenso?",
      "options": [
        "Uzias",
        "Ezequias",
        "Manassés",
        "Josias"
      ],
      "answer": 0,
      "explanation": "Uzias foi castigado por queimar incenso, dever dos sacerdotes. (2 Crônicas 26)"
    },
    {
      "question": "Quem era o sumo sacerdote no julgamento de Jesus?",
      "options": [
        "Caifás",
        "Anás",
        "Zacarias",
        "Gamaliel"
      ],
      "answer": 0,
      "explanation": "Caifás presidiu o sinédrio judaico que condenou Jesus. (Mateus 26)"
    },
    {
      "question": "Quantas pragas caíram antes da libertação de Israel?",
      "options": [
        "3",
        "7",
        "10",
        "12"
      ],
      "answer": 2,
      "explanation": "Deus derramou dez pragas sobre o Egito. (Êxodo 7-12)"
    },
    {
      "question": "Quem era a irmã de Moisés?",
      "options": [
        "Zípora",
        "Miriã",
        "Raquel",
        "Lia"
      ],
      "answer": 1,
      "explanation": "Miriã liderou as mulheres no louvor do Mar Vermelho. (Êxodo 15)"
    },
    {
      "question": "Quantos dias durou a chuva no Dilúvio?",
      "options": [
        "7",
        "40",
        "150",
        "365"
      ],
      "answer": 1,
      "explanation": "Choveu sobre a terra por quarenta dias e noites. (Gênesis 7)"
    },
    {
      "question": "Quem foi batizado no Jordão por João Batista?",
      "options": [
        "Pedro",
        "Paulo",
        "Jesus",
        "Moisés"
      ],
      "answer": 2,
      "explanation": "Jesus foi batizado no Jordão para cumprir a justiça. (Mateus 3)"
    },
    {
      "question": "Quem era a mãe de João Batista?",
      "options": [
        "Maria",
        "Isabel",
        "Ana",
        "Marta"
      ],
      "answer": 1,
      "explanation": "Isabel era prima de Maria e estéril na velhice. (Lucas 1)"
    },
    {
      "question": "Quem escreveu a maioria das epístolas do Novo Testamento?",
      "options": [
        "Pedro",
        "João",
        "Paulo",
        "Tiago"
      ],
      "answer": 2,
      "explanation": "O apóstolo Paulo escreveu treze epístolas do cânon."
    },
    {
      "question": "Quem era o rei no nascimento de Jesus em Belém?",
      "options": [
        "Herodes o Grande",
        "Pilatos",
        "Nero",
        "César Augusto"
      ],
      "answer": 0,
      "explanation": "Herodes governava a Judeia e ordenou o massacre dos bebês. (Mateus 2)"
    },
    {
      "question": "Qual o livro bíblico mais longo?",
      "options": [
        "Gênesis",
        "Salmos",
        "Isaías",
        "Jeremias"
      ],
      "answer": 1,
      "explanation": "O livro dos Salmos possui 150 capítulos e é o mais longo."
    },
    {
      "question": "Que profeta foi jogado na cisterna cheia de lama?",
      "options": [
        "Isaías",
        "Jeremias",
        "Ezequiel",
        "Daniel"
      ],
      "answer": 1,
      "explanation": "Jeremias foi jogado na cisterna do palácio por pregar a rendição. (Jeremias 38)"
    },
    {
      "question": "Quem foi jogado na cova dos leões em Babilônia?",
      "options": [
        "Daniel",
        "Sadraque",
        "Mesaque",
        "Abede-Nego"
      ],
      "answer": 0,
      "explanation": "Daniel continuou orando e foi punido pelo rei Dario. (Daniel 6)"
    },
    {
      "question": "Quem interpretou o sonho das vacas do Faraó?",
      "options": [
        "Moisés",
        "José",
        "Daniel",
        "Neemias"
      ],
      "answer": 1,
      "explanation": "José interpretou as vacas gordas e magras como fartura e fome. (Gênesis 41)"
    },
    {
      "question": "Quem interpretou a escrita misteriosa na parede de Belsazar?",
      "options": [
        "José",
        "Daniel",
        "Esdras",
        "Neemias"
      ],
      "answer": 1,
      "explanation": "Daniel revealed that the Babylonian kingdom fell. (Daniel 5)"
    },
    {
      "question": "Qual rei de Israel casou-se com Jezabel?",
      "options": [
        "Acabe",
        "Jeroboão",
        "Saul",
        "Roboão"
      ],
      "answer": 0,
      "explanation": "O ímpio rei Acabe adorou Baal devido à influência de Jezabel. (1 Reis 16)"
    },
    {
      "question": "Quem reconstruiu os muros de Jerusalém sob oposição?",
      "options": [
        "Esdras",
        "Neemias",
        "Zorobabel",
        "Daniel"
      ],
      "answer": 1,
      "explanation": "Neemias organizou o povo para reerguer as muralhas de Jerusalém. (Neemias 2)"
    },
    {
      "question": "Qual o menor livro do Antigo Testamento?",
      "options": [
        "Naum",
        "Obadias",
        "Sofonias",
        "Joel"
      ],
      "answer": 1,
      "explanation": "Obadias contém apenas um capítulo de 21 versículos."
    },
    {
      "question": "Quem era o avô de Davi?",
      "options": [
        "Boaz",
        "Obede",
        "Jessé",
        "Salomão"
      ],
      "answer": 1,
      "explanation": "Obede, filho de Boaz e Rute, foi o pai de Jessé. (Rute 4)"
    },
    {
      "question": "Quem era o sogro de Moisés?",
      "options": [
        "Labão",
        "Jetro",
        "Abraão",
        "Arão"
      ],
      "answer": 1,
      "explanation": "Moisés cuidava das ovelhas de Jetro em Midiã. (Êxodo 3)"
    },
    {
      "question": "Qual discípulo era cobrador de impostos em Cafarnaum?",
      "options": [
        "Pedro",
        "Mateus",
        "João",
        "Filipe"
      ],
      "answer": 1,
      "explanation": "Mateus recolhia impostos quando foi chamado por Jesus. (Mateus 9)"
    }
  ],
  "dificil": [
    {
      "question": "Quem foi o homem mais velho registrado na genealogia bíblica, tendo vivido 969 anos?",
      "options": [
        "Enoque",
        "Matusalém",
        "Lameque",
        "Jarede"
      ],
      "answer": 1,
      "explanation": "Matusalém era filho de Enoque e faleceu no ano em que o Dilúvio caiu sobre a terra. (Gênesis 5:27)"
    },
    {
      "question": "Qual era o nome da divindade filisteia cujo templo o juiz Sansão derrubou em seu último ato de força?",
      "options": [
        "Baal",
        "Dagom",
        "Astarote",
        "Camos"
      ],
      "answer": 1,
      "explanation": "Os filisteus estavam reunidos no templo de Dagom celebrando a captura de Sansão quando ele derrubou as colunas. (Juízes 16:23)"
    },
    {
      "question": "Qual profeta foi ordenado por Deus a casar-se com uma mulher adúltera chamada Gômer, como ilustração simbólica?",
      "options": [
        "Oseias",
        "Amós",
        "Miqueias",
        "Malaquias"
      ],
      "answer": 0,
      "explanation": "A infidelidade de Gômer representava o desvio espiritual e a idolatria da nação de Israel. (Oseias 1)"
    },
    {
      "question": "No Apocalipse, onde a antiga serpente (o Diabo) é acorrentada por mil anos pelo anjo que desce do céu?",
      "options": [
        "No Inferno",
        "No Abismo",
        "No Lago de Fogo",
        "No vale de Josafá"
      ],
      "answer": 1,
      "explanation": "O anjo prendeu a serpente e a lançou no Abismo, fechando-o e selando-o por mil anos. (Apocalipse 20:1-3)"
    },
    {
      "question": "Quem era o idoso Sumo Sacerdote de Israel que acolheu o menino Samuel no santuário de Siló?",
      "options": [
        "Eli",
        "Esdras",
        "Caifás",
        "Melquisedeque"
      ],
      "answer": 0,
      "explanation": "Eli cuidou da educação do jovem Samuel, embora tenha falhado em corrigir seus próprios filhos rebeldes. (1 Samuel 2)"
    },
    {
      "question": "Quem foi o primeiro rei do Reino do Norte (Israel de dez tribos) após a cisão do reino unido?",
      "options": [
        "Roboão",
        "Jeroboão I",
        "Acabe",
        "Jeú"
      ],
      "answer": 1,
      "explanation": "Jeroboão I liderou a revolta das dez tribos contra Roboão, filho de Salomão, criando o Reino do Norte. (1 Reis 12)"
    },
    {
      "question": "Quem foi o pai de Matusalém, homem que andou com Deus e não experimentou a morte física?",
      "options": [
        "Enoque",
        "Lameque",
        "Sete",
        "Noé"
      ],
      "answer": 0,
      "explanation": "Enoque andou com Deus por 300 anos após gerar Matusalém, e Deus o levou para Si. (Gênesis 5:21-24)"
    },
    {
      "question": "Quantos anos Abraão tinha quando o seu filho prometido Isaque finalmente nasceu de sua esposa Sara?",
      "options": [
        "85 anos",
        "99 anos",
        "100 anos",
        "120 anos"
      ],
      "answer": 2,
      "explanation": "Abraão tinha cem anos quando Isaque nasceu, um milagre absoluto dada a idade avançada do casal. (Gênesis 21:5)"
    },
    {
      "question": "Qual o nome dado ao local onde Jacó lutou com um homem (anjo) até o amanhecer e teve seu nome mudado para Israel?",
      "options": [
        "Betel",
        "Peniel",
        "Siquém",
        "Hebrom"
      ],
      "answer": 1,
      "explanation": "Jacó chamou aquele lugar de Peniel ('Face de Deus'), dizendo: 'Vi a Deus face a face e minha vida foi salva'. (Gênesis 32:30)"
    },
    {
      "question": "Em qual ilha grega o apóstolo João estava exilado quando escreveu o livro do Apocalipse?",
      "options": [
        "Creta",
        "Patmos",
        "Chipre",
        "Maltas"
      ],
      "answer": 1,
      "explanation": "João foi exilado na pequena ilha de Patmos por causa da Palavra de Deus e do testemunho de Jesus. (Apocalipse 1:9)"
    },
    {
      "question": "Qual era o nome do primeiro filho que Moisés teve com sua esposa Zípora na terra de Midiã?",
      "options": [
        "Gérson",
        "Eliézer",
        "Coate",
        "Finéias"
      ],
      "answer": 0,
      "explanation": "Moisés chamou-o Gérson, pois disse: 'Fui estrangeiro (Ger) em terra alheia'. (Êxodo 18:3)"
    },
    {
      "question": "De acordo com a narrativa em 2 Samuel 21:19, quem é mencionado como tendo matado o irmão de Golias de Gate?",
      "options": [
        "Elanan",
        "Abisai",
        "Benaia",
        "Joabe"
      ],
      "answer": 0,
      "explanation": "Elanan, filho de Jaaré-Oregim, matou Lami, o irmão de Golias, cuja lança parecia o eixo de um tecelão."
    },
    {
      "question": "Quem era o rei de Moabe que, temendo o povo de Israel, contratou o profeta pagão Balaão para amaldiçoá-los?",
      "options": [
        "Balaque",
        "Eglom",
        "Mesa",
        "Sifor"
      ],
      "answer": 0,
      "explanation": "Balaque, filho de Zipor, enviou mensageiros com presentes para contratar Balaão. (Números 22)"
    },
    {
      "question": "Qual profeta foi levado em espírito por Deus a um vale de ossos secos e profetizou a ressurreição deles?",
      "options": [
        "Isaías",
        "Jeremias",
        "Ezequiel",
        "Daniel"
      ],
      "answer": 2,
      "explanation": "Ezequiel profetizou ao sopro e os ossos juntaram-se, formando um vasto exército vivo. (Ezequiel 37)"
    },
    {
      "question": "Quantos capítulos possui o longo e importante livro profético de Isaías no Antigo Testamento?",
      "options": [
        "40",
        "50",
        "66",
        "150"
      ],
      "answer": 2,
      "explanation": "O livro de Isaías contém exatamente 66 capítulos, o mesmo número de livros da Bíblia protestante."
    },
    {
      "question": "Quem foi a primeira pessoa a registrar ter visto e conversado com Jesus ressuscitado na manhã do domingo?",
      "options": [
        "Maria Madalena",
        "Simão Pedro",
        "João",
        "Maria, mãe de Tiago"
      ],
      "answer": 0,
      "explanation": "Jesus ressuscitou de manhã e apareceu primeiramente a Maria Madalena, de quem havia expelido sete demônios. (Marcos 16:9)"
    },
    {
      "question": "Com qual palavra solene termina o último livro do Antigo Testamento (Malaquias) na tradução em português de João Ferreira de Almeida?",
      "options": [
        "Amém",
        "Senhor",
        "Maldição",
        "Silêncio"
      ],
      "answer": 2,
      "explanation": "Malaquias 4:6 termina com a frase: '...para que eu não venha e fira a terra com maldição'."
    },
    {
      "question": "Quem era a avó materna do jovem pastor Timóteo, citada nominalmente por Paulo por transmitir sua fé?",
      "options": [
        "Lóide",
        "Eunice",
        "Priscila",
        "Dâmaris"
      ],
      "answer": 0,
      "explanation": "Paulo elogia a fé sem fingimento de Timóteo, que primeiro habitou em sua avó Lóide e em sua mãe Eunice. (2 Timóteo 1:5)"
    },
    {
      "question": "Quantas cidades de refúgio foram estabelecidas na partilha da terra para abrigar quem matasse alguém por acidente?",
      "options": [
        "3",
        "6",
        "10",
        "12"
      ],
      "answer": 1,
      "explanation": "Foram designadas seis cidades de refúgio (três no lado leste e três no lado oeste do rio Jordão). (Josué 20)"
    },
    {
      "question": "Qual rei de Judá começou a reinar com apenas 8 anos de idade e promoveu uma reforma ao achar o Livro da Lei?",
      "options": [
        "Josias",
        "Joás",
        "Uzias",
        "Ezequias"
      ],
      "answer": 0,
      "explanation": "Josias governou por 31 anos e ordenou a purificação do templo e do reino ao ouvir a leitura da Lei. (2 Reis 22)"
    },
    {
      "question": "De qual cidade filisteia era originário o terrível guerreiro gigante Golias?",
      "options": [
        "Gate",
        "Gaza",
        "Asdode",
        "Ascalom"
      ],
      "answer": 0,
      "explanation": "Golias pertencia à cidade de Gate, um dos redutos históricos de gigantes na Filístia. (1 Samuel 17:4)"
    },
    {
      "question": "Por quantos anos consecutivos os israelitas comeram do maná do céu até chegarem à fronteira de Canaã?",
      "options": [
        "7 anos",
        "40 anos",
        "50 anos",
        "70 anos"
      ],
      "answer": 1,
      "explanation": "Os israelitas comeram maná por 40 anos, cessando no dia seguinte ao que comeram do fruto da terra. (Êxodo 16:35 / Josué 5:12)"
    },
    {
      "question": "Qual era o nome da irmã de Moisés e Arão, que entoou o cântico de vitória com tamborins após o Mar Vermelho?",
      "options": [
        "Miriã",
        "Zípora",
        "Joquebede",
        "Cozbi"
      ],
      "answer": 0,
      "explanation": "A profetisa Miriã, irmã mais velha de Moisés e Arão, liderou as mulheres no cântico do mar. (Êxodo 15:20)"
    },
    {
      "question": "Quem sepultou Moisés em um vale secreto na terra de Moabe, de modo que ninguém sabe seu túmulo até hoje?",
      "options": [
        "Josué",
        "Os anjos",
        "O próprio Deus",
        "Ninguém, ele subiu aos céus"
      ],
      "answer": 2,
      "explanation": "Deuteronômio 34:6 afirma que o próprio Deus sepultou Moisés, preservando o local em segredo."
    },
    {
      "question": "Quantos filhos homens biológicos Jacó (Israel) gerou, cujos nomes batizaram as tribos originais?",
      "options": [
        "10",
        "12",
        "13",
        "70"
      ],
      "answer": 1,
      "explanation": "Jacó teve 12 filhos homens gerados com Lia, Raquel, Bila e Zilpa. (Gênesis 35:22)"
    },
    {
      "question": "Qual profeta confrontou pessoalmente o rei Davi por seu pecado de adúlterio com Bate-Seba e morte de Urias?",
      "options": [
        "Natã",
        "Gad",
        "Samuel",
        "Elias"
      ],
      "answer": 0,
      "explanation": "Natã contou uma parábola sobre um homem rico e sua ovelhinha antes de apontar: 'Tu és esse homem!'. (2 Samuel 12)"
    },
    {
      "question": "Quem era o pai de Davi, morador de Belém, que enviou seus filhos mais velhos ao exército de Saul?",
      "options": [
        "Jessé",
        "Boaz",
        "Saul",
        "Salomão"
      ],
      "answer": 0,
      "explanation": "Jessé era efrateu de Belém e tinha oito filhos, sendo Davi o caçula. (1 Samuel 16)"
    },
    {
      "question": "Qual era o nome da mãe do rei Salomão, que ajudou a desvendar a conspiração de Adonias pelo trono?",
      "options": [
        "Bate-Seba",
        "Abital",
        "Maaca",
        "Hagite"
      ],
      "answer": 0,
      "explanation": "Bate-Seba, diva de Davi, ajudou na coroação de Salomão. (1 Reis 1)"
    },
    {
      "question": "Quem foi a moradora de Jericó poupada da ruína com sua família por ter ocultado os dois espiões mandados por Josué?",
      "options": [
        "Raabe",
        "Rute",
        "Délila",
        "Gômer"
      ],
      "answer": 0,
      "explanation": "Raabe escondeu os espiões sob talos de linho no telhado e colocou um cordão vermelho na janela como sinal. (Josué 2)"
    },
    {
      "question": "Qual era o nome da terra natal de Jó, onde ele morava quando vieram as terríveis calamidades?",
      "options": [
        "Uz",
        "Ur",
        "Midiã",
        "Társis"
      ],
      "answer": 0,
      "explanation": "O livro de Jó abre descrevendo: 'Havia um homem na terra de Uz, cujo nome era Jó...'. (Jó 1:1)"
    },
    {
      "question": "Quem foi o homem escolhido para ocupar a vaga de apóstolo deixada por Judas Iscariotes, conforme Atos 1?",
      "options": [
        "Matias",
        "José Barsabás",
        "Barnabé",
        "Estêvão"
      ],
      "answer": 0,
      "explanation": "A igreja lançou sortes entre Matias e Barsabás, e a sorte caiu sobre Matias, que se uniu aos onze. (Atos 1:26)"
    },
    {
      "question": "Qual foi o rei da Babilônia que viu uma mão misteriosa escrevendo o julgamento divino nas paredes de seu banquete?",
      "options": [
        "Nabucodonosor",
        "Belsazar",
        "Dario",
        "Ciro"
      ],
      "answer": 1,
      "explanation": "Belsazar ofereceu um banquete usando as taças sagradas do Templo quando a escrita apareceu na parede. (Daniel 5)"
    },
    {
      "question": "Quem era o pai do sacerdote Esdras de acordo com sua linhagem em Esdras 7?",
      "options": [
        "Seraías",
        "Azarias",
        "Hilquias",
        "Salum"
      ],
      "answer": 0,
      "explanation": "Esdras era filho de Seraías, filho de Azarias, filho de Hilquias. (Esdras 7:1)"
    },
    {
      "question": "Qual era o nome da divindade moabita pela qual Salomão construiu um santuário em Jerusalém?",
      "options": [
        "Camos",
        "Moloque",
        "Milcom",
        "Baal-Peor"
      ],
      "answer": 0,
      "explanation": "Salomão edificou um santuário a Camos, a abominação de Moabe, no monte diante de Jerusalém. (1 Reis 11:7)"
    },
    {
      "question": "Qual foi o governante romano da Judeia que construiu Cesaréia Marítima?",
      "options": [
        "Herodes o Grande",
        "Herodes Antipas",
        "Pôncio Pilatos",
        "Félix"
      ],
      "answer": 0,
      "explanation": "Herodes o Grande edificou a monumental cidade portuária de Cesaréia em homenagem a César Augusto."
    },
    {
      "question": "Qual o nome do jovem que adormeceu na janela e caiu do terceiro andar durante uma pregação de Paulo?",
      "options": [
        "Êutico",
        "Trófimo",
        "Tíquico",
        "Épafro"
      ],
      "answer": 0,
      "explanation": "Êutico adormeceu profundamente na janela durante o sermão de Paulo e caiu, mas Paulo o ressuscitou. (Atos 20:9-10)"
    },
    {
      "question": "Quantos guerreiros Gideão escolheu para o combate final contra os midianitas?",
      "options": [
        "300 homens",
        "1000 homens",
        "3000 homens",
        "10000 homens"
      ],
      "answer": 0,
      "explanation": "Gideão reduziu seu exército a apenas 300 homens que lamberam a água como cães. (Juízes 7:7)"
    },
    {
      "question": "Qual era o nome hebraico da rainha Ester antes de ser coroada na Pérsia?",
      "options": [
        "Hadassa",
        "Vasti",
        "Avital",
        "Tamar"
      ],
      "answer": 0,
      "explanation": "Hadassa era o nome hebraico de Ester, prima de Mardoqueu da tribo de Benjamim. (Ester 2:7)"
    },
    {
      "question": "Quem matou o comandante cananeu Sísera pregando-lhe uma estaca na têmpora enquanto dormia?",
      "options": [
        "Débora",
        "Jael",
        "Rute",
        "Miriã"
      ],
      "answer": 1,
      "explanation": "Jael, esposa de Héber, acolheu Sísera em sua tenda e matou-o cravando uma estaca de tenda em sua têmpora. (Juízes 4:21)"
    },
    {
      "question": "Qual o nome do profeta que confrontou o rei Davi sobre o adultério através da parábola da ovelha?",
      "options": [
        "Samuel",
        "Natã",
        "Gad",
        "Elias"
      ],
      "answer": 1,
      "explanation": "O profeta Natã narrou a parábola do homem rico que roubou a única ovelhinha do pobre. (2 Samuel 12)"
    },
    {
      "question": "Qual dos reis de Judá foi levado cativo para a Babilônia com os olhos furados?",
      "options": [
        "Jeoaquim",
        "Sedequias",
        "Jeconias",
        "Manassés"
      ],
      "answer": 1,
      "explanation": "Sedequias tentou fugir, mas foi pego e teve seus filhos executados em sua presença e seus olhos furados. (2 Reis 25:7)"
    },
    {
      "question": "Quantas pedras preciosas estavam incrustadas no peitoral do Sumo Sacerdote de Israel?",
      "options": [
        "7 pedras",
        "12 pedras",
        "24 pedras",
        "40 pedras"
      ],
      "answer": 1,
      "explanation": "O peitoral continha 12 pedras preciosas organizadas em 4 fileiras representando as 12 tribos. (Êxodo 28:15-21)"
    },
    {
      "question": "Qual era o nome do servo do Sumo Sacerdote que teve a orelha direita cortada por Pedro no Getsêmani?",
      "options": [
        "Malco",
        "Ananias",
        "Caifás",
        "Zacarias"
      ],
      "answer": 0,
      "explanation": "Pedro desembainhou sua espada e cortou a orelha de Malco, mas Jesus curou o servo imediatamente. (João 18:10)"
    },
    {
      "question": "Qual dos profetas do Antigo Testamento correu à frente da carruagem do rei Acabe até Jezreel?",
      "options": [
        "Elias",
        "Eliseu",
        "Amós",
        "Obadias"
      ],
      "answer": 0,
      "explanation": "A mão do Senhor veio sobre Elias, que cingiu os lombos e correu na frente da carruagem de Acabe. (1 Reis 18:46)"
    },
    {
      "question": "Quem foi o construtor do Tabernáculo no deserto, cheio do Espírito de sabedoria artística?",
      "options": [
        "Moisés",
        "Bezalel",
        "Aoliabe",
        "Arão"
      ],
      "answer": 1,
      "explanation": "Deus chamou Bezalel, da tribo de Judá, e encheu-o do Espírito de Deus com sabedoria artística. (Êxodo 35:30-31)"
    },
    {
      "question": "Qual dos discípulos de Jesus escreveu três epístolas e um evangelho?",
      "options": [
        "Pedro",
        "João",
        "Tiago",
        "Lucas"
      ],
      "answer": 1,
      "explanation": "João escreveu o quarto Evangelho, três epístolas pastorais e a revelação do Apocalipse."
    },
    {
      "question": "Qual era a linhagem do sacerdote Melquisedeque mencionado em Gênesis e Hebreus?",
      "options": [
        "Linhagem de Levi",
        "Linhagem de Arão",
        "Linhagem sem genealogia descrita",
        "Linhagem de Judá"
      ],
      "answer": 2,
      "explanation": "Melquisedeque é descrito como sem pai, sem mãe, sem genealogia, assemelhado ao Filho de Deus. (Hebreus 7:3)"
    },
    {
      "question": "Quem escreveu a Epístola aos Gálatas na autoria declarada na Bíblia?",
      "options": [
        "Pedro",
        "Tiago",
        "Paulo",
        "Barnabé"
      ],
      "answer": 2,
      "explanation": "A carta aos Gálatas foi escrita diretamente pelo punho de Paulo para combater os judaizantes. (Gálatas 1:1)"
    },
    {
      "question": "Qual o nome da cidade onde o apóstolo Paulo foi apedrejado e deixado como morto?",
      "options": [
        "Listra",
        "Iconio",
        "Darbe",
        "Antioquia"
      ],
      "answer": 0,
      "explanation": "Judeus de Antioquia e Icônio instigaram a multidão, que apedrejou Paulo e arrastou-o para fora da cidade. (Atos 14:19)"
    },
    {
      "question": "Quem foi a mulher de Aquila, casal de cooperadores fiéis do ministério de Paulo?",
      "options": [
        "Lídia",
        "Priscila",
        "Febe",
        "Dâmaris"
      ],
      "answer": 1,
      "explanation": "Priscila e Áquila trabalharam na fabricação de tendas e apoiaram o apóstolo Paulo. (Atos 18:2)"
    },
    {
      "question": "Qual era o nome do rei de Judá quando a sombra do relógio solar retrocedeu dez graus como sinal?",
      "options": [
        "Ezequias",
        "Josias",
        "Uzias",
        "Manassés"
      ],
      "answer": 0,
      "explanation": "Deus concedeu a Ezequias o milagre do recuo da sombra no relógio de Acaz como prova de cura. (2 Reis 20:9-11)"
    },
    {
      "question": "Quem era o deus filisteu de Ecrom a quem o rei Acazias enviou mensageiros para consultar?",
      "options": [
        "Baal-Zebube",
        "Dagom",
        "Camos",
        "Moloc"
      ],
      "answer": 0,
      "explanation": "Acazias mandou consultar Baal-Zebube, divindade de Ecrom, sobre se recuperaria de uma queda. (2 Reis 1:2)"
    },
    {
      "question": "Quantos capítulos possui o livro profético de Daniel?",
      "options": [
        "10 capítulos",
        "12 capítulos",
        "14 capítulos",
        "16 capítulos"
      ],
      "answer": 1,
      "explanation": "O livro de Daniel é estruturado em 12 capítulos, divididos em relatos históricos e visões proféticas."
    },
    {
      "question": "Quem era a mãe de Salomão, que foi esposa do hitita Urias?",
      "options": [
        "Maaca",
        "Bate-Seba",
        "Abital",
        "Hagite"
      ],
      "answer": 1,
      "explanation": "Bate-Seba foi esposa de Urias e posteriormente de Davi, gerando Salomão. (2 Samuel 11-12)"
    },
    {
      "question": "Qual era o nome do pai do juiz Gideão da tribo de Manassés?",
      "options": [
        "Joás",
        "Abiezer",
        "Calebe",
        "Elimeleque"
      ],
      "answer": 0,
      "explanation": "Gideão (ou Jerubaal) era filho de Joás, da família de Abiezer. (Juízes 6:11)"
    },
    {
      "question": "Qual profeta reprovou o rei Saul por não destruir completamente os amalequitas e seus bens?",
      "options": [
        "Samuel",
        "Natã",
        "Elias",
        "Isaías"
      ],
      "answer": 0,
      "explanation": "Samuel confrontou Saul por poupar o rei Agague e o melhor do gado, declarando que obedecer é melhor que sacrificar. (1 Samuel 15)"
    },
    {
      "question": "Quem foi a esposa que Jacó obteve após trabalhar catorze anos para seu tio Labão?",
      "options": [
        "Lia e Raquel",
        "Zilpa e Bila",
        "Raquel apenas",
        "Rebeca"
      ],
      "answer": 0,
      "explanation": "Jacó foi enganado recebendo Lia após 7 anos, e trabalhou mais 7 anos por Raquel. (Gênesis 29)"
    },
    {
      "question": "Qual o nome do monte onde Arão, o irmão de Moisés, faleceu e foi sepultado?",
      "options": [
        "Monte Nebo",
        "Monte Sinai",
        "Monte Hor",
        "Monte Horebe"
      ],
      "answer": 2,
      "explanation": "Arão subiu ao Monte Hor pela ordem do Senhor e faleceu lá aos 123 anos. (Números 20:25-28)"
    },
    {
      "question": "Quem foi a rainha ímpia que jurou matar o profeta Elias após ele degolar os profetas de Baal?",
      "options": [
        "Atalia",
        "Jezabel",
        "Vasti",
        "Ester"
      ],
      "answer": 1,
      "explanation": "Jezabel mandou uma mensagem a Elias ameaçando-o de morte dentro de vinte e quatro horas. (1 Reis 19:2)"
    },
    {
      "question": "Quem foi o general do exército de Israel sob a liderança do rei Davi?",
      "options": [
        "Joabe",
        "Abner",
        "Amasa",
        "Benaia"
      ],
      "answer": 0,
      "explanation": "Joabe, filho de Zeruia, foi o comandante supremo das forças armadas do rei Davi. (2 Samuel 8:16)"
    },
    {
      "question": "Qual dos profetas menores de Israel casou-se com a prostituta Gômer para simbolizar a infidelidade de Israel?",
      "options": [
        "Oseias",
        "Amós",
        "Miqueias",
        "Joel"
      ],
      "answer": 0,
      "explanation": "Deus mandou Oseias casar-se com Gômer como sinal da infidelidade da nação para com o Senhor. (Oseias 1:2)"
    },
    {
      "question": "Quantos milagres estão associados ao profeta Eliseu nas escrituras em comparação com Elias?",
      "options": [
        "A metade",
        "O mesmo número",
        "O dobro",
        "Três vezes mais"
      ],
      "answer": 2,
      "explanation": "Na narrativa de 2 Reis, Eliseu realiza aproximadamente o dobro de milagres de Elias, refletindo a porção dobrada."
    },
    {
      "question": "Quem foi o discípulo de Paulo a quem ele chamou de 'meu amado filho na fé'?",
      "options": [
        "Tito",
        "Timóteo",
        "Silas",
        "Lucas"
      ],
      "answer": 1,
      "explanation": "Paulo dedicou duas cartas pastorais a Timóteo, seu companheiro leal e jovem ministro. (1 Timóteo 1:2)"
    },
    {
      "question": "Quem foi o governante persa que autorizou o primeiro retorno dos judeus exilados para reconstruir o Templo?",
      "options": [
        "Ciro",
        "Dario",
        "Artaxerxes",
        "Xerxes"
      ],
      "answer": 0,
      "explanation": "Ciro, rei da Pérsia, emitiu um decreto cumprindo a profecia de Jeremias sobre a restauração. (Esdras 1:1-3)"
    },
    {
      "question": "Qual era a tribo do rei Saul, o primeiro soberano de Israel?",
      "options": [
        "Judá",
        "Benjamim",
        "Efraim",
        "Manassés"
      ],
      "answer": 1,
      "explanation": "Saul era filho de Quis, da tribo de Benjamim, a menor tribo de Israel. (1 Samuel 9:1-2)"
    },
    {
      "question": "Quem foi o sogro do sacerdote Jacó na terra de Padã-Arã?",
      "options": [
        "Labão",
        "Abimeleque",
        "Betuel",
        "Jetro"
      ],
      "answer": 0,
      "explanation": "Labão, irmão de Rebeca, acolheu Jacó em sua casa e tornou-se seu sogro. (Gênesis 29)"
    },
    {
      "question": "Qual era a nome da primeira esposa de Moisés?",
      "options": [
        "Zípora",
        "Miriã",
        "Cozbi",
        "Tarbis"
      ],
      "answer": 0,
      "explanation": "Zípora, filha do sacerdote Jetro, casou-se com Moisés na terra de Midiã. (Êxodo 2:21)"
    },
    {
      "question": "De acordo com a Epístola aos Hebreus, qual sacerdote era 'sem princípio de dias nem fim de vida'?",
      "options": [
        "Arão",
        "Melquisedeque",
        "Caifás",
        "Ezequiel"
      ],
      "answer": 1,
      "explanation": "Melquisedeque é apresentado como uma figura misteriosa sem genealogia descrita na Torá. (Hebreus 7:3)"
    },
    {
      "question": "Quem foi o profeta que teve a boca tocada por uma brasa viva levada por um serafim?",
      "options": [
        "Isaías",
        "Jeremias",
        "Ezequiel",
        "Daniel"
      ],
      "answer": 0,
      "explanation": "Um serafim voou com uma brasa do altar e tocou os lábios de Isaías para purificar sua iniquidade. (Isaías 6:6-7)"
    },
    {
      "question": "Qual dos profetas menores de Israel profetizou especificamente sobre a queda e destruição de Nínive?",
      "options": [
        "Jonas",
        "Naum",
        "Obadias",
        "Miqueias"
      ],
      "answer": 1,
      "explanation": "Jonas pregou o arrependimento, mas Naum profetizou o julgamento final e destruição definitiva de Nínive. (Naum 1)"
    },
    {
      "question": "Quem foi a primeira mulher convertida à fé cristã na Europa através da pregação de Paulo em Filipos?",
      "options": [
        "Febe",
        "Lídia",
        "Dâmaris",
        "Priscila"
      ],
      "answer": 1,
      "explanation": "Lídia, vendedora de púrpura da cidade de Tiatira, ouviu Paulo e foi batizada com sua família. (Atos 16:14-15)"
    },
    {
      "question": "Qual o rei de Moabe que tentou contratar o profeta Balaão para amaldiçoar Israel?",
      "options": [
        "Balaque",
        "Eglom",
        "Mesa",
        "Sifor"
      ],
      "answer": 0,
      "explanation": "Balaque, temendo o povo numeroso de Israel, enviou presentes para Balaão amaldiçoá-los. (Números 22)"
    },
    {
      "question": "Quem foi a profetisa que ajudou o rei Josias a entender o Livro da Lei achado no Templo?",
      "options": [
        "Débora",
        "Hulda",
        "Miriã",
        "Ana"
      ],
      "answer": 1,
      "explanation": "A profetisa Hulda foi consultada pelos oficiais de Josias e confirmou a palavra de ira divina. (2 Reis 22:14)"
    },
    {
      "question": "De qual tribo de Israel era originário o juiz Sansão?",
      "options": [
        "Dã",
        "Judá",
        "Efraim",
        "Benjamim"
      ],
      "answer": 0,
      "explanation": "Sansão pertencia à tribo de Dã, cuja herança era próxima aos filisteus. (Juízes 13:2)"
    },
    {
      "question": "Quantos profetas de Baal foram desafiados por Elias no confronto do Monte Carmelo?",
      "options": [
        "400 profetas",
        "450 profetas",
        "850 profetas",
        "1000 profetas"
      ],
      "answer": 1,
      "explanation": "Havia 450 profetas de Baal e 400 profetas de Aserá reunidos perante Elias. (1 Reis 18:19)"
    },
    {
      "question": "Quem foi o profeta que repreendeu o rei Davi usando uma parábola sobre uma ovelha?",
      "options": [
        "Samuel",
        "Natã",
        "Gad",
        "Elias"
      ],
      "answer": 1,
      "explanation": "O profeta Natã confrontou Davi após seu adultério com Bate-Seba e morte de Urias. (2 Samuel 12)"
    },
    {
      "question": "Quem era o pai de Matusalém?",
      "options": [
        "Enoque",
        "Lameque",
        "Noé",
        "Jarede"
      ],
      "answer": 0,
      "explanation": "Enoque gerou Matusalém e andou com Deus por trezentos anos antes de ser trasladado. (Gênesis 5:21-22)"
    },
    {
      "question": "Qual dos profetas escreveu o livro de Lamentações expressando luto pela queda de Jerusalém?",
      "options": [
        "Isaías",
        "Jeremias",
        "Ezequiel",
        "Daniel"
      ],
      "answer": 1,
      "explanation": "Tradicionalmente, atribui-se ao profeta Jeremias a escrita das Lamentações após a invasão babilônica."
    },
    {
      "question": "Quem foi o general do exército de Davi que matou Absalão quando este ficou preso pelos cabelos em um carvalho?",
      "options": [
        "Joabe",
        "Abisai",
        "Benaia",
        "Amasa"
      ],
      "answer": 0,
      "explanation": "Joabe desobedeceu à ordem direta de Davi e cravou três dardos no coração de Absalão. (2 Samuel 18:14)"
    },
    {
      "question": "Quantos capítulos possui o Evangelho de Mateus?",
      "options": [
        "24 capítulos",
        "28 capítulos",
        "30 capítulos",
        "16 capítulos"
      ],
      "answer": 1,
      "explanation": "O Evangelho de Mateus contém exatamente 28 capítulos no cânon do Novo Testamento."
    },
    {
      "question": "Qual dos reis de Judá foi curado de lepra após tentar queimar incenso no Altar sagrado?",
      "options": [
        "Uzias (Azarias)",
        "Ezequias",
        "Manassés",
        "Josias"
      ],
      "answer": 0,
      "explanation": "O rei Uzias ficou leproso imediatamente após desafiar o dever dos sacerdotes no Templo. (2 Crônicas 26:19-21)"
    },
    {
      "question": "Quem era o sumo sacerdote de Israel no julgamento de Jesus Cristo antes da crucificação?",
      "options": [
        "Anás",
        "Caifás",
        "Zacarias",
        "Gamaliel"
      ],
      "answer": 1,
      "explanation": "Caifás era o sumo sacerdote em exercício naquele ano e presidiu o conselho contra Jesus. (Mateus 26:57)"
    }
  ]
};

const COIN_REWARDS = {
  facil: 25,
  medio: 30,
  dificil: 35
};

class BibleQuizGame {
  constructor() {
    this.level = 'facil'; // 'facil', 'medio', 'dificil', 'misto'
    this.questions = [];  // Array de perguntas selecionadas
    this.currentIndex = 0;
    this.score = 0;
    this.accumulatedCorrectPoints = 0;
    this.selectedOption = null;
    this.answered = false;
    this.lives = 3;       // Vidas restantes
    this.coins = 55;      // Moedas acumuladas
    this.fiftyFiftyUsed = false;
    this.majorityUsed = false;
    this.bestScores = {
      facil: 0,
      medio: 0,
      dificil: 0,
      misto: 0
    };
    this.conqueredAll = false;
    this.levelTransition = false;
    this.transitionFrom = '';
    this.transitionTo = '';
    this.loadBestScores();
  }

  // Inicializa uma nova partida do quiz com um nível escolhido
  start(level) {
    this.level = level;
    this.currentIndex = 0;
    this.score = 0;
    this.accumulatedCorrectPoints = 0;
    this.selectedOption = null;
    this.answered = false;
    this.lives = 3;
    this.coins = 55;
    this.fiftyFiftyUsed = false;
    this.majorityUsed = false;
    this.conqueredAll = false;
    this.levelTransition = false;

    let pool = [];
    if (level === 'misto') {
      const facilPool = BIBLE_QUIZ_QUESTIONS.facil.map(q => ({ ...q, difficulty: 'facil' }));
      const medioPool = BIBLE_QUIZ_QUESTIONS.medio.map(q => ({ ...q, difficulty: 'medio' }));
      const dificilPool = BIBLE_QUIZ_QUESTIONS.dificil.map(q => ({ ...q, difficulty: 'dificil' }));
      pool = [...facilPool, ...medioPool, ...dificilPool];
      // Clona e embaralha todas as 300 perguntas do pool misto
      this.questions = [...pool].sort(() => Math.random() - 0.5);
    } else {
      pool = (BIBLE_QUIZ_QUESTIONS[level] || []).map(q => ({ ...q, difficulty: level }));
      // Clona e embaralha as 100 perguntas do nível
      this.questions = [...pool].sort(() => Math.random() - 0.5);
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
    let rewardGained = 0;
    
    if (isCorrect) {
      this.score++;
      const qDifficulty = currentQuestion.difficulty || this.level;
      rewardGained = COIN_REWARDS[qDifficulty] || 25;
      this.coins += rewardGained;
      this.accumulatedCorrectPoints += rewardGained;
    } else {
      this.lives--;
    }

    return {
      isCorrect: isCorrect,
      correctIndex: currentQuestion.answer,
      rewardGained: rewardGained,
      livesLeft: this.lives
    };
  }

  // Usa o Pulo (custa 20 moedas)
  useSkip() {
    if (this.answered || this.coins < 20) return false;
    this.coins -= 20;
    return true;
  }

  // Usa o 50/50 (custa 25 moedas)
  useFiftyFifty() {
    if (this.answered || this.coins < 25 || this.fiftyFiftyUsed) return null;
    this.coins -= 25;
    this.fiftyFiftyUsed = true;

    const correctIdx = this.getCurrentQuestion().answer;
    const wrongIndices = [0, 1, 2, 3].filter(idx => idx !== correctIdx);
    // Escolhe aleatoriamente duas opções incorretas para excluir
    const toEliminate = wrongIndices.sort(() => Math.random() - 0.5).slice(0, 2);
    return toEliminate;
  }

  // Usa o Voto da Maioria (custa 45 moedas)
  useMajority() {
    if (this.answered || this.coins < 45 || this.majorityUsed) return null;
    this.coins -= 45;
    this.majorityUsed = true;

    const correctIdx = this.getCurrentQuestion().answer;
    // O correto terá a maioria absoluta, entre 65% e 85% dos votos
    const correctPct = Math.floor(Math.random() * 21) + 65;
    let remaining = 100 - correctPct;

    const percentages = [0, 0, 0, 0];
    percentages[correctIdx] = correctPct;

    const wrongIndices = [0, 1, 2, 3].filter(idx => idx !== correctIdx);
    const val1 = Math.floor(Math.random() * (remaining - 10)) + 5;
    remaining -= val1;
    const val2 = Math.floor(Math.random() * (remaining - 4)) + 2;
    remaining -= val2;
    const val3 = remaining;

    percentages[wrongIndices[0]] = val1;
    percentages[wrongIndices[1]] = val2;
    percentages[wrongIndices[2]] = val3;

    return percentages;
  }

  // Avança para a próxima pergunta.
  nextQuestion() {
    // Limpa a flag de transição antes de prosseguir
    this.levelTransition = false;

    // Se ainda houver perguntas no lote carregado e o jogador estiver vivo:
    if (this.currentIndex < this.questions.length - 1 && this.lives > 0) {
      this.currentIndex++;
      this.selectedOption = null;
      this.answered = false;
      this.fiftyFiftyUsed = false;
      this.majorityUsed = false;
      return true;
    }
    
    // Se o jogador estiver vivo, mas as perguntas do nível acabaram (Regra de Progressão):
    if (this.lives > 0) {
      if (this.level === 'facil') {
        // Transiciona do Fácil para o Médio
        this.levelTransition = true;
        this.transitionFrom = 'Fácil';
        this.transitionTo = 'Médio';
        this.level = 'medio';
        this.currentIndex = 0;
        this.selectedOption = null;
        this.answered = false;
        this.fiftyFiftyUsed = false;
        this.majorityUsed = false;
        this.lives = 3; // RENOVA AS VIDAS!
        
        const pool = BIBLE_QUIZ_QUESTIONS.medio.map(q => ({ ...q, difficulty: 'medio' }));
        this.questions = [...pool].sort(() => Math.random() - 0.5);
        return true;
      } else if (this.level === 'medio') {
        // Transiciona do Médio para o Difícil
        this.levelTransition = true;
        this.transitionFrom = 'Médio';
        this.transitionTo = 'Difícil';
        this.level = 'dificil';
        this.currentIndex = 0;
        this.selectedOption = null;
        this.answered = false;
        this.fiftyFiftyUsed = false;
        this.majorityUsed = false;
        this.lives = 3; // RENOVA AS VIDAS!
        
        const pool = BIBLE_QUIZ_QUESTIONS.dificil.map(q => ({ ...q, difficulty: 'dificil' }));
        this.questions = [...pool].sort(() => Math.random() - 0.5);
        return true;
      } else if (this.level === 'dificil' || this.level === 'misto') {
        // Chegou ao fim do nível difícil ou do misto (respondeu todas as 300!)
        this.conqueredAll = true;
      }
    }
    
    // Fim do jogo (seja por morte ou por responder tudo)
    this.updateBestScores();
    return false;
  }

  getFinalPoints() {
    const answersPoints = this.accumulatedCorrectPoints;
    const heartsPoints = Math.max(0, this.lives) * 50;
    return answersPoints + heartsPoints;
  }

  // Atualiza recorde local para a dificuldade ativa
  updateBestScores() {
    const currentBest = this.bestScores[this.level] || 0;
    const finalPoints = this.getFinalPoints();
    if (finalPoints > currentBest) {
      this.bestScores[this.level] = finalPoints;
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
          dificil: parsed.dificil || 0,
          misto: parsed.misto || 0
        };
      } catch (e) {
        console.error("Erro ao ler recordes do quiz:", e);
      }
    }
  }
}
