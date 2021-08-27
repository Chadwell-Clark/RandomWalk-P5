class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
  }
  // update the Walker location
  update() {
    this.pos.x = this.pos.x + random(-1, 1);
    this.pos.y = this.pos.y + random(-1, 1);
    this.pos.x = constrain(this.pos.x, 0, width - 1);
    this.pos.y = constrain(this.pos.y, 0, height - 1);
  }

  // Draw the updated walker location
  show() {
    stroke(255, 100);
    strokeWeight(1);
    PointerEvent(this.pos.x, this.pos.y);
  }
}
