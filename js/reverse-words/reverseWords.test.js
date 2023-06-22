const reverseWords = require("./reverseWords");

describe("reverseWords", () => {
  it("reverses any words >= 5 characters in the given string", () => {
    const input = "This is a test string with random lengths of words";

    expect(reverseWords(input)).toBe(
      "This is a test gnirts with modnar shtgnel of sdrow"
    );
  });
});
