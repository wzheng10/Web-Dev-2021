const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

// for (let students in testScores) {
//     console.log(`${students} scored ${testScores[students]}`);
// }

//total score
// let total = 0;
// for (let scores of Object.values(testScores)) {
//     total += scores;
//     console.log(total);
// }

//to find average
let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length)