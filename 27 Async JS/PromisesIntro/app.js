// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}
///////      CALLBACK HELL     /////
// fakeRequestCallback('books.com/page1', 
//     function (response) {
//     console.log('IT WORKED!!!!!!!!!!')
//     console.log(response)
//     fakeRequestCallback('books.com/page2',
//         function(response){
//             console.log('IT WORKED AGAIN!!!!!!!!!!')
//             console.log(response)
//             fakeRequestCallback('books.com/page3',
//             function (response) {
//                 console.log('IT WORKED x3!!!!!!!!!!')
//                 console.log(response) 
//             },
//             function (err){
//                 console.log('ERROR(3rd Request)!!!!!!!!!!', err)
//             })
//         },
//         function (err){
//             console.log('ERROR(2nd Request)!!!!!!', err)
//         })
// }, function (err) {
//     console.log('ERROR!!!!!!', err)
// })

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log('PROMISE RESOLVED!')
//         console.log('IT WORKED!!!!!')
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log('PROMISE RESOLVED (page 2)!')
//                 console.log('IT WORKED!!!!!')
//                 fakeRequestPromise('yelp.com/api/coffee/page2')
//                     .then(() => {
//                         console.log('PROMISE RESOLVED (page 3)!')
//                         console.log('IT WORKED!!!!!')
//                     }).catch(() => {
//                         console.log('PROMISE REJECTED! page3')
//                         console.log('OH NO, ERROR!!!')
//                     })
//             }).catch(() => {
//                 console.log('PROMISE REJECTED! page 2')
//                 console.log('OH NO, ERROR!!!')
//             })
//     }).catch(() => {
//         console.log('PROMISE REJECTED! page 1')
//         console.log('OH NO, ERROR!!!')
//     })


//Using promises for clean 
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("IT WORKED!!!(page 1)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data) => {
        console.log("IT WORKED!!!(page 2)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log("IT WORKED!!!(page 3)")
        console.log(data)
    })
    .catch((err) => {
        console.log("OH NO, A REQUEST FAILED!!!")
        console.log(err)
    })



