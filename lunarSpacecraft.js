/**
 * Class representing a lunar spacecraft that moves in three-dimensional space
 * with the ability to change its direction.
 */
class LunarSpacecraft {
  /**
   * Create a spacecraft.
   * @param {number} x - The initial x-coordinate.
   * @param {number} y - The initial y-coordinate.
   * @param {number} z - The initial z-coordinate.
   * @param {string} direction - The initial direction of the spacecraft (N, S, E, W, U, D).
   */
  constructor(x, y, z, direction) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.direction = direction;
  }

  /**
   * Process a command to move or change direction of the spacecraft.
   * @param {string} command - The command to process (f, b, l, r, u, d).
   */
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

  /**
   * Move the spacecraft forward based on its current direction.
   */
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
    const axes = ["x", "y", "z"];
    const boundary = 10;

    for (let axis of axes) {
      if (this[axis] > boundary || this[axis] < -boundary) {
        this[axis] -= 1;
        throw new Error(`Boundary restrictions in ${axis.toUpperCase()} axis`);
      }
    }
  }

  /**
   * Move the spacecraft backward based on its current direction.
   */
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

  /**
   * Turn the spacecraft left based on its current direction.
   */
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
        this.direction = "N"; // Change in Orientation when facing Up
        break;
      case "D":
        this.direction = "S"; // Change in Orientation when facing Down
        break;
    }
  }

  /**
   * Turn the spacecraft right based on its current direction.
   */
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
        this.direction = "S"; // Change in Orientation when facing Up
        break;
      case "D":
        this.direction = "N"; // Change in Orientation when facing Down
        break;
    }
  }

  /**
   * Turn the spacecraft to face upwards.
   */
  turnUp() {
    this.direction = "U";
  }

  /**
   * Turn the spacecraft to face downwards.
   */
  turnDown() {
    this.direction = "D";
  }
}

// Exporting the Spacecraft class to be used in other modules.
module.exports = LunarSpacecraft;
