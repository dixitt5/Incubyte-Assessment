class Spacecraft {
  constructor(x, y, z, direction) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.direction = direction;
  }

  move(command) {
    switch (command) {
      case "f":
        this.forward();
        break;
      case "b":
        this.backward();
        break;
      case "l":
        this.turnLeft();
        break;
      case "r":
        this.turnRight();
        break;
      case "u":
        this.turnUp();
        break;
      case "d":
        this.turnDown();
        break;
    }
  }

  forward() {
    switch (this.direction) {
      case "N":
        this.y++;
        break;
      case "E":
        this.x++;
        break;
      case "S":
        this.y--;
        break;
      case "W":
        this.x--;
        break;
      case "U":
        this.z++;
        break;
      case "D":
        this.z--;
        break;
    }
  }

  backward() {
    switch (this.direction) {
      case "N":
        this.y--;
        break;
      case "E":
        this.x--;
        break;
      case "S":
        this.y++;
        break;
      case "W":
        this.x++;
        break;
      case "U":
        this.z--;
        break;
      case "D":
        this.z++;
        break;
    }
  }

  turnLeft() {
    switch (this.direction) {
      case "N":
        this.direction = "W";
        break;
      case "E":
        this.direction = "N";
        break;
      case "S":
        this.direction = "E";
        break;
      case "W":
        this.direction = "S";
        break;
      case "U":
        this.direction = "N";
        break; // Change in Orientation when facing Up
      case "D":
        this.direction = "S";
        break; // Change in Orientation when facing Down
    }
  }

  turnRight() {
    switch (this.direction) {
      case "N":
        this.direction = "E";
        break;
      case "E":
        this.direction = "S";
        break;
      case "S":
        this.direction = "W";
        break;
      case "W":
        this.direction = "N";
        break;
      case "U":
        this.direction = "S";
        break; // Change in Orientation when facing Up
      case "D":
        this.direction = "N";
        break; // Change in Orientation when facing Down
    }
  }

  turnUp() {
    this.direction = "U";
  }

  turnDown() {
    this.direction = "D";
  }
}

module.exports = Spacecraft;
