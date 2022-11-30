function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  if (alphabet === str) {
    return undefined;
  } else {
    let aTrueStr = alphabet.slice(alphabet.indexOf(str[0]), alphabet.indexOf(str[str.length - 1])).split("");
    let aStr = str.split("");
    return aTrueStr.filter(sLetter => aStr.every(strLetter => strLetter !== sLetter)).join("");
  }
}

fearNotLetter("abce");