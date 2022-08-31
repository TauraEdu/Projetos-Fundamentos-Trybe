// Desafio 1
function compareTrue(parametro1, parametro2) {
  return (parametro1 && parametro2); 
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(string) {
  return array[array.length - 1] + ", " + array[0];
  
}

// Desafio 5
function footballPoints(win, ties) {
  return (3 * win) + ties;
}

// Desafio 6
function highestCount(conta) {
  let maximo = Math.max(...conta);
  let fulllist = [];
  for (let key in conta) {
    if(maximo === conta[key]) {
      fulllist += 1;
}
  }
  return fulllist.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  if (distanciaCat1 == distanciaCat2) {
    return ('os gatos trombam e o rato foge');
  }
  if (distanciaCat1 < distanciaCat2) {
    return ('cat1');
  }
  if (distanciaCat2 < distanciaCat1) {
    return ('cat2');
  }
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let value of array) {
    if (value % 5 !== 0 && value % 3 !== 0) {
      newArray.push('bug!');
    } else if (value % 3 === 0 && value % 5 == 0) {
      newArray.push('fizzBuzz');
    } else if (value % 3 === 0) {
      newArray.push('fizz');
    } else {
      newArray.push('buzz');
    }
  }
  return newArray;
}
// Desafio 9
function encode(string) {
  let newString = string.split('');

  for (let index = 0; index < newString.length; index += 1) {
    if (newString[index] === 'a') {
      newString[index] = '1';
    }
    else if (newString[index] === 'e') {
      newString[index] = '2';
    }
    else if (newString[index] === 'i') {
      newString[index] = '3';
    }
    else if (newString[index] === 'o') {
      newString[index] = '4';
    }
    else if (newString[index] === 'u') {
      newString[index] = '5';
    }
  }
  return (newString.join(''));
}

function decode(string) {
  let newString = string.split('');

  for (index = 0; index < newString.length; index += 1) {

    if (newString[index] === '1') {
      newString[index] = 'a';
    }
    else if (newString[index] === '2') {
      newString[index] = 'e';
    }
    else if (newString[index] === '3') {
      newString[index] = 'i';
    }
    else if (newString[index] === '4') {
      newString[index] = 'o';
    }
    else if (newString[index] === '5') {
      newString[index] = 'u';
    }

  }
  return newString.join('');
}


// Desafio 10
function techList(arrayNames, name) {
  // seu código aqui
  let arrayObj = [];
  if (arrayNames.length !== 0) {
    for (let index = 0; index < arrayNames.length; index++) {
      arrayObj[index] = {};
      arrayObj[index].tech = arrayNames.sort()[index];
      arrayObj[index].name = name;
    }
    return arrayObj;
  }
  return "Vazio!";
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
