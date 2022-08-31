const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const getAnimalsOlder = species.find((nomeResult) => nomeResult.name === animal);
  return getAnimalsOlder.residents.every((idadeResult) => idadeResult.age >= age);
}

module.exports = getAnimalsOlderThan;
