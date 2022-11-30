function addTogether(one, two) {
  if (two) {
    if (typeof two === "number" && typeof one === "number") {
      return one + two;
    } else {
      return undefined;
    }
  }
  if (typeof one !== "number") {
    return undefined;
  }
  return function(two) {
    if (typeof two !== "number") {
      return undefined;
    }
    return one + two;
  }
}

addTogether(2,3);