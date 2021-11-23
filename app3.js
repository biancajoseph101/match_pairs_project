const cards = [...document.querySelectorAll('.backcard')];
const display = document.querySelector('.display');

const restartButton = (document.querySelector('#restartButton').onclick =
  function () {
    location.href =
      'file:///Users/bianca/ga_seir/projects/match_pairs_project/index3.html';
  });

const homePageButton = (document.querySelector('#homePageButton').onclick =
  function () {
    location.href =
      'file:///Users/bianca/ga_seir/projects/match_pairs_project/index.html';
  });

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
    name: 'giraffesTower',
    card: 0,
    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fthe-eiffel-tower-shot-from-below-against-a-white-background-vector-id465832390%3Fk%3D6%26m%3D465832390%26s%3D170667a%26w%3D0%26h%3DPXgErNKEOUUqGBZV1jo-IglgUmpztjw7Ey8ebFKH0Yo%3D&f=1&nofb=1'
  },
  {
    name: 'clamsBed',
    card: 1,
    url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-KNmmuoN8f0w%2FU5SSDnOvGOI%2FAAAAAAAADNk%2Fdm6YiLuPzoA%2Fs1600%2Fclams-.jpg&f=1&nofb=1'
  },
  {
    name: 'rhinosCrash',
    card: 2,
    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fgroup-rhino-20654191.jpg&f=1&nofb=1'
  },
  {
    name: 'clamsBed',
    card: 3,
    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F264%2F948%2Foriginal%2Fwood-bed-with-green-blanket-vector.jpg&f=1&nofb=1'
  },
  {
    name: 'ferretsBusiness',
    card: 4,
    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP._PRqj6xExWwkyJdzmTLzpAHaE8%26pid%3DApi&f=1'
  },
  {
    name: 'rhinosCrash',
    card: 5,
    url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Faffordableautohopkins.com%2Fwp-content%2Fuploads%2F2015%2F02%2F35125047_l.jpg&f=1&nofb=1'
  },
  {
    name: 'ferretsBusiness',
    card: 6,
    url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fdata_images%2F575324.jpg&f=1&nofb=1'
  },
  {
    name: 'giraffesTower',
    card: 7,
    url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.dailymail.co.uk%2Fi%2Fpix%2F2017%2F07%2F17%2F16%2F4269CC3200000578-4704136-image-a-9_1500305995042.jpg&f=1&nofb=1'
  }
];

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', () => cardListener(i));
}

function addClicks() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove('noClick');
  }
}

function cardListener(i) {
  if (cardsClicked >= 2) {
    return;
  }
  cards[i].setAttribute('src', cardObjects[i].url);
  cardsClicked += 1;
  switch (cardsClicked) {
    case 1:
      flipOne.name = cardObjects[i].name;
      flipOne.index = i;
      break;
    case 2:
      flipTwo.name = cardObjects[i].name;
      flipTwo.index = i;
      removeClicks();
      setTimeout(compareCards, 1740);
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
    display.innerText = '';
    display.innerText = 'NICE JOB!';
    winnerMessageCount++;
    checkEndGame();
  } else if (cardsMatched === false) {
    display.innerText = '';
    display.innerText = 'BETTER LUCK NEXT TIME...';
    incorrectPair();
  }
  flipOne.name = '';
  flipOne.index = '';
  flipTwo.name = '';
  flipTwo.index = '';
  cardsClicked = 0;
  if (gameOver === false) {
    addClicks();
  }
}

function checkEndGame() {
  if (winnerMessageCount === 4) {
    display.innerText =
      'CONGRATS ON COMPLETING THE HARDEST LEVEL! \n ANSWERS: TOWER OF GIRAFFES, BED OF CLAMS, CRASH OF RHINOS, BUSINESS OF FERRETS';
    gameOver = true;
    removeClicks();
  }
}
