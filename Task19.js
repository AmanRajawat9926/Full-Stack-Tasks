let btn = document.querySelector("button");
let dice = document.querySelector("#dice");

btn.addEventListener("click", () => {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    dice.src = `dice${randomNum}.png`;
});
