// function singSong() {
//     console.log('DO')
//     console.log('RE')
//     console.log('MI')
// }
// //to run a function you type into console 'singSong()'
// singSong()
// singSong()
// singSong()

// function greet() {
//     console.log('hi')
// }

// function greet(person) {
//     console.log(`Hi, ${person}!`);
// }

// greet('Arya');
// greet('Wei');

function rant(message) {
    console.log(`${message.toUpperCase()}`)
}

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

function repeat(str, num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += str
    }
    console.log(result);
}

function add(x, y) {
    // console.log(x + y);
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false
    } else {

        let sum = x + y;
        return sum;
        console.log("END OF FUNCTION!!!")
    }
}

function capitalize(str) {
    let restWord = str.slice(1);
    let firstLetter = str.slice(0, 1).toUpperCase();
    return firstLetter + restWord;
}

function sumArray(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// DEFINE YOUR FUNCTION BELOW:
function returnDay(num) {
    const week = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"]
    if (num > 7 || num < 1) {
        return null;
    }
    else {
        return week[num - 1]
    }
}