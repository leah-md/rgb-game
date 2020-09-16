let colorNum = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let gameModes = document.querySelectorAll(".gameMode");
let resetButton = document.querySelector("#reset");
let rgbDisplay = document.querySelector("#rgbDisplay");
let heading = document.querySelector(".heading");
let closeTut = document.querySelector(".closeTut");
let tutorial = document.querySelector(".tutContainer");

closeTut.addEventListener("click", function(){
  tutorial.style.display = "none";
});

makeGame();
resetButton.addEventListener("click", resetGame);
for(let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", clickSquare);
}
for(let i = 0; i < gameModes.length; i++) {
  gameModes[i].addEventListener("click", changeDifficulty)
}

function makeGame() {
  colors = colorArrayMaker();
  pickedColor = colorPicker();
  assignSquaresColors();
  rgbDisplay.textContent = pickedColor;
}

function resetGame() {
  makeGame();
  heading.style.backgroundColor = "#6e736f";
  reset.textContent = "New Colors";
}

function clickSquare() {
  if(this.style.backgroundColor === pickedColor) {
    rgbDisplay.textContent = "You got it!";
    resetButton.textContent = "Play again?";
    matchWinningColor();
  } 
  else {
    this.style.backgroundColor = "#232323";
  }
}

function changeDifficulty() {
  if(this.textContent === "Easy") { 
    colorNum = 3; 
  } else if(this.textContent === "Normal") { 
    colorNum = 6; 
  } else { 
    colorNum = 9; 
  }
  for(let i = 0; i < gameModes.length; i++) {
    gameModes[i].classList.remove("selected");
  }
  this.classList.add("selected");
  resetGame();
} 

function colorArrayMaker() {
  let array = [];
  for(let i = 0; i < colorNum; i++) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    array.push(`rgb(${r}, ${g}, ${b})`);
  }
  return array;
}

function colorPicker() {
  let i = Math.floor(Math.random() * colors.length);
  return colors[i];
}

function assignSquaresColors() {
  for(let i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }  
}

function matchWinningColor() {
  heading.style.backgroundColor = pickedColor;
  for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = pickedColor;
  }
}












