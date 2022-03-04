function inserir() {
  const lista = document.getElementById("lista");
  const inputNome = document.getElementById("inputNome");
  const nome = inputNome.value.trim();
  if (nome) {
    lista.innerHTML += `<li>${nome}</li>`;
    inputNome.value = "";
  }
  inputNome.focus();
}

function limpar() {
  const lista = document.getElementById("lista");
  const inputNome = document.getElementById("inputNome");
  lista.innerHTML = "";
  inputNome.value = "";
  inputNome.focus();
}

function capturaEnter(event) {
  if (event.keyCode === 13) {
    document.getElementById("btInserir").click();
  }
}
