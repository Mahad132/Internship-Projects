let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector("#msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
const WinPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "0";
        } else {
            box.innerText = "X";
        }
        box.disabled = true;
        turn0 = !turn0;
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of WinPattern) {
        let [a, b, c] = pattern;
        if (boxes[a].innerText && boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText) {
            showWinner(boxes[a].innerText);
            return;
        }
    }
    if ([...boxes].every(box => box.innerText !== "")) {
        showWinner("None, it's a tie");
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    boxes.forEach(box => box.disabled = true);
};

const resetGame = () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    msgContainer.classList.add("hide");
    turn0 = true;
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
