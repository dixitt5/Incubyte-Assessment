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
      case "b":
        this.moveForwardOrBackward(command);
        break;
      case "l":
      case "r":
        this.turnLeftOrRight(command);
        break;
      case "u":
        this.direction = "U";
        break;
      case "d":
        this.direction = "D";
        break;
    }
  }

  moveForwardOrBackward(command) {
    const moveMap = new Map([
      ["N", () => (command === "f" ? this.y++ : this.y--)],
      ["E", () => (command === "f" ? this.x++ : this.x--)],
      ["S", () => (command === "f" ? this.y-- : this.y++)],
      ["W", () => (command === "f" ? this.x-- : this.x++)],
      ["U", () => (command === "f" ? this.z++ : this.z--)],
      ["D", () => (command === "f" ? this.z-- : this.z++)],
    ]);

    moveMap.get(this.direction)();
  }

  /**
   * Turn the spacecraft to left and right.
   */
  turnLeftOrRight(command) {
    const turnMap = new Map([
      ["N", command === "l" ? "W" : "E"],
      ["E", command === "l" ? "N" : "S"],
      ["S", command === "l" ? "E" : "W"],
      ["W", command === "l" ? "S" : "N"],
      ["U", command === "l" ? "N" : "S"],
      ["D", command === "l" ? "S" : "N"],
    ]);

    this.direction = turnMap.get(this.direction);
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
