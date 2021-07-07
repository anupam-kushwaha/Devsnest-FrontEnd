let words = ["A", "B", "C", "D", "E", "F", "G", "H"];
words = [...words, ...words];

let moves = 30;
let matches = 0;
let gameActive = true;

for (let i = 1; i <= 16; i++) {
    let card = document.createElement("div");
    card.classList.add("flip-card");

    let inner = document.createElement("div");
    inner.classList.add("flip-inner");

    let front = document.createElement("div");
    front.classList.add("front");

    let back = document.createElement()
}
