const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

numbers.filter( n=> {
    return n < 10
})

const doubled = numbers.map(function (num) {
    return num * 2;
})

// function print(element) {
//     console.log(element)
// }

// print(numbers[0])
// print(numbers[1])

// numbers.forEach(print)

// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el)
//     }
// })

// for(let el of numbers) {
//     console.group(el);
// }

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

// const goodMovies = movies.filter(movie => {
//     return movie.score > 80
// })

const goodMovies = movies.filter(m => m.score > 80)
const goodTitles = goodMovies.map(m => m.title)

movies
    .filter(m => m.score > 80)
    .map(m => m.title)
const badMovies = movies.filter(m => m.score < 70)

const recentMovies = movies.filter(m => m.year > 2000)

// const newMovies = movies.map(function (movie) {
// return `${movie.title} - ${movie.score/10}`
// })
// const newMovies = movies.map(movie => {
//     return `${movie.title} - ${movie.score / 10}`
// })
const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))

const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
})

dirtyNames = ["  Wei", " Ruvel   ", "   Kenly  "]
const cleanNames = dirtyNames.map(function (dirtyNames) {
    return dirtyNames.trim();
})


// const add = function(x,y) {
//     return x + y;
// }

// const add = (x,y) => {
//     return x + y
// }

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }

const greet = name => {
    return (`Hey ${name}!`);
}

//implicist returns
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)
//also works
const add = (a, b) => a + b
// setTimeout //
// console.log('HELLO!!!!')
// setTimeout(() => {
    // console.log('......are you still there?')
// }, 3000)
// 
// console.log('GOODBYE!!!')
// setInterval //
// const id = setInterval(() => {
//     console.log(Math.random())
// }, 2000)

