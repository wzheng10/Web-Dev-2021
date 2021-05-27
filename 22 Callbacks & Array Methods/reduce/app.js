const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for (let price of prices) {
//     total += price
// }
// console.log(total)

// const total = prices.reduce((total, price) => {
//     return total + price
// })

const total = prices.reduce((total, price) => total + price )
//min num in the array
const minPrice = prices.reduce((min, price ) => {
    if(price < min){
        return price;
    }
    return min;
})

//max num in the array
const maxPrice = prices.reduce((max, price ) => {
    if(price > max){
        return price;
    }
    return max;
})

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

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if(currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie
})

const evens = [2, 4, 6, 8]

evens.reduce((sum, num) => sum + num, 100)

