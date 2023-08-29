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
