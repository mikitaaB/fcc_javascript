function destroyer(arr) {
  let aInit = arguments[0];
  let aNumbers = Object.values(arguments).slice(1);
  return aInit.filter(iElem => !aNumbers.includes(iElem));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);