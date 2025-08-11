let btn = document.querySelector("button");
let quote = document.querySelector("#quote");

let quotes = [
    "Believe you can and you're halfway there.",
    "Push yourself, because no one else will do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success is not for the lazy."
];

btn.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    quote.innerText = `"${quotes[randomIndex]}"`;
});
