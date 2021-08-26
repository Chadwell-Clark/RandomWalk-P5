let x;
let y;
let x1;
let y1;
let x2;
let y2;
let x3;
let y3;
let x4;
let y4;


function setup() {
  createCanvas(400, 400);
  x = 200;
  y = 200;
  x1 = 150;
  y1 = 150;
  x2 = 250;
  y2 = 250;
  x3 = 150;
  y3 = 250;
  x4 = 250;
  y4 = 150;
  // creates background at the beginning
  background(1);
}

function draw() {
  stroke(255);
  strokeWeight(1);
  point(x, y);

  let r = floor(random(4));

  switch (r) {
    case 0:
      x = x + 2;
      break;
    case 1:
      x = x - 2;
      break;
    case 2:
      y = y + 2;
      break;
    case 3:
      y = y - 2;
      break;
  }
  stroke(200);
  strokeWeight(1);
  point(x1, y1);

  let r1 = floor(random(4));

  switch (r1) {
    case 0:
      x1 = x1 + 2;
      break;
    case 1:
      x1 = x1 - 2;
      break;
    case 2:
      y1 = y1 +2;
      break;
    case 3:
      y1 = y1 - 2;
      break;
  }
  stroke(150);
  strokeWeight(1);
  point(x2, y2);

  let r2 = floor(random(4));

  switch (r2) {
    case 0:
      x2 = x2 + 2;
      break;
    case 1:
      x2 = x2 - 2;
      break;
    case 2:
      y2 = y2 + 2;
      break;
    case 3:
      y2 = y2 - 2;
      break;
  }
   stroke(100);
  strokeWeight(1);
  point(x3, y3);

  let r3 = floor(random(4));

  switch (r3) {
    case 0:
      x3 = x3 + 2;
      break;
    case 1:
      x3 = x3 - 2;
      break;
    case 2:
      y3 = y3 + 2;
      break;
    case 3:
      y3 = y3 - 2;
      break;
  }
    stroke(50);
  strokeWeight(1);
  point(x4, y4);

  let r4 = floor(random(4));

  switch (r4) {
    case 0:
      x4 = x4 + 2;
      break;
    case 1:
      x4 = x4 - 2;
      break;
    case 2:
      y4 = y4 + 2;
      break;
    case 3:
      y4 = y4 - 2;
      break;
  }
}