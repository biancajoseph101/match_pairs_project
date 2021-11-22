//variables
const cards = [...document.querySelectorAll('.backcard')];
const display = document.querySelector('.display');

const restartButton = (document.querySelector('#restartButton').onclick =
  function () {
    location.href =
      'file:///Users/bianca/ga_seir/projects/match_pairs_project/index.html';
  });

const nextLevelButton = (document.querySelector('#nextLevelButton').onclick =
  function () {
    location.href =
      'file:///Users/bianca/ga_seir/projects/match_pairs_project/index2.html';
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
    name: 'fishSchool',
    card: 0,
    url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-8aNjprT77ok%2FT3R9cs7niMI%2FAAAAAAAADQw%2F7Wx7srfgZkM%2Fs1600%2Fgroup-of-fish-underwater-01.gif&f=1&nofb=1'
  },
  {
    name: 'frogArmy',
    card: 1,
    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F547%2F757%2Foriginal%2Fmilitary-people-vector.jpg&f=1&nofb=1'
  },
  {
    name: 'lionPride',
    card: 2,
    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.usgo.org%2Fnews%2Fwp-content%2Fuploads%2F2013%2F11%2F39.-Three-male-Lions-walking-closely-together-Masai-Mara-Kenya.jpg&f=1&nofb=1'
  },
  {
    name: 'fishSchool',
    card: 3,
    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.drodd.com%2Fimages10%2Fschool-clipart20.jpg&f=1&nofb=1'
  },
  {
    name: 'puppiesLitter',
    card: 4,
    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdogsfordisabled.ie%2Fdfd%2Fwp-content%2Fuploads%2F2016%2F01%2Fpuppy-group-retrievers-768x549.jpg&f=1&nofb=1'
  },
  {
    name: 'puppiesLitter',
    card: 5,
    url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fnewhp%2F121-1214141_litter-clipart-doing-thing-littering-clipart-png.png&f=1&nofb=1'
  },
  {
    name: 'frogArmy',
    card: 6,
    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F04%2F33%2F13%2F0433137689a986445228443ce0c714dd.jpg&f=1&nofb=1'
  },
  {
    name: 'lionPride',
    card: 7,
    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fpride-month-rainbow-flag-symbol-pride-month-event-celebration-on-vector-id1150848503%3Fk%3D6%26m%3D1150848503%26s%3D170667a%26w%3D0%26h%3DEti4l9YLmIwOaJPZqe_uBkZYcYfAT2y-fNGZYcmbwSE%3D&f=1&nofb=1'
  }
];

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', () => cardListener(i));
}

//event listeners

function addClicks() {
  console.log('add clix');
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
      flipOne.name = cardObjects[i].name;
      flipOne.index = i;
      break;
    case 2:
      flipTwo.name = cardObjects[i].name;
      flipTwo.index = i;
      removeClicks();
      setTimeout(compareCards, 1800);
      break;
    default:
  }
}

function removeClicks() {
  console.log('removing clix');
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
  console.log(winnerMessageCount);
  if (winnerMessageCount === 4) {
    display.innerText =
      'CONGRATULATIONS YOU WON! PLAY AGAIN OR GO TO LEVEL TWO.';
    gameOver = true;
    removeClicks();
  }
}

//nextLevelButton.addEventListener('click', newLevel);
//restartButton.addEventListener('click', resetBoard);
