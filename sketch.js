function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
   color: white;
            background: black;
            margin: 0px;
            font-family: "Chakra Petch", sans-serif;
            margin-bottom: 100px;
        }

        header {
            border-bottom: solid 2px rgb(42, 122, 228);
            padding: 20px;
            font-size: 32px;
            color: rgb(42, 122, 228);
            text-align: center;
        }

        .chamada {
            background: rgb(184, 156, 213);
            padding-bottom: 80px;
            padding-top: 80px;
            display: flex;
            justify-content: center;
            align-items: center; /* Centraliza verticalmente o texto e a imagem da chamada */
            flex-wrap: wrap; /* Permite que os itens quebrem a linha em telas menores */
        }

        .chamada-texto {
            margin-right: 5%;
            max-width: 500px; /* Limita a largura do texto para melhor leitura */
            text-align: center; /* Centraliza o texto dentro da sua área */
        }

        h1 {
            font-size: 40px;
            color: black; /* Alterado para contraste com o fundo da chamada */
        }

        .chamada p {
            font-size: 20px;
            color: black; /* Alterado para contraste com o fundo da chamada */
        }

        .categoria-videos {
            display: flex;
            overflow-x: auto; /* Permite rolar horizontalmente se houver muitos itens */
            gap: 20px; /* Aumentado o espaço entre as imagens */
            padding: 20px; /* Adicionado padding para melhor visualização na rolagem */
            justify-content: flex-start; /* Alinha o início das imagens à esquerda */
            -webkit-overflow-scrolling: touch; /* Melhora a rolagem em dispositivos iOS */
        }

        .categoria {
            padding-left: 20px;
            padding-right: 20px;
            margin-top: 50px;
        }

        .game-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            flex-shrink: 0; /* Impede que os itens encolham */
            width: 250px; /* Define uma largura fixa para cada item de jogo */
        }

        .game-item img {
            width: 250px; /* Garante que a imagem tenha a largura do item */
            height: 150px; /* Altura fixa para uniformidade, você pode ajustar */
            object-fit: cover; /* Garante que a imagem cubra a área sem distorção */
            opacity: 0.7; /* Opacidade inicial ajustada para um visual mais sutil */
            border: 3px solid transparent; /* Borda transparente inicial */
            transition: opacity 0.3s ease, border 0.3s ease; /* Transição suave */
            border-radius: 8px; /* Borda arredondada para as imagens */
        }

        .game-item img:hover {
            opacity: 1.0;
            border: 3px solid rgb(42, 122, 228); /* Borda azul ao passar o mouse */
        }

        .game-item h3 {
            color: rgb(42, 122, 228);
            font-size: 24px;
            margin-top: 15px;
            margin-bottom: 5px;
        }

        .game-item p {
            font-size: 16px;
            color: #ccc;
            text-align: justify; /* Justifica o texto para melhor leitura */
            padding: 0 10px; /* Adiciona um pequeno padding nas laterais do parágrafo */
        }

        .categoria h2 {
            color: rgb(42, 122, 228);
            text-align: center;
            margin-bottom: 30px;
        }
