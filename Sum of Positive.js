function positiveSum(arr) {
    return arr.reduce((acc, x) => (x > 0) ? acc + x : acc, 0);
}