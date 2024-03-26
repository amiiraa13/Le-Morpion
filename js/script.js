let table = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let tableContainer = document.querySelector("#table");
let lap = 1;
let gagne = document.querySelector("#gagneContainer");
let gameOver = false;
let seulMode = false;

function setCpuMode(izCpuMode) {
  seulMode = izCpuMode;
}
function seul() {
  if (lap <= 8) {
    let random = randomize(0, 8);
    while (document.querySelectorAll(".cell")[random].textContent != "") {
      random = randomize(0, 8);
    }
    document.querySelectorAll(".cell")[random].click();
  }
}

function affich() {
  tableContainer.innerHTML = "";
  table.forEach((row, index) => {
    let element = document.createElement("div");
    element.classList.add("row");
    tableContainer.appendChild(element);
    row.forEach((cel, indew) => {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      element.appendChild(cell);
      cell.addEventListener(
        "click",
        () => {
          tape(cell, index, indew);
        },
        { once: true }
      );
    });
  });
}

function tape(cell, index, indew) {
  if (gameOver == false) {
    if (lap % 2 == 0) {
      cell.textContent = "O";
      table[index][indew] = "O";
      lap++;
    } else {
      cell.textContent = "X";
      table[index][indew] = "X";
      lap++;
      if (seulMode == true) {
        seul();
      }
    }
    game();
  }
}

function game() {
  for (let i = 0; i < 3; i++) {
    if (
      table[i][0] != "" &&
      table[i][0] == table[i][1] &&
      table[i][1] == table[i][2]
    ) {
      gameOver = true;
      if (table[i][0] == "X") {
        gagne.innerHTML = "Félicitation vous avez gagné ! ";
      } else {
        gagne.innerHTML = "Vous avez perdu ... ";
      }
    }

    if (
      table[0][i] != "" &&
      table[0][i] == table[1][i] &&
      table[1][i] == table[2][i]
    ) {
      gameOver = true;
      if (table[0][i] == "X") {
        gagne.innerHTML = "Félicitation vous avez gagné ! ";
      } else {
        gagne.innerHTML = "Vous avez perdu ... ";
      }
    }
  }
  if (
    table[0][0] != "" &&
    table[0][0] == table[1][1] &&
    table[1][1] == table[2][2]
  ) {
    gameOver = true;
    if (table[0][0] == "X") {
      gagne.innerHTML = "Félicitation vous avez gagné ! ";
    } else {
      gagne.innerHTML = "Vous avez perdu ... ";
    }
  }

  if (
    table[2][0] != "" &&
    table[2][0] == table[1][1] &&
    table[1][1] == table[0][2]
  ) {
    gameOver = true;
    if (table[2][0] == "X") {
      gagne.innerHTML = "Félicitation vous avez gagné ! ";
    } else {
      gagne.innerHTML = "Vous avez perdu ... ";
    }
  }
  if (gameOver == true) {
    document.querySelector("#reply").classList.remove("hidden");
  }
  if (lap > 9 && gameOver == false) {
    gagne.innerHTML = "Egalité ";
  }
}

function replay() {
  gagne.textContent = "";
  document.querySelector("#reply").classList.add("hidden");
  gameOver = false;
  table = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  affich();
  lap = 1;
}

function randomize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

affich();
