Callbacks & Array Methods

**Crucial!**
-ForEach
-Map
-Arrow Functions

*Importnant*
-Filter

*Nice to Have*
-Some & Every
-Reduce

GOALS
    -to be able to use the new arrow function syntax
    -to understand and use these methods:forEach, map, filter, find, reduce, some, every

forEach- accepts a callback function and calls teh function once per element in the array

map- creates a new array with the results of calling a callback on every element in the array
    const cleanNames = function(oldArray) {
    let newArray = oldArray.map(function (arrayElements) {
    return arrayElements.trim() ;
    });
    return newArray;
    }

    const cleanNames = function(names){
    const arr = names.map(function(names){
        return names.trim();
    })
    return arr;
}
.trim*( method removes white spaces from both ends of a spring)

Arrowfunctions - new way of defining functions
"syntactically compact alternative" to a regular function expression
*Old Way*
const add = function(x,y) {
    return x + y;
}
*New Way*
const add = (x,y) => {
    return x + y
}

the parentheses are optional only when there is a single element
otherwise it is required for 2 or more arguments/ 0 arguments

*This is okay*
const square = x => {
    return x * x;
}
*These arent okay*
const add = x,y => {  //must be (x,y)
    return x + y;
}

Implicit returns
    -only works with arrow functions
    -single expression that is evaluated and returned
    -replaces {} with () and removes the need for return

setTimeout- will delay the code from running for x amount of time
setInterval- will repeatly run the function over and over again at a set time
clearInterval(id)- stops the setInterval from repeating. must be saved to a variable to stop


Filter- creates a new array with all elements that pass the test implemented by the provided function
function validUserNames(arr){
    return arr.filter(name => name.length < 10);
}
const validUserNames = arr => arr.filter(name => name.length < 10);

what is a callback?

some & every (boolean methods)
every- tests whether all elements in the array pass the provided functions
exams.every(score => score > 80)
some- similar to every, but returns true if ANY of the array elements pass the test function

const allEvens = arr => arr.every(num => num % 2 === 0)
||
function allEvens(arr) {
    return arr.every(function(num){
        return num % 2 === 0
    })
}

Reduce- executes a reducer function on each element of the array, resulting in a single value.

summing an array
[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});