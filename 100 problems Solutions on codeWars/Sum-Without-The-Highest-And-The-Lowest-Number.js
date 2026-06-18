function sumArray(array) {

    return (!array || array.length <= 2) ? 0 : array.sort((a, b) => a - b).slice(1, -1).reduce(((acc, x) => acc + x), 0);
}