function countSheeps(sheep) {
    if (!sheep) return 0;
    return sheep.reduce(((acc, x) => (x == true) ? acc + x : acc), 0);
}