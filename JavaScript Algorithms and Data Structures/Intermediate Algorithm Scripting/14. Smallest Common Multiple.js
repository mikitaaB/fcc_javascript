function smallestCommons(arr) {
  arr.sort((a, b) => a - b);
  const [min, max] = arr.sort((a, b) => a - b);

  let res = 0;

  let rangeEl = [];
  for (let i = min; i < max; i++) {
    rangeEl.push(i);
  }
  // let rangeEl = Array(max - min + 1).fill(null).map((val, i) => i + min);

  for (let i = 1; ; i++) {
    if (i % min === 0 && i % max === 0 && 
      rangeEl.every(el => i % el === 0)) {
        res = i;
        break;
    }
  }

  return res;
}

smallestCommons([1,5]);