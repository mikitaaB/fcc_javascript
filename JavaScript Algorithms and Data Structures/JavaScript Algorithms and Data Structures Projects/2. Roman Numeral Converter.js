function convertToRoman(num) {
  let res = "";
  let [ed = 0, des = 0, sot = 0, tys = 0] = (num + "").split("").reverse();

  let arr = [+tys, +sot, +des, +ed];
  let aRomNum = [ ["", "", "", "M"], ["CM", "CD", "D", "C"], ["XC", "XL", "L", "X"], ["IX", "IV", "V", "I"] ];
  for (let i = 0; i < aRomNum.length; i++) {
    if (arr[i]) {
      res += convert(arr[i], aRomNum[i]);
    }
  }

  return res;
}

function convert(num, arrRomNum) {
    let resNum = "";
    if (num === 9) {
      resNum = arrRomNum[0];
    }
    if (num === 4) {
      resNum = arrRomNum[1];
    }
    if (num >= 5 && num < 9) {
      resNum = arrRomNum[2];
    }
    if ([1, 2, 3, 6, 7, 8].includes(num)) {
      for (let i = 0; i < num % 5; i++) {
        resNum += arrRomNum[3];
      }
    }
    return resNum;
}

convertToRoman(36);