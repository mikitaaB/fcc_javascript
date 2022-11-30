function uniteUnique(arr) {
  var aAllArguments = [];
  let iArgumentsLength = arguments.length;
  for (let i = 0; i < iArgumentsLength; i++) {
    aAllArguments.push(arguments[i]);
  }
  let aResArrays = aAllArguments.flat(2);
  return aResArrays.filter((iItem, iIndex) => {
      return aResArrays.indexOf(iItem) === iIndex;
  });
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);