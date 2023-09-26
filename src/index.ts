import readline from "readline";
import Spacecraft, { Direction,Command } from "./lunarSpacecraft";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Please specify the initial direction which can be N, S, E, W, U, D: ",
  (initialDirection) => {
    if (!Object.values(Direction).includes(initialDirection as Direction)) {
      console.error("Invalid initial direction!");
      rl.close();
      return;
    }

    rl.question(
      "Please enter the commands in an order of working (separated by commas, e.g., f,r,u,b,l): ",
      (input) => {
        const commands = input.split(",").map((command) => command.trim());

        const spacecraft = new Spacecraft(0, 0, 0, initialDirection as Direction);

        commands.forEach((command) => spacecraft.move(command as Command));

        // Assuming you have getters for x, y, z, and direction in your Spacecraft class
        console.log(
          `Final Position: (${spacecraft.x}, ${spacecraft.y}, ${spacecraft.z})`
        );
        
        console.log(`Final Direction: ${spacecraft.direction}`);

        rl.close();
      }
    );
  }
);
