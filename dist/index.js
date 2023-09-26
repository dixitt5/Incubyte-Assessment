"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const lunarSpacecraft_1 = __importStar(require("./lunarSpacecraft"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Please specify the initial direction which can be N, S, E, W, U, D: ", (initialDirection) => {
    if (!Object.values(lunarSpacecraft_1.Direction).includes(initialDirection)) {
        console.error("Invalid initial direction!");
        rl.close();
        return;
    }
    rl.question("Please enter the commands in an order of working (separated by commas, e.g., f,r,u,b,l): ", (input) => {
        const commands = input.split(",").map((command) => command.trim());
        const spacecraft = new lunarSpacecraft_1.default(0, 0, 0, initialDirection);
        commands.forEach((command) => spacecraft.move(command));
        // Assuming you have getters for x, y, z, and direction in your Spacecraft class
        console.log(`Final Position: (${spacecraft.x}, ${spacecraft.y}, ${spacecraft.z})`);
        console.log(`Final Direction: ${spacecraft.direction}`);
        rl.close();
    });
});
