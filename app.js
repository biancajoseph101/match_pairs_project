//variables
const cards = [...document.querySelectorAll('.card')];
const display = document.querySelector('.display');
const reset = document.querySelector('#resetButton');

let flipCard = [];
let gameOver = false;

let cardObjects = [
  {
    name: 'green frog1',
    card: 1,
    url: "http://bwvp.ecolinc.vic.edu.au/sites/default/files/species/Verreaux's_Frog_01_0.jpg"
  },
  {
    name: 'green frog2',
    card: 2,
    url: "http://bwvp.ecolinc.vic.edu.au/sites/default/files/species/Verreaux's_Frog_01_0.jpg"
  },
  {
    name: 'blue frog1',
    card: 3,
    url: 'https://cdn.shopify.com/s/files/1/0341/4893/products/azureus_1024x1024.jpg?v=1576277674'
  },
  {
    name: 'blue frog2',
    card: 4,
    url: 'https://cdn.shopify.com/s/files/1/0341/4893/products/azureus_1024x1024.jpg?v=1576277674'
  }
];

// if (cardFlipped && cardObjects[i].url === cardObjects[i].url) {
//   gameOver = true;
// }

console.log(cardObjects[1].url);
//functions

//function cardsMatched() {}

//event listeners
//flip cards
for (let i = 0; i < cards.length; i++) {
  console.log(cards[i]);
  cards[i].addEventListener('click', () => {
    let cardDiv = cards[i];
    cardDiv.setAttribute('src', cardObjects[i].url);
  });
}

// for (let i = 0; i < cards.length; i++) {
//     cards[i].addEventListener('click', () => {
//         if (cardsMatched)
//     })}

//   let flipCard = cards[i];
//   cards[i].style.backgroundColor = 'transparent';
//   ;
// }

// for (let i = 0; i < cards.length; i++) {
//   cards[i].addEventListener('click', cardClicked);
// }

// function cardClicked(){
//     let cards.style.backgroundColor = 'transparent'
// }

resetButton.addEventListener('click', resetGameboard);

//const resetGameboard =
