let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

// in p5.js, the function runs on page load:
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background("black");

  // invoke any drawing functions inside of setup.
  // functions should all go between "createCanvas()" and "drawGrid()"
  //   draw5CirclesWhile();
  //   draw5RedSquares();
  //   draw5CirclesFor();
  //   drawNCircles(8);
  //   drawNCirclesFlexible(30, 25, 400, 0);
  //   drawNCirclesFlexible(4, 100, 100, 200);
  //   drawNCirclesFlexible(8, 50, 700, 100);
  //   drawNShapesFlexible(30, 30, 335, 0, "square");
  //   drawNShapesFlexible(4, 100, 120, 200, "circle");
  //   drawNShapesFlexible(8, 50, 725, 25, "square");
  //   hourGlass();
  //   drawNShapesDirectionFlexible(30, 30, 335, 0, "square", "column");
  //   drawNShapesDirectionFlexible(4, 100, 120, 200, "circle", "row");
  //   drawNShapesDirectionFlexible(8, 50, 725, 425, "circle", "row");
  art();

  //   drawGrid(canvasWidth, canvasHeight);
}

// my first function
function art() {
  fill("white");
  let i = 0;

  while (i < 5000) {
    //Fun to adjust number
    let r = Math.floor(Math.random() * 256); // Random red (0-255)
    let g = Math.floor(Math.random() * 256); // Random green (0-255)
    let b = Math.floor(Math.random() * 256); // Random blue (0-255)

    let color = `rgb(${r}, ${g}, ${b})`;
    //ChatGPT ^

    fill(color);
    circle(1000 * Math.random(), 1000 * Math.random(), Math.random() * 5);
    i++;
  }
}

function draw5CirclesWhile() {
  noFill();
  // fill('red');
  let x = 100;
  let y = 200;
  let z = 50;

  let i = 0;
  while (i < 5) {
    if (i % 2 === 0) {
      fill("blue");
    } else {
      fill("yellow");
    }
    circle(x, y + 50 * i, z);
    i++;
  }
}

function draw5CirclesFor() {
  noFill();
  let x = 200;
  let y = 100;
  let z = 50;

  for (let i = 0; i < 5; i++) {
    circle(x, y, z);
    y += 50;
  }
}

function drawNCircles(n) {
  noFill();
  let x = 500;
  let y = 100;
  let z = 50;

  for (let i = 0; i < n; i++) {
    circle(x, y, z);
    // circle(x + 300, y, z);
    y += 50;
    // z += 5;
  }
}

function hourGlass() {
  noFill();
  // fill('red');
  let x = 300;
  let y = 100;
  let z = 50;

  let i = 0;
  let j = 0;

  if (y < 350) {
    z = 300;
    while (j < 50) {
      if (j % 2 === 0) {
        fill("blue");
      } else {
        fill("yellow");
      }
      circle(x, y, z);
      y += 5;
      z -= 5;
      j++;
    }
  }

  if (y >= 350) {
    while (i < 50) {
      if (i % 2 === 0) {
        fill("blue");
      } else {
        fill("yellow");
      }
      circle(x, y, z);
      y += 5;
      z += 5;
      i++;
    }
  }
}

function drawNCirclesFlexible(n, size, x, y) {
  noFill();
  let z = size;

  for (let i = 0; i < n; i++) {
    circle(x, y, z);
    y += z;
  }
}

function drawNShapesFlexible(n, size, x, y, shape) {
  fill("red");
  let z = size;
  let shapes;

  if (shape === "circle") {
    shapes = circle;
  } else {
    shapes = square;
  }

  for (let i = 0; i < n; i++) {
    shapes(x, y, z);
    y += z;
  }
}

function drawNShapesDirectionFlexible(n, size, x, y, shape, direction) {
  fill("red");
  let z = size;
  let shapes;
  let directions;

  if (shape === "circle") {
    shapes = circle;
  } else {
    shapes = square;
  }

  if (direction === "row") {
    for (let i = 0; i < n; i++) {
      shapes(x, y, z);
      x += z;
    }
  } else {
    for (let i = 0; i < n; i++) {
      shapes(x, y, z);
      y += z;
    }
  }
}

function draw5RedSquares() {
  fill("red");
  square(320, 200, 50); // topLeftX, topLeftY, width
  square(320, 250, 50);
  square(320, 300, 50);
  square(320, 350, 50);
  square(320, 400, 50);
}
