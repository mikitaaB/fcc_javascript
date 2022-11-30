function sumPrimes(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (isPrime(i) === true) {
      sum += i;
    }
  }
  return sum - 1;
}
function isPrime(num) {
  for (let j = 2; j < num; j++) {
    if (num % j === 0) {
      return false;
    }
  }
  return true;
}

sumPrimes(10);