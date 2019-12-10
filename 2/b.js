const program = require('./a').program;
const input = require('./input');

const getResult = (noun, verb, base) => {
  const items = base.split(',');
  items[1] = noun;
  items[2] = verb;
  return program(items.join(','))[0];
}

console.log('b test', getResult(12, 2, input));

const findInputs = (desired) => {
  let noun = 0;
  let verb = 0;
  while (noun < 100) {
    if (desired === getResult(noun, verb, input)) {
      return 100 * noun + verb;
    }
    if (verb < 99) {
      verb += 1;
    } else {
      noun += 1;
      verb = 0;
    }
  }
  return 'no solution found';
}

console.log(findInputs(19690720));