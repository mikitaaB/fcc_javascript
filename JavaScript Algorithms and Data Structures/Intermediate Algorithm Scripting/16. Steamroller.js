function steamrollArray(arr) {
  let test = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      test.push(...steamrollArray(arr[i]));
    } else {
      test.push(arr[i]);
    }
  }
  return test;
}

steamrollArray([1, [2], [3, [[4]]]]);