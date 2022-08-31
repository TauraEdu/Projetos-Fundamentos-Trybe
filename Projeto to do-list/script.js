const tarefa = document.getElementById('texto-tarefa');
const lista = document.getElementById('lista-tarefas');
const btCriarTarefa = document.getElementById('criar-tarefa');

// itens 5 e 6//

function addtarefa() {
  const criaTarefa = document.createElement('li');
  criaTarefa.innerText = tarefa.value;
  lista.appendChild(criaTarefa);
  tarefa.value = '';
}
btCriarTarefa.addEventListener('click', addtarefa);

// item 9 //

function letraTachada(event) {
  const tarefa = event.target;
  if (tarefa.className === 'completed') {
    tarefa.removeAttribute('class');
  } else {
    tarefa.className = 'completed';
  }
}
lista.addEventListener('dblclick', letraTachada);

// item 10//
const apagaTudo = document.getElementById('apaga-tudo');
function excluirLista() {
  lista.innerHTML = '';
}
apagaTudo.addEventListener('click', excluirLista);

// item 11//

const removerTarefa = document.getElementById('remover-finalizados');
function removerFinalizados() {
  const elementoFinalizado = document.getElementsByTagName('li');
  for (let i = elementoFinalizado.length - 1; i >= 0; i -= 1) {
    if (elementoFinalizado[i].classList.contains('completed')) {
      elementoFinalizado[i].remove();
    }
  }
}
removerTarefa.addEventListener('click', removerFinalizados);

// item 12//
const salvarTarefa = document.getElementById('salvar-tarefas');
function salvarItensTarefa() {
  localStorage.clear();
  localStorage.setItem('lista', lista.innerHTML);
}
salvarTarefa.addEventListener('click', salvarItensTarefa);
const listaSalva = localStorage.getItem('lista');

if (listaSalva) {
  lista.innerHTML = listaSalva;
}