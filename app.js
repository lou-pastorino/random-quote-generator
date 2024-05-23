const apiUrl = "https://api.quotable.io/random/";
const wiseApiUrl = "https://api.quotable.io/random?tags=wisdom";
const famousApiUrl = "https://api.quotable.io/random?tags=famous-quotes";

const generatorButton = document.getElementById("generate");
const tweetButton = document.getElementById("tweet-btn");
const wiseQuoteBtn = document.getElementById("wisdom");
const famousQuoteBtn = document.getElementById("famous");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

getQuote = async (url) => {
  const response = await fetch(url);
  let data = await response.json();
  //   console.log(data);
  quote.innerText = data.content;
  author.innerText = data.author;
};

tweet = () => {
  window.open(
    "https://twitter.com/intent/tweet?text=" + quote.innerText + "---- by " + author.innerText,
    "New Tweet",
    "width=500px, height=500px"
  );
};

getQuote(apiUrl);

generatorButton.addEventListener("click", () => {
  getQuote(apiUrl);
});

tweetButton.addEventListener("click", (query) => {
  tweet();
});

wiseQuoteBtn.addEventListener("click", () => {
  getQuote(wiseApiUrl);
});
famousQuoteBtn.addEventListener("click", () => {
  getQuote(famousApiUrl);
});
