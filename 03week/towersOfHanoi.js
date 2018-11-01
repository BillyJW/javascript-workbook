'use strict';

//if legal move
//  legal if empty block, or if piece moving is less than last number in block
//move piece
//  pop digit from startStack, and push to endStack
//check for win
//  win if array c length == 4
//  after win alert user, and reset game

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece() {
  let stored = [];
  if (startStack == 'a' && endStack == 'b') {
    stacks.a.pop();
    // stacks.b.push();
  }
  console.log(stacks);
  console.log(stored);
}

function isLegal() {
  if()
// legal move empty stack
// legal move last element in array is more than element moving
}

function checkForWin() {
  if(stacks.c.length == 4){
    prompt('User wins')
  }
  resetGame();
}

const resetGame=() => {
  return { 
   stacks: {
     a: [4, 3, 2, 1],
     b: [],
     c: []
   }
 }
 getPrompt();
}

function towersOfHanoi(startStack, endStack) {
  // Your code here

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}


// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
