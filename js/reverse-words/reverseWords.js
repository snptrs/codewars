// https://www.codewars.com/kata/5264d2b162488dc400000001

const reverseWords = (input) => {
  const words = input.split(" ");
  result = words.map((w) =>
    w.length >= 5 ? w.split("").reverse().join("") : w
  );

  return result.join(" ");
};

module.exports = reverseWords;
