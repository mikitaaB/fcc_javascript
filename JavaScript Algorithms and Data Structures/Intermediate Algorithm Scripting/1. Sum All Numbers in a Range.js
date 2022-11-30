function sumAll(arr) {
  const [one, two] = Array.from(arr).sort((a, b) => a - b);
  let sum = 0;
  for (let i = one; i <= two; i++) {
    sum += i;
  }
  return sum;
}

sumAll([5, 10]);