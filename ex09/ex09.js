const btFetchCat = document.getElementById("btFetchCat");
const btFetchDog = document.getElementById("btFetchDog");
const imgAleagtoria = document.getElementById("imgAleagtoria");

const fetchRandomDogImage = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("data", data);
      imgAleagtoria.src = data.message;
    });
};

const fetchRandomCatImage = () => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("data", data);
      imgAleagtoria.src = data[0].url;
    });
};

btFetchCat.onclick = fetchRandomCatImage;
btFetchDog.onclick = fetchRandomDogImage;
