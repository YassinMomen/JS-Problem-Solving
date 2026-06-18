function countPositivesSumNegatives(arr) {
    if (!arr || arr.length == 0) return [];
    const ans = [0, 0];
    const negative = arr.reduce((acc, el) => el <= 0 ? acc + el : acc, 0);
    const positive = arr.filter((el) => (el > 0)).length;
    ans[0] = positive;
    ans[1] = negative;
    return ans;
}