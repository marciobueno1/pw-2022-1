Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  "kYQNPbPGEz0dp7siKcwdDeYBIdyANQvbJ8Qtf9V5", // This is your Application ID
  "yV80N7m3ZKZmTgdMGlVDYJaEteabaXaUXeaT2VW9" // This is your Javascript key
);

let pessoas = [];
const lista = document.getElementById("lista");

function gerarLista() {
  lista.innerHTML = "";
  for (let i = 0; i < pessoas.length; ++i) {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const txt = document.createTextNode(
      `Nome: ${pessoas[i].nome} - Idade: ${pessoas[i].idade}`
    );
    const btExibir = document.createElement("button");
    const btTxt = document.createTextNode("Exibir");
    btExibir.appendChild(btTxt);
    btExibir.onclick = () => handleClickBtExibir(pessoas[i]);
    const img = document.createElement("img");
    img.src = pessoas[i].foto;
    img.width = 150;
    img.height = 150;
    h3.appendChild(txt);
    div.appendChild(h3);
    div.appendChild(btExibir);
    div.appendChild(img);
    lista.appendChild(div);
  }
}

const fetchPessoas = async () => {
  const Pessoa = Parse.Object.extend("Pessoa");
  const query = new Parse.Query(Pessoa);
  try {
    const results = await query.find();
    pessoas = [];
    for (const object of results) {
      const nome = object.get("nome");
      const idade = object.get("idade");
      pessoas.push({ nome, idade });
    }
    gerarLista();
  } catch (error) {
    console.error("Error while fetching Pessoa", error);
  }
};

const fetchPessoas2 = () => {
  const Pessoa = Parse.Object.extend("Pessoa");
  const query = new Parse.Query(Pessoa);
  query
    .find()
    .then((results) => {
      pessoas = [];
      for (const object of results) {
        const nome = object.get("nome");
        const idade = object.get("idade");
        const foto = object.get("foto").url();
        pessoas.push({ nome, idade, foto });
      }
      gerarLista();
    })
    .catch((error) => {
      console.error("Error while fetching Pessoa", error);
    });
};

const handleClickBtExibir = (obj) => {
  console.log(JSON.stringify(obj));
  alert(JSON.stringify(obj));
};

fetchPessoas2();
