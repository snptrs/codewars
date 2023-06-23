const walkingDirections = (directions) => {
  const location = { NS: 0, EW: 0 };
  directions.forEach((direction) => {
    if (direction === "n") {
      location.NS += 1;
    } else if (direction === "s") {
      location.NS -= 1;
    } else if (direction === "e") {
      location.EW += 1;
    } else if (direction === "w") {
      location.EW -= 1;
    }
  });

  if (directions.length === 10 && location.NS === 0 && location.EW === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = walkingDirections;
