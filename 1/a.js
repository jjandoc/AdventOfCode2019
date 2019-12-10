const input = require('./input');

/**
 * Fuel required to launch a given module is based on its mass. Specifically, to 
 * find the fuel required for a module, take its mass, divide by three, round 
 * down,  and subtract 2.
 * 
 * What is the sum of the fuel requirements for all of the modules on your 
 * spacecraft?
 */

const getFuelRequirements = (mass) => (Math.floor(mass / 3)) - 2;

const getTotalFuel = (masses) => masses.reduce((sum, mass) => sum + getFuelRequirements(mass), 0);

console.log(getTotalFuel(input));