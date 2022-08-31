const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants
    .reduce((acc, { age }) => {
      if (age < 18) {
        acc.child += 1;
      } else if (age >= 18 && age < 50) {
        acc.adult += 1;
      } else {
        acc.senior += 1;
      }
      return acc;
    }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (typeof entrants === 'undefined' || Object.values(entrants).length === 0) {
    return 0;
  }
  const conta = countEntrants(entrants);
  return Object.keys(conta)
    .reduce(((acc, curr) => acc + conta[curr] * prices[curr]), 0);
}

module.exports = { calculateEntry, countEntrants };
