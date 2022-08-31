const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((accmulador, { name, residents }) =>
      ({ ...accmulador, [name]: residents.length }), {});
  }
  if (animal.sex) {
    return species.find((totalAnimal) => totalAnimal.name === animal.specie)
      .residents.filter(({ sex }) => sex === animal.sex).length;
  }
  return species.find((totalAnimal) => totalAnimal.name === animal.specie).residents.length;
}

module.exports = countAnimals;
