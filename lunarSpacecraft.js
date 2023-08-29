class Spacecraft {
  constructor(x, y, z, direction) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.direction = direction;
  }

  move(command) {
    if (command === "f" && this.direction === "N") {
      this.y++;
    }
  }
}

module.exports = Spacecraft;
