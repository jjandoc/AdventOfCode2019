const testSamples = require('../util/testSamples');
const input = require('./input');

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

const processInput = input => {
  const state = input.split(',').map(item => parseInt(item, 10));
  let pos = 0;
  while (state[pos] !== 99 && pos < state.length) {
    const a = state[state[pos + 1]];
    const b = state[state[pos + 2]];
    let result;
    switch (state[pos]) {
      case 1:
        result = add(a, b);
        break;
      case 2:
        result = multiply(a, b);
        break;
      default:
        result = null;
        break;
    }
    if (result !== null) {
      state[state[pos + 3]] = result;
    }
    pos += 4;
  }
  return state;
}

const samples = ['1,0,0,0,99', '2,3,0,3,99', '2,4,4,5,99,0', '1,1,1,4,99,5,6,0,99'];
const results = ['2,0,0,0,99', '2,3,0,6,99', '2,4,4,5,99,9801', '30,1,1,4,2,5,6,0,99'];

console.log('a tests', testSamples((val) => processInput(val).join(','), samples, results));

const getFinalInput = (val) => {
  const final = val.split(',');
  final[1] = 12;
  final[2] = 2;
  return final.join(',');
}

const finalInput = getFinalInput(input);

console.log('a result', processInput(finalInput)[0]);

exports.program = processInput;