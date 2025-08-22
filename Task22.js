let btn = document.querySelector("button");
let rgbText = document.querySelector("#rgb");
let hexText = document.querySelector("#hex");
let box = document.querySelector("#colorBox");

function rgbToHex(r, g, b) {
    return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("");
}

btn.addEventListener("click", () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let hex = rgbToHex(r, g, b);
    rgbText.innerText = `RGB(${r}, ${g}, ${b})`;
    hexText.innerText = hex;
    box.style.backgroundColor = hex;
});
