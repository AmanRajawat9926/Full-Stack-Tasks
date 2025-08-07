// This is the logic of Generate color program 

let btn = document.querySelector("button");
let div = document.querySelector("div");
let heading = document.querySelector("h2");
btn.addEventListener("click", getRandomColor);

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);        
    let blue = Math.floor(Math.random() * 256);
    div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    heading.innerHTML = `RGB(${red}, ${green}, ${blue})`;
}