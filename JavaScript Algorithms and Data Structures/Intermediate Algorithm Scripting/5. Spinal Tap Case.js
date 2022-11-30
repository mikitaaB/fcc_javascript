function spinalCase(str) {
  let sNewStr = str.match(/[A-z _-]/g).join("").replace(/[ _]/g, "-");
  let sCopy = sNewStr.slice();
  let j = 1;
  let k = 0;
  for (let i = 1; i < sNewStr.length; i++) {
    if (sNewStr[i-1] !== "-" && sNewStr[i].toLowerCase() !== sNewStr[i]) {
      j = k ? (i + k) : i;
      sCopy = sCopy.slice(0, j) + "-" + sCopy.slice(j, sCopy.length);
      k++;
    }
  }
  return sCopy.toLowerCase();
}
spinalCase('This Is Spinal Tap');