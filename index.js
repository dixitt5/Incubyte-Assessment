// Importing required modules
const readline = require("readline");
const Spacecraft = require("./lunarSpacecraft.js");

// Creating a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Asking the user to specify the initial direction of the spacecraft
rl.question(
  "Please specify the initial direction which can be N, S, E, W, U, D: ",
  (initialDirection) => {
    // Asking the user to provide commands for the spacecraft
    rl.question(
      "Please enter the commands in an order of working (separated by commas, e.g., f,r,u,b,l): ",
      (input) => {
        // Convert the string input into an array of commands and remove any white spaces
        const commands = input.split(",").map((command) => command.trim());

        // Initialize the spacecraft object with initial position (0,0,0) and user-defined direction
        const spacecraft = new Spacecraft(0, 0, 0, initialDirection);

        // Process and execute each command
        commands.forEach((command) => spacecraft.move(command));

        // Output the final position and direction of the spacecraft
        console.log(
          `Final Position: (${spacecraft.x}, ${spacecraft.y}, ${spacecraft.z})`
        );
        console.log(`Final Direction: ${spacecraft.direction}`);

        // Close the readline interface
        rl.close();
      }
    );
  }
);
