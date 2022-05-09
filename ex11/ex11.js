Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  "kYQNPbPGEz0dp7siKcwdDeYBIdyANQvbJ8Qtf9V5", // This is your Application ID
  "yV80N7m3ZKZmTgdMGlVDYJaEteabaXaUXeaT2VW9" // This is your Javascript key
);

const lista = document.getElementById("lista");

function gerarLista(pessoas) {
  lista.innerHTML = "";
  for (let i = 0; i < pessoas.length; ++i) {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const txt = document.createTextNode(
      `Nome: ${pessoas[i].get("nome")} - Idade: ${pessoas[i].get("idade")}`
    );
    const btExibir = document.createElement("button");
    const btTxt = document.createTextNode("Exibir");
    btExibir.appendChild(btTxt);
    btExibir.onclick = () => handleClickBtExibir(pessoas[i]);
    const img = document.createElement("img");
    img.src = pessoas[i].get("foto").url();
    img.width = 150;
    img.height = 150;
    h3.appendChild(txt);
    div.appendChild(h3);
    div.appendChild(btExibir);
    div.appendChild(img);
    lista.appendChild(div);
  }
}

const fetchPessoasBack4App = () => {
  const Pessoa = Parse.Object.extend("Pessoa");
  const query = new Parse.Query(Pessoa);
  query
    .find()
    .then((results) => {
      gerarLista(results);
    })
    .catch((error) => {
      console.error("Error while fetching Pessoa", error);
    });
};

const handleClickBtExibir = (obj) => {
  console.log(obj.toJSON());
  alert(obj.toJSON());
  console.log("id", obj.id);
  console.log("createdAt", obj.createdAt);
  console.log("updatedAt", obj.updatedAt);
  console.log("nome", obj.nome);
  console.log('get("nome")', obj.get("nome"));
};

fetchPessoasBack4App();
