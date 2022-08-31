const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

const getSpecies = (employee) => employee.responsibleFor.map((animal) => species
  .find((resultSpecie) => resultSpecie.id === animal).name);
const getLocation = (employee) => employee.responsibleFor.map((animal) => species
  .find((resultlocal) => resultlocal.id === animal).location);

const singleEmployee = (listemployee) => ({
  id: listemployee.id,
  fullName: `${listemployee.firstName} ${listemployee.lastName}`,
  species: getSpecies(listemployee),
  locations: getLocation(listemployee),
});

// Sem parâmetros, retorna uma lista com a cobertura de todas as pessoas colaboradoras;

function totalEmployees() {
  return employees.map((totalEmp) => ({
    id: totalEmp.id,
    fullName: `${totalEmp.firstName} ${totalEmp.lastName}`,
    species: getSpecies(totalEmp),
    locations: getLocation(totalEmp),
  }));
}

// Caso não haja nenhuma pessoa com o name ou id especificados deverá ser lançado um error.

const getEmployeesCoverage = (idName) => {
  if (!idName) {
    return totalEmployees();
  }
  const { name, id } = idName;
  const resultIdName = employees.find((employee) =>
    employee.firstName === name || employee
      .lastName === name || employee.id === id);

  if (!resultIdName) {
    throw new Error('Informações inválidas');
  }
  return singleEmployee(resultIdName);
};

module.exports = getEmployeesCoverage;
