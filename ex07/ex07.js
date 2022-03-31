let numeros = [];

const lista = document.getElementById("lista");
const inputNum = document.getElementById("inputNum");
const btInserirInicio = document.getElementById("btInserirInicio");
const btInserirFinal = document.getElementById("btInserirFinal");
const btLimpar = document.getElementById("btLimpar");

function exibirLista() {
  lista.innerHTML = "";
  for (let i = 0; i < numeros.length; ++i) {
    lista.innerHTML += `<li>${numeros[i]}</li>`;
  }
}

function inserirInicio() {
  const num = parseInt(inputNum.value);
  if (!isNaN(num)) {
    numeros.unshift(num);
    exibirLista();
  }
  inputNum.value = "";
  inputNum.focus();
}

function inserirFinal() {
  const num = parseInt(inputNum.value);
  if (!isNaN(num)) {
    numeros.push(num);
    exibirLista();
  }
  inputNum.value = "";
  inputNum.focus();
}

btInserirInicio.onclick = inserirInicio;
btInserirFinal.onclick = inserirFinal;
