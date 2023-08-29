const lunarSpacecraft = require("./lunarSpacecraft");

test("initializes spacecraft with right direction and position", () => {
  const spacecraft = new lunarSpacecraft(0, 0, 0, "N");
  expect(spacecraft.x).toBe(0);
  expect(spacecraft.y).toBe(0);
  expect(spacecraft.z).toBe(0);
  expect(spacecraft.direction).toBe("N");
});
