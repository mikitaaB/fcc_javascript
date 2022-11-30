function myReplace(str, before, after) {
  if (str.indexOf(before) > -1) {
    let iFIndex = str.indexOf(before);
    if (str[iFIndex] === str[iFIndex].toUpperCase()) {
      after = after[0].toUpperCase() + after.slice(1);
    } else {
      after = after[0].toLowerCase() + after.slice(1);
    }
  }
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");