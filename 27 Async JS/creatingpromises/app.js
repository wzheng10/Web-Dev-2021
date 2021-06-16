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

// OLD WAY
// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }

// delayedColorChange('red', 1000, () =>{
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
        
//             })
//         })
//     })
// });

//PROMISE METHOD
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
.then(() => delayedColorChange('orange', 1000))
.then(() => delayedColorChange('yellow', 1000))
.then(() => delayedColorChange('green', 1000))
.then(() => delayedColorChange('blue', 1000))
.then(() => delayedColorChange('indigo', 1000))
.then(() => delayedColorChange('violet', 1000))
