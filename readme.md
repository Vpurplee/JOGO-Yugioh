# Yugioh Jo-ken-po

Bem-vindo ao Yugioh Jo-ken-po, um jogo de cartas no estilo pedra-papel-tesoura com uma pitada de Yugioh! Este projeto foi desenvolvido junto com o Bootcamp Potência Tech iFood - Desenvolvimento de Jogos, combina HTML, CSS e JavaScript para criar uma experiência envolvente de duelo entre jogadores e um oponente controlado pelo computador.

## Como Jogar

Para jogar, acesse [este link](https://vpurplee.github.io/JOGO-Yugioh/).

Ao carregar o jogo, cartas são distribuídas para o jogador e o computador.
Passe o mouse sobre suas cartas para ver detalhes e clique para escolher uma carta para jogar.
O computador seleciona aleatoriamente uma carta também.
Os resultados do duelo são exibidos, e a pontuação é atualizada.
Clique no botão "Próximo Duelo" para redefinir o campo para a próxima rodada.

## Estrutura do Projeto

O projeto está estruturado com HTML definindo o layout, CSS estilizando os elementos e JavaScript gerenciando a lógica do jogo. Aqui está uma breve visão geral dos principais componentes:

HTML: Define a estrutura da página do jogo, incluindo contêineres, botões e elementos de áudio/vídeo.
CSS: Folhas de estilo para redefinir estilos, estilizar botões, contêineres e os estilos principais do jogo.
JavaScript: Gerencia o estado do jogo, dados das cartas, ações do jogador e o fluxo geral do jogo.


## Lógica do Jogo

A lógica do jogo é implementada no arquivo `engine.js`. Ele lida com ações como a distribuição de cartas, a configuração do campo de duelo, a verificação dos resultados do duelo e a atualização da pontuação.

## Dados das Cartas

Os dados das cartas são armazenados no array `cardData`, contendo informações como nome da carta, tipo, caminho da imagem e relações com outras cartas (vitória e derrota contra cartas específicas).


