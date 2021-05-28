Newer JS Features

**Crucial!**
Spread with Arrays
Spread in Function CAlls
Spread with Objects

*Important*
Default Params
Destructuring
Rest Params

Default Params (The Old Way)
function rollDie(numSides){
    if(numSides === undefined) {
        numSides = 6
    }
    return Math.floor(Math.random() * numSides) + 1
}
New Way
function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}
-Must watch out for order
function greet(person, msg = 'Hey there', puncuation = '!') {
       console.log( `${msg}, ${person} ${puncuation}`)
} // just puting in the msg parameter before the name will mess up the order

Spread- spread syntax allows an interable such as an array to be expanded in places where zero or more arugments (for function calls) or elements ( for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are exprected.

-for function calls: expands an iterable (arra, string, etc) into a list of arguments
Ex.
const nums = [9,3,2,8];
Math.max(nums); //NaN
Math.max(...nums); //9

using ... can iterate though all elements
can also combine them into a single array
Ex. 
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt']
const allPets = [...cats, ...dogs] // ["Blue", "Scout", "Rocket", "Rusty", "Wyatt"]

strings
[...'hello'] // ["h", "e", "l", "l", "o"]

Spread In Object Literals - copies properties from one object into another object literal.
for objects with the same variables being merged, it takes the later one

{} = objects
[] arrays

REST- looks like spread, but it's not !
REST PARAMS- collects all remaining arguments into an actual array

Destructuring- short clean syntax to 'unpack';
    -values from arrays
    -properties for objects
into distinct variables

*Destructuring Arrays* -based off order
const scores = [1, 5, 6, 8, 10]
const [gold, silver, ...purple] = scores;

//gold = 1
//silver = 5
//purple = 6, 8, 10


*Destructuring Objects* - not based on order
const user = {
    emails: 'abc123@gmail.com',
    password: 'sadlfkjasd',
    born: 1932,
    died: 1959
}

const {email, born, died} = user;
reassignment of variable names
const {email: address} = user;
    -if we want access to email, it will be called address by using the colons
const {email = cde456@gmail.com} = user;
    -to change the values of the email to another one with an - sign

