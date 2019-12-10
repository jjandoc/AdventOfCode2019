const isValid = (num) => {
  let hasDouble = false;
  let increasingDigits = true;
  const nums = `${num}`.split('').map(x => parseInt(x, 10));
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === nums[i + 1]) {
      hasDouble = true;
    }
    if (nums[i] > nums[i + 1]) {
      increasingDigits = false;
      break;
    }
  }
  return hasDouble && increasingDigits;
}

console.log(isValid(111111));
console.log(isValid(223450));
console.log(isValid(123789));

const findValidCount = (min, max) => {
  let successes = 0;
  for (let i = min; i <= max; i +=1) {
    if (isValid(i)) {
      successes += 1;
    }
  }
  return successes;
}

console.log(findValidCount(240920, 789857));
