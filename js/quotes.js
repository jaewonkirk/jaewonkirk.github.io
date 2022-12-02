const quotes = [
    {
        quote: "Random Quote 1",
        author: "Author 1"
    },
    {
        quote: "Random Quote 2",
        author: "Author 2"
    },
    {
        quote: "Random Quote 3",
        author: "Author 3"
    },
    {
        quote: "Random Quote 4",
        author: "Author 4"
    },
    {
        quote: "Random Quote 5",
        author: "Author 5"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const idx = Math.floor(Math.random()*quotes.length);

quote.innerText = quotes[idx].quote;
author.innerText = quotes[idx].author;