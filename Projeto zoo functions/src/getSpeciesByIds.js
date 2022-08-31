const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const getSpecies = ids.map((animalResult) => species.find((findResult) =>
    findResult.id === animalResult));
  return getSpecies;
}

module.exports = getSpeciesByIds;
