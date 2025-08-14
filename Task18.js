let btn = document.querySelector("button");
let emoji = document.querySelector("#emoji");

let emojis = ["😀","😂","😍","😎","🤩","😜","🤔","🥳","😭","😡"];

btn.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * emojis.length);
    emoji.innerText = emojis[randomIndex];
});
