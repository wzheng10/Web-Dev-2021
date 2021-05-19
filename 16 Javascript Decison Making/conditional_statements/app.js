let random = Math.random();
if (random < 0.5) {
    console.log("Your number is less than 0.5")
} else {
    console.log("Your number is greater than 0.5")    
}
console.log(random)

// if (random >= 0.5) {
//     console.log("Your number is greater than 0.5")
//     console.log(random)
// }

// const dayOfWeek = prompt('ENTER A DAY').toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("UGHHH I HATE MONDAYS")
// } else if (dayOfWeek === 'saturday') {
//     console.log("YAYA I LOVE SATURDAYS")
// }else if (dayOfWeek === 'friday') {
//     console.log("Fridays are decent, especially after work")
// // else if (dayOfWeek === 'Tuesday') {
// //     console.log("MEH")
// // }else if (dayOfWeek === 'Wednesday') {
// //     console.log("MEH")
// // }else if (dayOfWeek === 'Thursday') {
// //     console.log("MEH")
// } else {
//     console.log("MEH")
// }

// 0 - 5 - FREE
// 5 - 10 CHILD $10
// 10 - 65 ADULT $20
// 65+ SENIOR $10

// const age = 100;

// if(age < 5) {
//     console.log("You are a baby. You get in for free.")
// } else if (age < 10) {
//     console.log("You are a child. You must pay $10.")
// } else if ( age < 65) {
//     console.log("You are an adult. You msut pay $20.")
// // } else if (age >= 65) {
// //     console.log("You are a Senior. You must pay $10.")
// // }
// } else{
//     console.log("You are a Senior. You must pay $10")
// }

const password = prompt("please enter a new password");

//Password must be 6+ chracters
if (password.length >= 6) {
    //Password cannot include space
    if (password.indexOf(' ') === -1) {
        console.log("You do not have a space. Password is valid!")
    } else {
        console.log("You have a space. Password is not valid!!!")
    }
} else {
    console.log("Password is not nearly as long enough. 6+ chracters")
}    
