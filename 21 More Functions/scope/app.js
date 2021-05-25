let totalEggs = 0;
function collectEggs() {
    totalEggs = 6;
}
console.log(totalEggs);
collectEggs();
console.log(totalEggs)

let bird = 'Scarlet Macaw';
function birdWatch() {
    // let bird ='Great Blue Heron';
    console.log(bird)

}
birdWatch()

let radius = 8;
if (radius > 0) {
    const PI = 3.14159;
    let msg = 'HIIII!'
}
console.log(radius);

function bankRobbery() {
    const heroes = ['Spiderman', 'WOlverine', 'Black Panther'];
    function cryForHelp() {
        function inner() {
            for (let hero of heroes) {
                console.log(`Please HELP US, ${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    cryForHelp();
}