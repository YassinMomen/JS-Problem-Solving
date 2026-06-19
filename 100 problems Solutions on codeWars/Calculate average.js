function findAverage(arr) {
    if (arr.length == 0 || !arr) return 0;
    const len = arr.length;
    return (arr.reduce((acc, x) => acc + x)) / len;
}