const multiply = (x,y) => x * y;

const square = x => multiply(x,x);

const isRightTriangle = (a, b,c) => (
    square(a) + square(b) === square(c)
)

console.log('before')
isRightTriangle(3, 4, 5);
console.log('after')

console.log('Sending request to server!')
setTimeout(() => {
    console.log('Here is your data from the server...')
}, 3000)
console.log('I am at the end of the file')