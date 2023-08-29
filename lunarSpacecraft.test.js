const lunarSpacecraft = require("./lunarSpacecraft");

test("initializes spacecraft with right direction and position", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "N");
  expect(spacecraft.x).toBe(0);
  expect(spacecraft.y).toBe(0);
  expect(spacecraft.z).toBe(0);
  expect(spacecraft.direction).toBe("N");
});

test("moves spacecraft forward when direction is N", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "N");
  spacecraft.move("f");
  expect(spacecraft.y).toBe(1);
});

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
