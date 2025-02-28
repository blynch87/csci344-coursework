let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

// in p5.js, the function runs on page load:
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  drawMonster(100, 100, 150, "#0bc9cd", false);
  drawMonster(300, 200, 75, "#8093f1", true);
  drawMonster(100, 325, 100, "#8093f1", false);
  drawMonster(250, 375, 125, "#7fb285", true);
  drawMonster(550, 200, 250, "#7fb285", false);
}
const makeColor = (color, section) => {
  // your code here...

  console.log("Change background to red");
  const el = document.querySelector(section);
  if (el.style.backgroundColor === color) {
    el.style.backgroundColor = "white";
  } else {
    el.style.backgroundColor = color;
  }
};

function resetColors() {
  const target = document.querySelectorAll("section");
  for (const sec of target) {
    sec.style.backgroundColor = "white";
  }
}

function drawMonster(x, y, size, color, isSurprised) {
  rectMode(CENTER);
  squareMode(CENTER);
  fill(color);
  square(x, y, size, size);
  fill(color);
  if (isSurprised) {
    fill(black);
    square(x, y - size * 0.25, size * 0.15);
  } else {
    rect();
  }
}

drawMonster(100, 100, 150, "#0bc9cd", false);
drawMonster(300, 200, 75, "#8093f1", true);
drawMonster(100, 325, 100, "#8093f1", false);
drawMonster(250, 375, 125, "#7fb285", true);
drawMonster(550, 200, 250, "#7fb285", false);
