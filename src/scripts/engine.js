
const state={
    score:{
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById('score_points'),
    },
    cardSprites:{
        avatar: document.getElementById('card_image'),
        name: document.getElementById('card-name'),
        type: document.getElementById('card_type'),
    },
    fieldCards: {
        player: document.querySelector('#player_field_card'),
        computer: document.querySelector('#computer_field_card'),
    },
    actions:{
    button:document.getElementById('next-duel'),
},
    playerSide: {
    player1: "player_cards",
    playerBox : document.querySelector('.card_box.framed#player_cards'),
    computer: "computer_cards",
    computerBox: document.querySelector('.card_box.framed#computer_cards'),
}// state onde ficam os dados do jogo e do jogador atual (score, vida, etc)

};

const playerSide = {
player1: "player_cards",
computer: "computer_cards",
}

const pathImages = './src/assets/icons/';
const cardData = [
    {
        id: 0,
        name: 'Blue Eyes White Dragon',
        type: 'Paper',
        img: `${pathImages}dragon.png`,
        winOf: [1],
        loseOf: [2],
    },
    {
        id: 1,
        name: 'Dark Magician',
        type: 'Rock',
        img: `${pathImages}magician.png`,
        winOf: [2],
        loseOf: [0],
    },
    {
        id: 2,
        name: 'Exodia',
        type: 'Scissors',
        img: `${pathImages}exodia.png`,
        winOf: [0],
        loseOf: [1],
    },
];
// cardData onde ficam os dados das cartas (nome, tipo, imagem, etc)

async function getRandomCardId(){
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id;
}

async function createCardImage(idCard, fieldSide){
const cardImage = document.createElement('img');
cardImage.setAttribute("height", "100px");
cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
cardImage.setAttribute("data-id", idCard);
cardImage.classList.add('card');

if(fieldSide === playerSide.player1){
    cardImage.addEventListener("mouseover", () => {
        drawSelectCard(idCard);
     });
    cardImage.addEventListener('click', () =>{
        setCardsField(cardImage.getAttribute('data-id')); 
    });
}

 return cardImage;
};

async function setCardsField(idCard){

    // remove todas as cartas antes 
    await removeAllCardsImage();
    let computerCardId = await getRandomCardId();
    state.fieldCards.player.style.display = "block";
    state.fieldCards.computer.style.display = "block";

    state.fieldCards.player.src = cardData[idCard].img;
    state.fieldCards.computer.src = cardData[computerCardId].img;
    state.cardSprites.name.innerText = "";
    state.cardSprites.type.innerText = "";

    state.cardSprites.avatar.src = "";
    let duelResult = await checkDuelResult(idCard, computerCardId);
    await updateScore();
    await drawButton(duelResult);
}
async function removeAllCardsImage(){
    let {computerBox, playerBox} = state.playerSide;
    let imgElements = computerBox.querySelectorAll('img');
    imgElements.forEach((img) => {
        img.remove();
    });
    imgElements = playerBox.querySelectorAll('img');
    imgElements.forEach((img) => {
        img.remove();
    });
}
async function drawSelectCard(index){
    state.cardSprites.avatar.src = cardData[index].img;
    state.cardSprites.name.innerText = cardData[index].name;
    state.cardSprites.type.innerText = "attibute:" + cardData[index].type;
}

async function checkDuelResult(playerCardId, computerCardId) {
    let duelResults = "draw"
    let playerCard = cardData[playerCardId];
    if(playerCard.winOf.includes(computerCardId)){
        duelResults = "win";
        state.score.playerScore++;
    }
    if(playerCard.loseOf.includes(computerCardId)){
        duelResults = "lose";

        state.score.computerScore++;
    }
    await playAudio(duelResults);
    return duelResults;
}


async function drawCards(cardNumbers, fieldSide){
    for (let i = 0; i < cardNumbers; i++){
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard, fieldSide);
        document.getElementById(fieldSide).appendChild(cardImage);
    }
}
async function resetDuel (){
    state.cardSprites.avatar.src ="";
    state.actions.button.style.display = "none";

    state.fieldCards.player.style.display = "none";
    state.fieldCards.computer.style.display = "none";
    init();
}


async function drawButton(text){
    state.actions.button.innerText = text.toUpperCase();
    state.actions.button.style.display = "block";
}

async function updateScore(){
    state.score.scoreBox.innerText = `Win: ${state.score.playerScore} | Lose: ${state.score.computerScore}`;
}

// audios
async function playAudio(status){
    const audio = new Audio(`./src/assets/audios/${status}.wav`);
    try{
        audio.play();
    }catch{

    }
}




function init(){
    state.fieldCards.player.style.display = "none";
    state.fieldCards.computer.style.display = "none";
    drawCards(5, playerSide.player1);
    drawCards(5, playerSide.computer);
    const bgm = document.getElementById('bgm');
    bgm.play();
}
init();