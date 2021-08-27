// let x;
// let y;
// let x1;
// let y1;
// let x2;
// let y2;
// let x3;
// let y3;
// let x4;
// let y4;

let pos, pos1, pos2, pos3, pos4;

function setup() {
  createCanvas(400, 400);
  // x = 200;
  // y = 200;
  // x1 = 150;
  // y1 = 150;
  // x2 = 250;
  // y2 = 250;
  // x3 = 150;
  // y3 = 250;
  // x4 = 250;
  // y4 = 150;

  // Converted to vectors
  pos = createVector(200, 200);
  pos1 = createVector(150, 150);
  pos2 = createVector(250, 250);
  pos3 = createVector(150, 250);
  pos4 = createVector(250, 150);
  // creates background at the beginning
  background(1);
}

function draw() {
  stroke(255);
  strokeWeight(1);
  point(pos.x, pos.y);

  let r = floor(random(4));

  switch (r) {
    case 0:
      pos.x = pos.x + random(-1, 1);
      break;
    case 1:
      pos.x = pos.x - random(-1, 1);
      break;
    case 2:
      pos.y = pos.y + random(-1, 1);
      break;
    case 3:
      pos.y = pos.y - random(-1, 1);
      break;
  }
  stroke(200);
  strokeWeight(1);
  point(pos1.x, pos1.y);

  let r1 = floor(random(4));

  switch (r1) {
    case 0:
      pos1.x = pos1.x + random(-1, 1);
      break;
    case 1:
      pos1.x = pos1.x - random(-1, 1);
      break;
    case 2:
      pos1.y = pos1.y + random(-1, 1);
      break;
    case 3:
      pos1.y = pos1.y - random(-1, 1);
      break;
  }
  stroke(150);
  strokeWeight(1);
  point(pos2.x, pos2.y);

  let r2 = floor(random(4));

  switch (r2) {
    case 0:
      pos2.x = pos2.x + random(-1, 1);
      break;
    case 1:
      pos2.x = pos2.x - random(-1, 1);
      break;
    case 2:
      pos2.y = pos2.y + random(-1, 1);
      break;
    case 3:
      pos2.y = pos2.y - random(-1, 1);
      break;
  }
  stroke(100);
  strokeWeight(1);
  point(pos3.x, pos3.y);

  let r3 = floor(random(4));

  switch (r3) {
    case 0:
      pos3.x = pos3.x + random(-1, 1);
      break;
    case 1:
      pos3.x = pos3.x - random(-1, 1);
      break;
    case 3:
      pos3.y = pos3.y + random(-1, 1);
      break;
    case 3:
      pos3.y = pos3.y - random(-1, 1);
      break;
  }
  stroke(50);
  strokeWeight(1);
  point(pos4.x, pos4.y);

  let r4 = floor(random(4));

  switch (r4) {
    case 0:
      pos4.x = pos4.x + random(-1, 1);
      break;
    case 1:
      pos4.x = pos4.x - random(-1, 1);
      break;
    case 4:
      pos4.y = pos4.y + random(-1, 1);
      break;
    case 3:
      pos4.y = pos4.y - random(-1, 1);
      break;
  }
}
