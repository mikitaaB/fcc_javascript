function translatePigLatin(str) {
  const aVowel = ['a', 'e', 'i', 'o', 'u'];
  const sAy = "ay";
  const sWay = "way";

  let sRes = "";

  let sFirstLetter = str[0];

  if (!aVowel.includes(sFirstLetter)) {
    let sBeginCon = sFirstLetter;
    let i = 1;
    while (!aVowel.includes(str[i]) && i < str.length) {
      sBeginCon += str[i];
      i++;
    }
    sRes = str.slice(i) + sBeginCon + sAy;
  } else {
    sRes = str + sWay;
  }

  return sRes;
}

translatePigLatin("consonant");