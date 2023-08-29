const lunarSpacecraft = require("./lunarSpacecraft");

// ------- Unit tests to check initialization -------

test("initializes spacecraft with right direction and position", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "N");
  expect(spacecraft.x).toBe(0);
  expect(spacecraft.y).toBe(0);
  expect(spacecraft.z).toBe(0);
  expect(spacecraft.direction).toBe("N");
});

test("initializes spacecraft with correct position and direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "E");
  expect(spacecraft.x).toBe(0);
  expect(spacecraft.y).toBe(0);
  expect(spacecraft.z).toBe(0);
  expect(spacecraft.direction).toBe("E");
});

test("initializes spacecraft with correct position and direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "W");
  expect(spacecraft.x).toBe(0);
  expect(spacecraft.y).toBe(0);
  expect(spacecraft.z).toBe(0);
  expect(spacecraft.direction).toBe("W");
});

test("initializes spacecraft with correct position and direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "S");
  expect(spacecraft.x).toBe(0);
  expect(spacecraft.y).toBe(0);
  expect(spacecraft.z).toBe(0);
  expect(spacecraft.direction).toBe("S");
});

test("initializes spacecraft with correct position and direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "U");
  expect(spacecraft.x).toBe(0);
  expect(spacecraft.y).toBe(0);
  expect(spacecraft.z).toBe(0);
  expect(spacecraft.direction).toBe("U");
});

test("initializes spacecraft with correct position and direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "D");
  expect(spacecraft.x).toBe(0);
  expect(spacecraft.y).toBe(0);
  expect(spacecraft.z).toBe(0);
  expect(spacecraft.direction).toBe("D");
});

// ------- Unit tests to handle spacecraft movement in North Direction -------

test("moves spacecraft backward when direction is N", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "N");
  spacecraft.move("b");
  expect(spacecraft.y).toBe(-1);
});

test("turns spacecraft right from N direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "N");
  spacecraft.move("r");
  expect(spacecraft.direction).toBe("E");
});

test("turns spacecraft left from N direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "N");
  spacecraft.move("l");
  expect(spacecraft.direction).toBe("W");
});

test("turns spacecraft up from N direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "N");
  spacecraft.move("u");
  expect(spacecraft.direction).toBe("U");
});

test("turns spacecraft down from N direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "N");
  spacecraft.move("d");
  expect(spacecraft.direction).toBe("D");
});

// ------- Unit tests to handle spacecraft movement in East Direction -------

test("moves lunar spacecraft forward when direction is E", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "E");
  spacecraft.move("f");
  expect(spacecraft.x).toBe(1);
});

test("moves lunar spacecraft backward when direction is E", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "E");
  spacecraft.move("b");
  expect(spacecraft.x).toBe(-1);
});

test("turns lunar spacecraft right from E direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "E");
  spacecraft.move("r");
  expect(spacecraft.direction).toBe("S");
});

test("turns lunar spacecraft left from E direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "E");
  spacecraft.move("l");
  expect(spacecraft.direction).toBe("N");
});

test("turns lunar spacecraft up from E direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "E");
  spacecraft.move("u");
  expect(spacecraft.direction).toBe("U");
});

test("turns lunar spacecraft down from E direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "E");
  spacecraft.move("d");
  expect(spacecraft.direction).toBe("D");
});

// ------- Unit tests to handle spacecraft movement in South Direction -------

test("moves lunar spacecraft forward when direction is S", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "S");
  spacecraft.move("f");
  expect(spacecraft.y).toBe(-1);
});

test("moves lunar spacecraft backward when direction is S", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "S");
  spacecraft.move("b");
  expect(spacecraft.y).toBe(1);
});

test("turns lunar spacecraft right from S direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "S");
  spacecraft.move("r");
  expect(spacecraft.direction).toBe("W");
});

test("turns lunar spacecraft left from S direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "S");
  spacecraft.move("l");
  expect(spacecraft.direction).toBe("E");
});

test("turns lunar spacecraft up from S direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "S");
  spacecraft.move("u");
  expect(spacecraft.direction).toBe("U");
});

test("turns lunar spacecraft down from S direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "S");
  spacecraft.move("d");
  expect(spacecraft.direction).toBe("D");
});

// ------- Unit tests to handle spacecraft movement in West Direction -------

test("moves lunar spacecraft forward when direction is W", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "W");
  spacecraft.move("f");
  expect(spacecraft.x).toBe(-1);
});

test("moves lunar spacecraft backward when direction is W", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "W");
  spacecraft.move("b");
  expect(spacecraft.x).toBe(1);
});

test("turns lunar spacecraft right from W direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "W");
  spacecraft.move("r");
  expect(spacecraft.direction).toBe("N");
});

test("turns lunar spacecraft left from W direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "W");
  spacecraft.move("l");
  expect(spacecraft.direction).toBe("S");
});

test("turns lunar spacecraft up from W direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "W");
  spacecraft.move("u");
  expect(spacecraft.direction).toBe("U");
});

test("turns lunar spacecraft down from W direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "W");
  spacecraft.move("d");
  expect(spacecraft.direction).toBe("D");
});

// ------- Unit tests to handle spacecraft movement in upper direction -------

test("moves lunar spacecraft forward when direction is U", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "U");
  spacecraft.move("f");
  expect(spacecraft.z).toBe(1);
});

test("moves lunar spacecraft backward when direction is U", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "U");
  spacecraft.move("b");
  expect(spacecraft.z).toBe(-1);
});

test("turns lunar spacecraft right from U direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "U");
  spacecraft.move("r");
  expect(spacecraft.direction).toBe("S"); // Assuming it doesn't change with right/left turns
});

test("turns lunar spacecraft left from U direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "U");
  spacecraft.move("l");
  expect(spacecraft.direction).toBe("N"); // Assuming it doesn't change with right/left turns
});

test("turns lunar spacecraft up when facing U direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "U");
  spacecraft.move("u");
  expect(spacecraft.direction).toBe("U");
});

test("turns lunar spacecraft down when facing U direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "U");
  spacecraft.move("d");
  expect(spacecraft.direction).toBe("D");
});

// ------- Unit tests to handle spacecraft movement in down direction -------

test("moves lunar spacecraft forward when direction is D", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "D");
  spacecraft.move("f");
  expect(spacecraft.z).toBe(-1);
});

test("moves lunar spacecraft backward when direction is D", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "D");
  spacecraft.move("b");
  expect(spacecraft.z).toBe(1);
});

test("turns lunar spacecraft right from D direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "D");
  spacecraft.move("r");
  expect(spacecraft.direction).toBe("N"); // Assuming it doesn't change with right/left turns
});

test("turns lunar spacecraft left from D direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "D");
  spacecraft.move("l");
  expect(spacecraft.direction).toBe("S"); // Assuming it doesn't change with right/left turns
});

test("turns lunar spacecraft up when facing D direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "D");
  spacecraft.move("u");
  expect(spacecraft.direction).toBe("U");
});

test("turns lunar spacecraft down when facing D direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "D");
  spacecraft.move("d");
  expect(spacecraft.direction).toBe("D");
});

// -------  tests to handle invalid commands for spacecraft movement -------

test("does not change position or direction with invalid command", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "N");
  const initialPosition = { x: 0, y: 0, z: 0, direction: "N" };
  spacecraft.move("x"); // invalid command
  expect(spacecraft.x).toBe(initialPosition.x);
  expect(spacecraft.y).toBe(initialPosition.y);
  expect(spacecraft.z).toBe(initialPosition.z);
  expect(spacecraft.direction).toBe(initialPosition.direction);
});

test("does not move when facing an invalid direction", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "A"); // invalid direction
  spacecraft.move("f");
  expect(spacecraft.x).toBe(0);
  expect(spacecraft.y).toBe(0);
  expect(spacecraft.z).toBe(0);
  expect(spacecraft.direction).toBe("A");
});
