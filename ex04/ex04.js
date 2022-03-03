const lista = document.getElementById("lista");
const inputNome = document.getElementById("inputNome");
const btInserir = document.getElementById("btInserir");
const btLimpar = document.getElementById("btLimpar");

function inserir() {
  const nome = inputNome.value.trim();
  if (nome) {
    lista.innerHTML += `<li>${nome}</li>`;
    inputNome.value = "";
  }
  inputNome.focus();
}

function limpar() {
  lista.innerHTML = "";
  inputNome.value = "";
  inputNome.focus();
}

function capturarEnter(event) {
  if (event.keyCode === 13) {
    btInserir.click();
  }
}

btInserir.onclick = inserir;
btLimpar.onclick = limpar;
inputNome.onkeyup = capturarEnter;
