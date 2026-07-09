let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let newGameBtn = document.getElementById("new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.getElementById("msg");

let turn0 = true;

let winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  trun0 = true;
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
  msgContainer.classList.add("hide");
};

resetBtn.addEventListener("click", () => {
  resetGame();
});

newGameBtn.addEventListener("click", resetGame);

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was Clicked");
    if (turn0) {
      box.innerText = "X";
      turn0 = false;
    } else {
      box.innerText = "O";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

let showWinner = (winner) => {
  msg.innerText = `Congratulatins, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
};

let checkWinner = () => {
  for (pattern of winPattern) {
    let pos1Value = boxes[pattern[0]].innerText;
    let pos2Value = boxes[pattern[1]].innerText;
    let pos3Value = boxes[pattern[2]].innerText;

    if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
      if (pos1Value == pos2Value && pos2Value == pos3Value) {
        console.log(`Winner ${pos1Value}`);
        showWinner(pos1Value);
        boxes.forEach((box) => {
          box.disabled = true;
        });
      }
    }
  }
};
