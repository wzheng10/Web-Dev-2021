axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log(res.data.ticker.price)
    })
    .catch(err => {
        console.log("Error!!!")
    })

const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price)
    } catch (e) {
        console.log("THERE WAS A ERROR!!", e)
    }
}

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button')

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    console.log(jokeText)
    // const newLI = document.createElement('LI');
    // newLI.append(res.data.joke);
    // jokes.append(newLI)   
}
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        // console.log(res.data.joke)
        return res.data.joke;
        
    } catch(e) {
        return "NO JOKES AVALIABLE TODAY"
    }

}
button.addEventListener('click', addNewJoke)