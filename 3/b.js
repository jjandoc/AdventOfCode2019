const input = require('./input');
const testSamples = require('../util/testSamples');

const getWireCoords = (str) => {
  const path = str.split(',').map(item => 
    [item.charAt(0), parseInt(item.substring(1), 10)]
  );
  const coords = [[0, 0]];
  path.forEach(item => {
    const [direction, distance] = item;
    if (!distance) return;
    const [x, y] = coords[coords.length - 1];
    for (let i = 1; i <= distance; i += 1) {
      let newCoord;
      switch (direction) {
        case 'U':
          newCoord = [x, y + i];
          break;
        case 'D':
          newCoord = [x, y - i];
          break;
        case 'L':
          newCoord = [x - i, y];
          break;
        case 'R':
          newCoord = [x + i, y];
          break;
        default:
          console.error('bad direction: ', direction)
          return;
      }
      if (newCoord) {
        coords.push(newCoord);
      }
    }
  });
  return coords;
}

const findIntersections = (a, b) => {
  let intersections = [];
  a.forEach((aItem, i) => {
    let j = 0;
    if (i % 10000 === 0) {
      console.log(`${i}/${a.length}`)
    }
    for (j; j < b.length; j += 1) {
      const bItem = b[j];
      if (aItem[0] === bItem[0] && aItem[1] === bItem[1]) {
        intersections.push([bItem, [i, j]]);
        break;
      }
    }
  });
  return intersections
}

const getDistanceToClosestIntersection = intersections => 
  Math.min(...intersections.map(([inter, [x, y]]) => Math.abs(x) + Math.abs(y))
  .filter(result => result));

const getResult = (input) => {
  const wires = input.split('\n');
  const coordsA = getWireCoords(wires[0]);
  const coordsB = getWireCoords(wires[1]);
  const intersections = findIntersections(coordsA, coordsB);
  console.log('intersections', intersections.length);
  return getDistanceToClosestIntersection(intersections);
}

// console.log(getWireCoords('R75,D30,R83,U83,L12,D49,R71,U7,L72'));
// console.log(findIntersections(
//   getWireCoords('R8,U5,L5,D3'),
//   getWireCoords('U7,R6,D4,L4'),
// ));
// const samples = [
// `R8,U5,L5,D3
// U7,R6,D4,L4`,
// `R75,D30,R83,U83,L12,D49,R71,U7,L72
// U62,R66,U55,R34,D71,R55,D58,R83`,
// `R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
// U98,R91,D20,R16,D67,R40,U7,R15,U6,R7`,
// ]
// console.log(testSamples(getResult, samples, [30, 610, 410]));

console.log(getResult(input));