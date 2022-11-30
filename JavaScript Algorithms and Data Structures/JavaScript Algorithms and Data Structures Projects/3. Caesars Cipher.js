function rot13(str) {
  let res = [];
  let iStrLength = str.length;
  for (let i = 0; i < iStrLength; i++) {
    let iCharCode = str[i].charCodeAt();
    let iNewCharCode = iCharCode;
    if (iCharCode >= 65 && iCharCode <= 90) {
      iNewCharCode += 13;
      if (iNewCharCode > 90) {
        iNewCharCode -= 26;
      }
    }
    res[i] = String.fromCharCode(iNewCharCode);
  }
  return res.join('');
}

rot13("SERR PBQR PNZC");