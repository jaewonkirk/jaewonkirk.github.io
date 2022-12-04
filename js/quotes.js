const quotes = [
    {
        quote: "May the force be with you.",
        author: "Star Wars, 1977"
    },
    {
        quote: "There's no place like home.",
        author: "The Wizard of Oz, 1939"
    },
    {
        quote: "I'm the king of the world!",
        author: "Titanic, 1997"
    },
    {
        quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
        author: "Dead Poets Society, 1989"
    },
    {
        quote: "Elementary, my dear Watson.",
        author: "The Adventures of Sherlock Holmes, 1939"
    },
    {
        quote: "It's alive! It's alive!",
        author: "Frankenstein, 1931"
    },
    {
        quote: "Roads? Where we're going we don't need roads.",
        author: "Back to the Future, 1985"
    },
    {
        quote: "I'll be back",
        author: "The Terminator, 1984"
    },
    {
        quote: "You're gonna need a bigger boat.",
        author: "Jaws, 1975"
    },
    {
        quote: "Houston, we have a problem.",
        author: "Apollo 13, 1995"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const idx = Math.floor(Math.random()*quotes.length);

quote.innerText = quotes[idx].quote;
author.innerText = quotes[idx].author;