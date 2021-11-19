//variables
const cards = [...document.querySelectorAll('.backcard')];
const display = document.querySelector('.display');
const reset = document.querySelector('#resetButton');

const cardBack =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2017%2F03%2F28%2F434817-raccoons-wildlife-animals.jpg&f=1&nofb=1';

//const flippedCards =
let flipOne = {
  name: '',
  index: ''
};
let flipTwo = {
  name: '',
  index: ''
};
let cardsMatched = false;
//let gameOver = false;

const cardObjects = [
  {
    name: 'schoolFish',
    card: 0,
    url: "http://bwvp.ecolinc.vic.edu.au/sites/default/files/species/Verreaux's_Frog_01_0.jpg"
  },
  {
    name: 'schoolFish',
    card: 1,
    url: "http://bwvp.ecolinc.vic.edu.au/sites/default/files/species/Verreaux's_Frog_01_0.jpg"
  },
  {
    name: 'blue frog1',
    card: 2,
    url: 'https://cdn.shopify.com/s/files/1/0341/4893/products/azureus_1024x1024.jpg?v=1576277674'
  },
  {
    name: 'blue frog1',
    card: 3,
    url: 'https://cdn.shopify.com/s/files/1/0341/4893/products/azureus_1024x1024.jpg?v=1576277674'
  }
];

// if (cardFlipped && cardObjects[i].url === cardObjects[i].url) {
//   gameOver = true;
// }

//console.log(cardObjects[1].url);

//event listeners
//flip cards
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', () => {
    let cardDiv = cards[i];
    cardDiv.setAttribute('src', cardObjects[i].url);
    //below is assigning value of card names to flipped cards
    if (flipOne.name === '') {
      flipOne.name = cardObjects[i].name;
      flipOne.index = i;
    } else {
      flipTwo.name = cardObjects[i].name;
      flipTwo.index = i;
      setTimeout(compareCards, 1500);
    }
  });
}

function compareCards() {
  if (flipOne.name === flipTwo.name) {
    cardsMatched = true;
    setTimeout(() => {
      console.log('try again!');
    }, 2000);
  } else {
    cardsMatched = false;
  }
  console.log(cardsMatched);
  resetBoard();
}

function resetBoard() {
  if (cardsMatched === true) {
    //other winning stuff display etc
    display.innerText = 'well done!';
    flipOne.name = '';
    flipOne.index = '';
    flipTwo.name = '';
    flipTwo.index = '';
  } else {
    display.innerText = 'try again';
    incorrectPair();
    flipOne.name = '';
    flipOne.index = '';
    flipTwo.name = '';
    flipTwo.index = '';
  }
}

function incorrectPair() {
  cards[flipOne.index].setAttribute('src', cardBack);
  cards[flipTwo.index].setAttribute('src', cardBack);
}

// for (let i = 0; i < cards.length; i++) {
//     cards[i].addEventListener('click', () => {
//         if (cardsMatched)
//     })}

//resetButton.addEventListener('click', resetGameboard);

//const resetGameboard =
