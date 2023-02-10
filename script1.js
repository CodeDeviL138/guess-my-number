'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// Check! button operation

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //if no input
  if (!guess) {
    displayMessage('No Number, Please enter a number to play!');
    // document.querySelector('.message').textContent =
    //   'No Number, Please enter a number to play!';
  }
  //when player wins
  else if (guess === secretNumber) {
    displayMessage('Correct Number !!! YOU WON');
    // document.querySelector('.message').textContent =
    //   'Correct Number !!! YOU WON';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //for highscore calculation
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? displayMessage('too high')
        : displayMessage('too low');

      //   guess > secretNumber
      //     ? (document.querySelector('.message').textContent = 'too high')
      //     : (document.querySelector('.message').textContent = 'too low');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    displayMessage('you lost the game!');
    // document.querySelector('.message').textContent = 'you lost the game';
    document.querySelector('body').style.backgroundColor = 'rgb(133, 12, 12)';
    document.querySelector('.score').textContent = 0;
  }
});

// Again button operation

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  //secret number regenerate
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  // message display
  //   document.querySelector('.message').textContent = 'start guessing...🤔';
  displayMessage('start guessing...🤔');
  //score reset
  document.querySelector('.score').textContent = score;
  // symbol '?' reset
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  //background color normal
  document.querySelector('body').style.backgroundColor = '#222';
  // ? box size reset
  document.querySelector('.number').style.width = '15rem';
});
