const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const resultResp = employees.find((employeesById) => employeesById.id === id).responsibleFor;
  const result = species.find(({ id: idSpecies }) => resultResp
    .includes(idSpecies)).residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(result);
}

module.exports = getOldestFromFirstSpecies;
