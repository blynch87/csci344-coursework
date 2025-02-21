let canvasWidth = document.documentElement.clientWidth - 10;
let canvasHeight = document.documentElement.clientHeight - 10;

// in p5.js, the function runs on page load:
function setup() {
  rectMode(CENTER);
  createCanvas(canvasWidth, canvasHeight);
  background("black");
}

// in p5.js, special event handler that listens for click events:
function mouseClicked() {
  // in p5.js, mouseX and mouseY are
  // built-in global variabls that track the
  // current position of your mouse.
  let r = Math.floor(Math.random() * 256); // Random red (0-255)
  let g = Math.floor(Math.random() * 256); // Random green (0-255)
  let b = Math.floor(Math.random() * 256); // Random blue (0-255)
  let color = `rgb(${r}, ${g}, ${b})`;
  fill(color);
  let shape = Math.random();
  let i = 5;
  if (shape < 0.5) {
    while (i > 0) {
      let r = Math.floor(Math.random() * 256); // Random red (0-255)
      let g = Math.floor(Math.random() * 256); // Random green (0-255)
      let b = Math.floor(Math.random() * 256); // Random blue (0-255)
      let color = `rgb(${r}, ${g}, ${b})`;
      fill(color);
      circle(mouseX, mouseY, i * 50);
      i--;
    }
  } else {
    square(mouseX, mouseY, Math.random() * 200);
  }
}

// in p5.js, special event handler that listens for drag events:
function mouseDragged() {
  let r = Math.floor(Math.random() * 256); // Random red (0-255)
  let g = Math.floor(Math.random() * 256); // Random green (0-255)
  let b = Math.floor(Math.random() * 256); // Random blue (0-255)

  let color = `rgb(${r}, ${g}, ${b})`;
  fill(color);
  //   square(mouseX, mouseY, Math.random() * 200);
  let shape = Math.random();
  if (shape < 0.5) {
    circle(mouseX, mouseY, Math.random() * 200);
  } else {
    square(mouseX, mouseY, Math.random() * 200);
  }
}

/**
 * Challenges:
 * 1. As you click / drag, can the circles have different colors and sizes?
 *      * Try using the Math.random() function
 * 2. Can you make the click / drag sometimes make circles and sometimes make rectangles
 *      * Sample rectangle function invocation: rect(mouseX, mouseY, 100, 100);
 * 3. Can you make each click create a bulleye of different colors?
 *      * Hint: make sure you draw the bigger circles before you draw the smaller circles.
 */
