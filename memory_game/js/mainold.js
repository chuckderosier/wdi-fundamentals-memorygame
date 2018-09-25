var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",
}
];
var cardsInPlay = [];
function checkForMatch (){
if (cardsInPlay[0] === cardsInPlay[1]) {
   alert("You found a match!");
} else {
   alert("Sorry, try again.");
}
};
function flipCard () {
    var cardId = document.getElementsByTagName('data-id');
    cardsInPlay.push(cards.rank);
    document.getElementsByTagName('src').setAttribute(cards[cardId].cardImage); 
if (cardsInPlay.length === 2) {
    checkForMatch();
    }
};
function createBoard () {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.png");
        cardElement.setAttribute('data-id', i);
        var work = flipCard();
        var buttonClick = document.querySelector('button');
        button.addEventListener('click', work);
        document.getElementsByTagName('#game-board').appendChild(cardElement);
    }
};
createBoard();