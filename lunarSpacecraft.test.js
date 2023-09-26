const lunarSpacecraft = require("./lunarSpacecraft");

function setupAndMove(x, y, z, direction, command) {
  const spacecraft = new lunarSpacecraft(x, y, z, direction);
  spacecraft.move(command);
  return spacecraft;
}

function assertPositionAndDirection(spacecraft, x, y, z, direction) {
  expect(spacecraft).toHaveProperty("x", x);
  expect(spacecraft).toHaveProperty("y", y);
  expect(spacecraft).toHaveProperty("z", z);
  expect(spacecraft).toHaveProperty("direction", direction);
}

// ------- Unit tests to check initialization -------

describe("Lunar Spacecraft initialization", () => {
  const testCases = [
    { x: 0, y: 0, z: 0, direction: "N" },
    { x: 0, y: 0, z: 0, direction: "E" },
    { x: 0, y: 0, z: 0, direction: "W" },
    { x: 0, y: 0, z: 0, direction: "S" },
    { x: 0, y: 0, z: 0, direction: "U" },
    { x: 0, y: 0, z: 0, direction: "D" },
  ];

  testCases.forEach((testCase) => {
    test(`initializes Lunar spacecraft with position (${testCase.x}, ${testCase.y}, ${testCase.z}) and direction ${testCase.direction}`, () => {
      const spacecraft = new lunarSpacecraft(
        testCase.x,
        testCase.y,
        testCase.z,
        testCase.direction
      );
      assertPositionAndDirection(
        spacecraft,
        testCase.x,
        testCase.y,
        testCase.z,
        testCase.direction
      );
    });
  });
});

test("should throw an error for an invalid command", () => {

  // We expect an error to be thrown when an invalid command is passed
  expect(() => setupAndMove(0, 0, 0, "N", "x")).toThrow("Invalid");
});

// ------- Unit tests to handle spacecraft movement in North Direction -------

describe("Lunar Spacecraft movements in N direction", () => {
  test("moves spacecraft forward when direction is N", () => {
    const spacecraft = setupAndMove(0, 0, 0, "N", "f");
    assertPositionAndDirection(spacecraft, 0, 1, 0, "N");
  });

  test("moves Lunar spacecraft backward when direction is N", () => {
    const spacecraft = setupAndMove(0, 0, 0, "N", "b");
    assertPositionAndDirection(spacecraft, 0, -1, 0, "N");
  });

  test("turns Lunar spacecraft right from N direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "N", "r");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "E");
  });

  test("turns Lunar spacecraft left from N direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "N", "l");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "W");
  });

  test("turns Lunar spacecraft up from N direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "N", "u");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "U");
  });

  test("turns Lunar spacecraft down from N direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "N", "d");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "D");
  });
});

// ------- Unit tests to handle spacecraft movement in East Direction -------

describe("Lunar Spacecraft movements in E direction", () => {
  test("moves spacecraft forward when direction is E", () => {
    const spacecraft = setupAndMove(0, 0, 0, "E", "f");
    assertPositionAndDirection(spacecraft, 1, 0, 0, "E");
  });

  test("moves Lunar spacecraft backward when direction is E", () => {
    const spacecraft = setupAndMove(0, 0, 0, "E", "b");
    assertPositionAndDirection(spacecraft, -1, 0, 0, "E");
  });

  test("turns Lunar spacecraft right from E direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "E", "r");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "S");
  });

  test("turns Lunar spacecraft left from E direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "E", "l");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "N");
  });

  test("turns Lunar spacecraft up from E direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "E", "u");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "U");
  });

  test("turns Lunar spacecraft down from E direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "E", "d");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "D");
  });
});

// ------- Unit tests to handle spacecraft movement in South Direction -------

describe("Lunar Spacecraft movements in S direction", () => {
  test("moves spacecraft forward when direction is S", () => {
    const spacecraft = setupAndMove(0, 0, 0, "S", "f");
    assertPositionAndDirection(spacecraft, 0, -1, 0, "S");
  });

  test("moves Lunar spacecraft backward when direction is S", () => {
    const spacecraft = setupAndMove(0, 0, 0, "S", "b");
    assertPositionAndDirection(spacecraft, 0, 1, 0, "S");
  });

  test("turns Lunar spacecraft right from S direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "S", "r");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "W");
  });

  test("turns Lunar spacecraft left from S direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "S", "l");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "E");
  });

  test("turns Lunar spacecraft up from S direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "S", "u");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "U");
  });

  test("turns Lunar spacecraft down from S direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "S", "d");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "D");
  });
});

// ------- Unit tests to handle spacecraft movement in West Direction -------

describe("Lunar Spacecraft movements in W direction", () => {
  test("moves spacecraft forward when direction is W", () => {
    const spacecraft = setupAndMove(0, 0, 0, "W", "f");
    assertPositionAndDirection(spacecraft, -1, 0, 0, "W");
  });

  test("moves Lunar spacecraft backward when direction is W", () => {
    const spacecraft = setupAndMove(0, 0, 0, "W", "b");
    assertPositionAndDirection(spacecraft, 1, 0, 0, "W");
  });

  test("turns Lunar spacecraft right from W direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "W", "r");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "N");
  });

  test("turns Lunar spacecraft left from W direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "W", "l");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "S");
  });

  test("turns Lunar spacecraft up from W direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "W", "u");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "U");
  });

  test("turns Lunar spacecraft down from W direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "W", "d");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "D");
  });
});

// ------- Unit tests to handle spacecraft movement in upper direction -------

describe("Lunar Spacecraft movements in U direction", () => {
  test("moves spacecraft forward when direction is U", () => {
    const spacecraft = setupAndMove(0, 0, 0, "U", "f");
    assertPositionAndDirection(spacecraft, 0, 0, 1, "U");
  });

  test("moves Lunar spacecraft backward when direction is U", () => {
    const spacecraft = setupAndMove(0, 0, 0, "U", "b");
    assertPositionAndDirection(spacecraft, 0, 0, -1, "U");
  });

  test("turns Lunar spacecraft right from U direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "U", "r");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "S"); // Adjusted based on your provided logic
  });

  test("turns Lunar spacecraft left from U direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "U", "l");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "N"); // Adjusted based on your provided logic
  });

  test("turns Lunar spacecraft up when facing U direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "U", "u");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "U");
  });

  test("turns Lunar spacecraft down when facing U direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "U", "d");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "D");
  });
});

describe("Spacecraft goes out of boundary in X axis", () => {
  test("spacecraft goes out of boundary in E Direction (positive x axis) ", () => {
    expect(() => {
      setupAndMove(10, 0, 0, "E", "f");
    }).toThrow("Boundary restrictions in X axis");
  });
  test("spacecraft goes out of boundary in W Direction (negative x axis) ", () => {
    expect(() => {
      setupAndMove(-10, 0, 0, "W", "f");
    }).toThrow("Boundary restrictions in X axis");
  });
  test("spacecraft goes out of boundary in E Direction (positive x axis) in backward direction", () => {
    expect(() => {
      setupAndMove(-10, 0, 0, "E", "b");
    }).toThrow("Boundary restrictions in X axis");
  });
  test("spacecraft goes out of boundary in W Direction (negative x axis) in backward direction", () => {
    expect(() => {
      setupAndMove(10, 0, 0, "W", "b");
    }).toThrow("Boundary restrictions in X axis");
  });
});

describe("Spacecraft goes out of boundary in Y axis", () => {
  test("spacecraft goes out of boundary in N Direction (positive Y axis) ", () => {
    expect(() => {
      setupAndMove(0, 10, 0, "N", "f");
    }).toThrow("Boundary restrictions in Y axis");
  });
  test("spacecraft goes out of boundary in S Direction (negative Y axis) ", () => {
    expect(() => {
      setupAndMove(0, -10, 0, "S", "f");
    }).toThrow("Boundary restrictions in Y axis");
  });
  test("spacecraft goes out of boundary in N Direction (positive Y axis) in backward direction", () => {
    expect(() => {
      setupAndMove(0, -10, 0, "N", "b");
    }).toThrow("Boundary restrictions in Y axis");
  });
  test("spacecraft goes out of boundary in S Direction (negative Y axis) in backward direction", () => {
    expect(() => {
      setupAndMove(0, 10, 0, "S", "b");
    }).toThrow("Boundary restrictions in Y axis");
  });
});

describe("Spacecraft goes out of boundary in Z axis", () => {
  test("spacecraft goes out of boundary in Upward Direction (positive Z axis) ", () => {
    expect(() => {
      setupAndMove(0, 0, 10, "U", "f");
    }).toThrow("Boundary restrictions in Z axis");
  });
  test("spacecraft goes out of boundary in Downword Direction (negative Z axis) ", () => {
    expect(() => {
      setupAndMove(0, 0, -10, "D", "f");
    }).toThrow("Boundary restrictions in Z axis");
  });
  test("spacecraft goes out of boundary in Upward Direction (positive Z axis) in backward direction", () => {
    expect(() => {
      setupAndMove(0, 0, 10, "D", "b");
    }).toThrow("Boundary restrictions in Z axis");
  });
  test("spacecraft goes out of boundary in Downword Direction (negative Z axis) in backward direction", () => {
    expect(() => {
      setupAndMove(0, 0, -10, "U", "b");
    }).toThrow("Boundary restrictions in Z axis");
  });
});

// ------- Unit tests to handle spacecraft movement in down direction -------

describe("Lunar Spacecraft movements in D direction", () => {
  test("moves spacecraft forward when direction is D", () => {
    const spacecraft = setupAndMove(0, 0, 0, "D", "f");
    assertPositionAndDirection(spacecraft, 0, 0, -1, "D");
  });

  test("moves Lunar spacecraft backward when direction is D", () => {
    const spacecraft = setupAndMove(0, 0, 0, "D", "b");
    assertPositionAndDirection(spacecraft, 0, 0, 1, "D");
  });

  test("turns Lunar spacecraft right from D direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "D", "r");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "N");
  });

  test("turns Lunar spacecraft left from D direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "D", "l");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "S");
  });

  test("turns Lunar spacecraft up when facing D direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "D", "u");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "U");
  });

  test("turns Lunar spacecraft down when facing D direction", () => {
    const spacecraft = setupAndMove(0, 0, 0, "D", "d");
    assertPositionAndDirection(spacecraft, 0, 0, 0, "D");
  });
});

