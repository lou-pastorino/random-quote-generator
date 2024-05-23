const apiUrl = "https://api.quotable.io/random";

const generatorButton = document.getElementById("generate");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

getQuote = async (url) => {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
  quote.innerText = data.content;
  author.innerText = data.author;
};

getQuote(apiUrl);

generatorButton.addEventListener("click", () => {
  getQuote(apiUrl);
});
