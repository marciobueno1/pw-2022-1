const inputIdade = document.getElementById("inputIdade");
const inputAnoNasc = document.getElementById("inputAnoNasc");
const btCalcular = document.getElementById("btCalcular");

function calcular() {
  const idade = parseInt(inputIdade.value.trim());
  const anoNasc = 2022 - idade;
  inputAnoNasc.value = anoNasc;
}

btCalcular.onclick = calcular;
