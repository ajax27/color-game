let numSquares = 6;
let colors = [];
let pickedColor;

const squares = document.querySelectorAll(".square");
const title = document.querySelector("h1");
const colorDisplay = document.getElementById("colorDisplay");
const msgDisplay = document.querySelector("#message");
const resetBtn = document.querySelector("#reset");
const modeBtns = document.querySelectorAll(".mode");

init();

function init() {
  setModeBtns();
	setSquares();
	reset();
}

function setModeBtns() {
	for (let i = 0; i < modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function() {
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
	  });
  }
}

function setSquares() {
	for(let i = 0; i < squares.length; i++) {
		// Add listeners to squares
		squares[i].addEventListener("click", function() {
			//grab color of clicked squares
			let clickedColor = this.style.backgroundColor;
			// Compare color to pickedColor
			if (clickedColor === pickedColor) {
				msgDisplay.textContent = "Correct!";
				resetBtn.textContent = "Play Again?";
				changeColors(clickedColor);
				title.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				msgDisplay.textContent = "Try Again!";
			}
		});
	}
}

function reset() {
	colors = genRandomColors(numSquares);
	pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
	resetBtn.textContent = "New Colors";
	msgDisplay.textContent = "";
	for(let i = 0; i < squares.length; i++){
	  if (colors[i]) { 
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		 } else { 
			 squares[i].style.display = "none";
		 }
	}
	
	title.style.backgroundColor = "#3993bd";
}

resetBtn.addEventListener("click", function() {
	reset();
});

function changeColors(color) {
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function genRandomColors(num) {
	const arr = [];

	for (let i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr;
}

function randomColor() {
	// random red
	let r = Math.floor(Math.random() * 256);
	// random green
	let g = Math.floor(Math.random() * 256);
	// random blue
	let b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

