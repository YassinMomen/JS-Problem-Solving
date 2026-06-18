function repeatStr(n, s) {
    let k = '';
    for (let i = 0; i < n; i++)k = k.concat(s);
    return k;
}