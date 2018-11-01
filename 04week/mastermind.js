'use strict';

//hints
//turn both into an array   .split('')
//loop through guess array for each letter check for corrasponding letter in solution array
//if corrasponding letter is right and right place
//if letter in solution array its right letter wrong place

const showHints=(guess)=>{
  const guessArr = guess.splits('');
  const solutionArr = solution.split('');
  let rightLetterRightPlace = 0;
  let rightLetterWrongPlace = 0;
  guessArr.forEach((item, index)=>{
    // console.log(item, index)
    console.log(letter, 'current', solutionArr[index]);
    const corraspondingLetter = solutionArr[index]
    if(letter == corraspondingLetter) {
      //add to right letter, right place count
      rightLetterRightPlace ++
    }else if(solutionArr.includes(letter)){
      //add to right letter, wrong place
      rightLetterWrongPlace ++
    }
    
  });
  return `${rightLetterRightPlace}-${rightLetterWrongPlace}`;
  console.log(guessArr, SolutionArr)
};

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint() {
  // your code here
}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
