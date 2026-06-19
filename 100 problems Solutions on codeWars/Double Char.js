function doubleChar(str) {

    let ans = '';
    for (let i = 0; i < str.length; i++) {
        ans += str[i] + str[i];
    }
    return ans;
}
