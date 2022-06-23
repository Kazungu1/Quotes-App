const text = document.querySelector(".quote");
const author = document.querySelector(".author-name");
const nextBtn = document.querySelector(".next-quote");
const tweetButton = document.querySelector(".twitter-share-button");
const copyButton=document.querySelector(".fa-copy");
const getQuote = async () => {
  const res = await fetch("https://type.fit/api/quotes");
  const quotes = await res.json();
  const num = Math.floor(Math.random() * quotes.length);
  const item = quotes[num];
  const quote = item.text;
  const authorName = item.author;
  text.innerText = quote;
  author.innerText = authorName;
  tweetButton.href = `https://twitter.com/intent/tweet?text=${quote}-${authorName}`;

  //   console.log(item);
};
nextBtn.addEventListener("click", getQuote);
copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(text.innerText);
});
getQuote();
