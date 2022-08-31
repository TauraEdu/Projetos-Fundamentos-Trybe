const loginBtn = document.getElementById('botao-login');
const cBox = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

function loginButton() {
  const userName = document.getElementById('login').value;
  const passWord = document.getElementById('password').value;
  if (userName === 'tryber@teste.com' && passWord === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginBtn.addEventListener('click', loginButton);

function agreementCheck() {
  if (cBox.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

cBox.addEventListener('click', agreementCheck);

const contador = document.getElementById('counter');
const textArea = document.getElementById('textarea');
textArea.addEventListener('keyup', () => {
  const areaText = textArea.maxLength;
  const cont = textArea.value.length;
  contador.innerText = areaText - cont;
});
