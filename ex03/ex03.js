let salvarDiv;

function alterarTitulo() {
  const elemTitulo = document.getElementById("titulo");
  elemTitulo.innerText = "Novo título!!!";
}

function alterarDiv() {
  const elemDiv = document.getElementById("minhaDiv");
  salvarDiv = elemDiv.innerHTML;
  elemDiv.innerText = "Novo valor da minha div";
}

function restaurarDiv() {
  if (salvarDiv) {
    const elemDiv = document.getElementById("minhaDiv");
    elemDiv.innerHTML = salvarDiv;
    salvarDiv = undefined;
  } else {
    alert("Nada a restaurar!");
  }
}
