const colors = require('colors');
const romanToInt = s => {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  const romanArray = s.split('');

  romanArray.forEach((romanLetter, pos) => {
    const nextLetter = romanArray[pos + 1];
    if (romanLetter == 'I') {
      if (nextLetter == 'V' || nextLetter == 'X') {
        sum -= values[romanLetter];
      } else {
        sum += values[romanLetter];
      }
    } else if (romanLetter == 'X') {
      if (nextLetter == 'L' || nextLetter == 'C') {
        sum -= values[romanLetter];
      } else {
        sum += values[romanLetter];
      }
    } else if (romanLetter == 'C') {
      if (nextLetter == 'D' || nextLetter == 'M') {
        sum -= values[romanLetter];
      } else {
        sum += values[romanLetter];
      }
    } else {
      sum += values[romanLetter];
    }
  });
  return sum;
};
console.log(`${romanToInt('LVIII')}`.red.bold.underline);
