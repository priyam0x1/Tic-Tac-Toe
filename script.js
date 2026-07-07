let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");

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

let checkWinner = () => {
  for (pattern of winPattern) {
    console.log(pattern[0], pattern[1], pattern[2]);
    console.log(
      boxes[pattern[0]].innerText,
      boxes[pattern[1]].innerText,
      boxes[pattern[2]].innerText,
    );
  }
};
