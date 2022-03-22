let numero = parseInt(prompt("Digite um número entre 1 e 20: "));
while (isNaN(numero) || numero < 1 || numero > 20) {
  numero = parseInt(prompt("Digite um número entre 1 e 20: "));
}

const lista = document.getElementById("lista");
for (let i = 1; i <= numero; ++i) {
  lista.innerHTML += `<li>${i}</li>`;
}
