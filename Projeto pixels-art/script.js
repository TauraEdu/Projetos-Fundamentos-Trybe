// cria 5 elementos 
// criar colunas
const board = document.getElementById('pixel-board');
function columm() {
  for (let i = 0; i < 5; i += 1) {
    const newsection = document.createElement('section');
    newsection.classList.add('coluna');
    board.appendChild(newsection);
// criar linhas
    for (let y = 0; y < 5; y += 1) {
      const newbox = document.createElement('div');
      newbox.classList.add('pixel');
      newsection.appendChild(newbox);

      newbox.addEventListener('click', pegarcor);
    }
  }
}
columm();

// Pegar a cor da Palleta item 7
function pegarcor(event) {
  const newcolor = document.querySelector('.selected');
  const clicevent = event.target;
  const select = newcolor.style.backgroundColor;
  clicevent.style.backgroundColor = select;
}
// alterar cor da palleta
const colorBlack = document.getElementById('color-black');
const colorRed = document.getElementById('color-red');
const colorBlue = document.getElementById('color-blue');
const colorGreen = document.getElementById('color-green');

function selected(event) {
  const newselected = document.querySelector('.selected');
  newselected.classList.remove('selected');
  event.target.classList.add('selected');
}

colorBlack.addEventListener('click', selected);
colorRed.addEventListener('click', selected);
colorBlue.addEventListener('click', selected);
colorGreen.addEventListener('click', selected);

// gerador de cores aleatorio item 12
function newRGB() {
  let R = Math.random() * 255;
  let G = Math.random() * 255;
  let B = Math.random() * 255;
  return `rgb(${R}, ${G}, ${B})`;
}
// cor fixa preta
document.getElementById('color-black').style.backgroundColor = 'black';
document.getElementById('color-red').style.backgroundColor = newRGB();
document.getElementById('color-blue').style.backgroundColor = newRGB();
document.getElementById('color-green').style.backgroundColor = newRGB( );

//função botão clear-board
function clearBoard() {
  const clearP = document.querySelectorAll('.pixel');
  for (let i = 0; i < clearP.length; i += 1) {
    clearP[i].style.backgroundColor = 'white';
  }
}
function buttonClear() {
  const buttonClear = document.querySelector('#clear-board');
  buttonClear.addEventListener('click', clearBoard);
}
buttonClear();