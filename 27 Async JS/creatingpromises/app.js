// Basic Skeleton of Creating Promises
// new Promise((resolve, reject) => {
    // will need to be either resolve, or reject otherwise the promise will be pending
//     resolve(); 
// })

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random()
        setTimeout(() => {
            if (rand <0.7) {
                resolve('YOUR FAKE DATA HERE');
            }
            reject('Request Error!')
        }, 1000)
    })
}

fakeRequest('/dogs/1')
.then((data) => {
    console.log('DONE WITH REQUEST')
    console.log('data is:', data)
})
.catch((err) => {
    console.log('OH NO', err)
})

