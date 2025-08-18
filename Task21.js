let btn = document.querySelector("button");
let nameDisplay = document.querySelector("#name");

let names = ["Aman", "Rohit", "Priya", "Ankit", "Neha", "Vikas"];

btn.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * names.length);
    nameDisplay.innerText = names[randomIndex];
});
