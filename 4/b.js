const isValid = (num) => {
  let lastCheckedDigit;
  let hasDouble = false;
  let increasingDigits = true;
  const nums = `${num}`.split('').map(x => parseInt(x, 10));
  for (let i = 0; i < nums.length; i += 1) {
    if (lastCheckedDigit !== nums[i]) {
      lastCheckedDigit = nums[i];
      if (lastCheckedDigit === nums[i + 1] 
          && lastCheckedDigit !== nums[i + 2]) {
        hasDouble = true;
      }
    }
    if (lastCheckedDigit > nums[i + 1]) {
      increasingDigits = false;
      break;
    }
  }
  return hasDouble && increasingDigits;
}

console.log(isValid(112233));
console.log(isValid(123444));
console.log(isValid(111122));

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
