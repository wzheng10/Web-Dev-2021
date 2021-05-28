// function rollDie(numSides){
//     if(numSides === undefined) {
//         numSides = 6
//     }
//     return Math.floor(Math.random() * numSides) + 1
// }

function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

function greet(person, msg = 'Hey there', puncuation = '!') {
    console.log( `${msg}, ${person} ${puncuation}`)
}

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt']

const allPets = [...cats, ...dogs]

const feline = {legs:4, family: 'Felidae'};
const canine = {family: 'caninae', isFurry: true};