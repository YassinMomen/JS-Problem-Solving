function squareOrSquareRoot(array) {
    return array.map((x) => parseInt(Math.sqrt(x)) * parseInt(Math.sqrt(x)) == x ? Math.sqrt(x) : x * x)
}