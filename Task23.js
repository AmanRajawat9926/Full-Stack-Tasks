let btn = document.querySelector("button");
let fact = document.querySelector("#fact");

let facts = [
    "A group of flamingos is called a flamboyance.",
    "Octopuses have three hearts.",
    "Sharks existed before trees.",
    "Elephants can’t jump.",
    "Sloths can hold their breath longer than dolphins."
];

btn.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * facts.length);
    fact.innerText = facts[randomIndex];
});
