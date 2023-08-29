const readline = require("readline");
const Spacecraft = require("./lunarSpacecraft.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Please specify the initial direction which can be N, S, E, W, U, D: ",
  (initialDirection) => {
    rl.question(
      "Please enter the commands in an order of working (separated by commas, e.g., f,r,u,b,l): ",
      (input) => {
        // Convert the string input into an array of commands
        const commands = input.split(",").map((command) => command.trim());

        const spacecraft = new Spacecraft(0, 0, 0, initialDirection); // Initialize spacecraft with provided initial conditions

        // Process commands
        commands.forEach((command) => spacecraft.move(command));

        console.log(
          `Final Position: (${spacecraft.x}, ${spacecraft.y}, ${spacecraft.z})`
        );
        console.log(`Final Direction: ${spacecraft.direction}`);

        rl.close();
      }
    );
  }
);
