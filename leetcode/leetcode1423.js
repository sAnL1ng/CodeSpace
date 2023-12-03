let cardPoints = [2,2,2], k = 2
var maxScore = function (cardPoints, k) {
    const n = cardPoints.length;
    const m = n - k;
    let s = 0;
    for (let i = 0; i < m; i++) {
        s += cardPoints[i];
    }
    let total = s;
    let minS = s;
    for (let i = m; i < n; i++) {
        total += cardPoints[i];
        s += cardPoints[i] - cardPoints[i - m];
        minS = Math.min(minS, s);
    }
    return total - minS;
};

console.log(maxScore(cardPoints));