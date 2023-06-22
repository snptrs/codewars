const walkingDirections = require("./walkingDirections");

describe("walkingDirections", () => {
  it("returns true if number of steps is === 10 and route returns home", () => {
    expect(
      walkingDirections(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])
    ).toEqual(true);
    expect(walkingDirections(["n", "s", "n", "s", "n", "s", "n", "s"])).toEqual(
      false
    );
    expect(
      walkingDirections([
        "w",
        "e",
        "w",
        "e",
        "w",
        "e",
        "w",
        "e",
        "w",
        "e",
        "w",
        "e",
      ])
    ).toEqual(false);
  });
});
