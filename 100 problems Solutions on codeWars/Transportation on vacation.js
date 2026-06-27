function rentalCarCost(d) {
    if (d <= 2) return 40 * d;
    else if (d >= 7) return (d * 40) - 50;
    else return (d * 40) - 20;
}