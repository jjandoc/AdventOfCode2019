const input = require('./input');

const getFuelRequirements = (mass) => (Math.floor(mass / 3)) - 2;

const getCompleteFuel = (mass) => {
  let total = 0;
  let newAddition = getFuelRequirements(mass);
  do {
    total += newAddition;
    newAddition = getFuelRequirements(newAddition);
  } while (newAddition > 0);
  return total;
}

const getTotalFuel = (masses) => masses.reduce((sum, mass) => sum + getCompleteFuel(mass), 0);

console.log(getTotalFuel(input));
