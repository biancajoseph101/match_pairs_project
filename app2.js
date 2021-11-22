//variables
const cards = [...document.querySelectorAll('.backcard')];
const display = document.querySelector('.display');
const firstLevelButton = (document.querySelector('#firstLevelButton').onclick =
  function () {
    location.href =
      'file:///Users/bianca/ga_seir/projects/match_pairs_project/index.html';
  });

const restartButton = (document.querySelector('#restartButton').onclick =
  Init());

let cardsClicked = 0;
let winnerMessageCount = 0;
let flipOne = {
  name: '',
  index: ''
};
let flipTwo = {
  name: '',
  index: ''
};
let cardsMatched = false;
let gameOver = false;
const cardBack =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F218%2F160%2Foriginal%2Fornamental-round-lace-pattern-vector.jpg&f=1&nofb=1';

const cardObjects = [
  {
    name: 'hedgehogsArray',
    card: 0,
    url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.animalfactsencyclopedia.com%2Fimages%2Fhedgehogs.jpg&f=1&nofb=1'
  },
  {
    name: 'crowsMurder',
    card: 1,
    url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipground.com%2Fimages%2Fmurder-clipart-3.jpg&f=1&nofb=1'
  },
  {
    name: 'komodoDragonsBank',
    card: 2,
    url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F1%2FBank-PNG-File.png&f=1&nofb=1'
  },
  {
    name: 'komodoDragonsBank',
    card: 3,
    url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.physorg.com%2Fnewman%2Fgfx%2Fnews%2F2014%2Fagroupofkomo.jpg&f=1&nofb=1'
  },
  {
    name: 'hedgehogsArray',
    card: 4,
    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-9x6DNHTc5DM%2FXv8cVsALnFI%2FAAAAAAAAAM8%2F_2r5nNMCaHMVOLyyu8JzsL__aJCaPYPhwCPcBGAYYCw%2Fs1600%2Farrayinc.jpg&f=1&nofb=1'
  },
  {
    name: 'stingraysFever',
    card: 5,
    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages2.minutemediacdn.com%2Fimage%2Fupload%2Fc_fill%2Cg_auto%2Ch_1248%2Cw_2220%2Fv1555313838%2Fshape%2Fmentalfloss%2Fstingrayshed.png%3Fitok%3DbZRTy2Cj&f=1&nofb=1'
  },
  {
    name: 'crowsMurder',
    card: 6,
    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic01.nyt.com%2Fimages%2F2015%2F10%2F01%2Fscience%2F01ZIMMER%2F01ZIMMER-master1050.jpg&f=1&nofb=1'
  },
  {
    name: 'stingraysFever',
    card: 7,
    url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipartmag.com%2Fimages%2Ffever-clipart-25.jpg&f=1&nofb=1'
  }
];

// if (cardFlipped && cardObjects[i].url === cardObjects[i].url) {
//   gameOver = true;
// }

//console.log(cardObjects[1].url);
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', () => cardListener(i));
}

//event listeners
//flip cards

function addClicks() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove('noClick');
  }
}

function cardListener(i) {
  console.log('eventListener');
  if (cardsClicked >= 2) {
    return;
  }
  cards[i].setAttribute('src', cardObjects[i].url);
  cardsClicked += 1;
  //below is assigning value of card names to flipped cards
  switch (cardsClicked) {
    case 1:
      console.log('card 1 flip');
      flipOne.name = cardObjects[i].name;
      flipOne.index = i;
      break;
    case 2:
      console.log('card 2 flip');
      flipTwo.name = cardObjects[i].name;
      flipTwo.index = i;
      removeClicks();
      setTimeout(compareCards, 1800);
      break;
    default:
  }
}

function removeClicks() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.add('noClick');
  }
}

function compareCards() {
  if (flipOne.name === flipTwo.name) {
    cardsMatched = true;
  } else {
    cardsMatched = false;
  }
  resetBoard();
}

function incorrectPair() {
  cards[flipOne.index].setAttribute('src', cardBack);
  cards[flipTwo.index].setAttribute('src', cardBack);
}

function resetBoard() {
  if (cardsMatched === true) {
    //other winning stuff display etc
    display.innerText = '';
    display.innerText = 'WELL DONE!';
    winnerMessageCount++;
    checkEndGame();
  } else if (cardsMatched === false) {
    display.innerText = '';
    display.innerText = 'HMM..TRY AGAIN';
    incorrectPair();
  }
  flipOne.name = '';
  flipOne.index = '';
  flipTwo.name = '';
  flipTwo.index = '';
  cardsClicked = 0;
  addClicks();
}

console.log(winnerMessageCount);
checkEndGame();

function checkEndGame() {
  if (winnerMessageCount === 4) {
    display.innerText = 'CONGRATULATIONS YOU WON!';
    removeClicks();
    gameOver = true;
  }
}

// if (cards[i] === true) {
//   gameOver = true;
//   display.innerText = 'CONGRATULATIONS YOU WIN!';
// }

// for (let i = 0; i < cards.length; i++) {
//     cards[i].addEventListener('click', () => {
//         if (cardsMatched)
//     })}

function Init() {
  cardsClicked = 0;
  winnerMessageCount = 0;
  flipOne = {
    name: '',
    index: ''
  };
  flipTwo = {
    name: '',
    index: ''
  };
  cardsMatched = false;
  gameOver = false;
  cardBack =
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F218%2F160%2Foriginal%2Fornamental-round-lace-pattern-vector.jpg&f=1&nofb=1';
}

restartButton.addEventListener('click', restartGame());
