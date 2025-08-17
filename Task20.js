let btn = document.querySelector("button");

function randomColor() {
    return Math.floor(Math.random() * 256);
}

btn.addEventListener("click", () => {
    let color1 = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    let color2 = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
});
