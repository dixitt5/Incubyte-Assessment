"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direction = void 0;
var Direction;
(function (Direction) {
    Direction["N"] = "N";
    Direction["E"] = "E";
    Direction["S"] = "S";
    Direction["W"] = "W";
    Direction["U"] = "U";
    Direction["D"] = "D";
})(Direction || (exports.Direction = Direction = {}));
/**
* Class representing a lunar spacecraft that moves in three-dimensional space
* with the ability to change its direction.
*/
class LunarSpacecraft {
    /**
     * Create a spacecraft.
     * @param x - The initial x-coordinate.
     * @param y - The initial y-coordinate.
     * @param z - The initial z-coordinate.
     * @param direction - The initial direction of the spacecraft.
     */
    constructor(x, y, z, direction) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.direction = direction;
    }
    /**
     * Process a command to move or change direction of the spacecraft.
     * @param command - The command to process.
     */
    move(command) {
        if (!["f", "b", "l", "r", "u", "d"].includes(command)) {
            throw new Error("Invalid command");
        }
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
                this.direction = Direction.U;
                break;
            case "d":
                this.direction = Direction.D;
                break;
        }
        this.checkBoundary();
    }
    moveForwardOrBackward(command) {
        const moveMap = new Map([
            [Direction.N, () => (command === "f" ? this.y++ : this.y--)],
            [Direction.E, () => (command === "f" ? this.x++ : this.x--)],
            [Direction.S, () => (command === "f" ? this.y-- : this.y++)],
            [Direction.W, () => (command === "f" ? this.x-- : this.x++)],
            [Direction.U, () => (command === "f" ? this.z++ : this.z--)],
            [Direction.D, () => (command === "f" ? this.z-- : this.z++)],
        ]);
        moveMap.get(this.direction)();
    }
    turnLeftOrRight(command) {
        const turnMap = new Map([
            [Direction.N, command === "l" ? Direction.W : Direction.E],
            [Direction.E, command === "l" ? Direction.N : Direction.S],
            [Direction.S, command === "l" ? Direction.E : Direction.W],
            [Direction.W, command === "l" ? Direction.S : Direction.N],
            [Direction.U, command === "l" ? Direction.N : Direction.S],
            [Direction.D, command === "l" ? Direction.S : Direction.N],
        ]);
        this.direction = turnMap.get(this.direction);
    }
    checkBoundary() {
        const boundary = 10;
        const axes = ["x", "y", "z"];
        for (const axis of axes) {
            if (this[axis] > boundary || this[axis] < -boundary) {
                this[axis] -= 1;
                throw new Error(`Boundary restrictions in ${axis.toUpperCase()} axis`);
            }
        }
    }
}
// Exporting the Spacecraft class to be used in other modules.
exports.default = LunarSpacecraft;
