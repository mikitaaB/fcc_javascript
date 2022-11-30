function diffArray(arr1, arr2) {
  return arr1.filter(arr1El => !arr2.includes(arr1El)).concat(arr2.filter(arr2El => !arr1.includes(arr2El)));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);