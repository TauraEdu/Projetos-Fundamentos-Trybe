// Desafio 11
function generatePhoneNumber(arrayPhone) {
  // seu código aqui
  if (arrayPhone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arrayPhone.length; index++) {
    let times = 0;
    for (let i = 0; i < arrayPhone.length; i++) {
      if (arrayPhone[index] === arrayPhone[i]) {
        times++;
      }
      if (arrayPhone[i] < 0 || arrayPhone[index] > 9 || times >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  let phoneNum = '(';
  for (let index = 0; index < arrayPhone.length; index++) {
    if (index === 2) {
      phoneNum += ') ';
    }
    if (index === 7) {
      phoneNum += '-';
    }
    phoneNum += arrayPhone[index];
  }
  return phoneNum;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let difference = lineA - lineB - lineC;
  if (lineC > lineA + lineB && lineC > Math.abs(difference)) {
    return false;
  }
  if (lineB > lineA + lineC && lineB > Math.abs(difference)) {
    return false;
  }
  if (lineA > lineB + lineC && lineA > Math.abs(difference)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(drinks) {
  // seu código aqui
  let drinkNum = drinks.match(/\d+/g);
  let waterNum = 0;
  for (let index = 0; index < drinkNum.length; index++) {
    waterNum += parseInt(drinkNum[index]);
  }
  if (waterNum === 1) {
    return waterNum + ' copo de água';
  }
  return waterNum + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
