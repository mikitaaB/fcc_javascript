function sumFibs(num) {
    let arr = [0, 1];

    for (let i = 2; arr[i-1] + arr[i-2] <= num; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }

    // console.log(arr);
    return arr.filter(elem => elem % 2 === 1).reduce((a, b) => a + b);
}

sumFibs(10);