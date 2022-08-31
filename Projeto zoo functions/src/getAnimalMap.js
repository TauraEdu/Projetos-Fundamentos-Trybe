const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function filterSpecie(resSpecie, sex, sorted) {
  let arr;
  const { residents } = resSpecie;

  if (sex) {
    arr = residents.filter((animal) => animal.sex === sex)
      .map((animal) => animal.name);
  } else {
    arr = residents.map((animal) => animal.name);
  }

  if (sorted) {
    arr.sort();
  }

  return arr;
}

function getAnimalMap(options = {}) {
  const { includeNames, sorted, sex } = options;
  const animalsByLocation = species
    .reduce((acc, objspecie) => ({ ...acc, [objspecie.location]: [] }), {});

  if (!includeNames) {
    species.forEach((objspecie) => animalsByLocation[objspecie.location].push(objspecie.name));
    return animalsByLocation;
  }

  species.forEach((objspecie) => {
    const nomedeanimais = filterSpecie(objspecie, sex, sorted);
    animalsByLocation[objspecie.location].push({ [objspecie.name]: nomedeanimais });
  });

  return animalsByLocation;
}

module.exports = getAnimalMap;
