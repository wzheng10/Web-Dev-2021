// const password = prompt("Enter your password");

// if (password.length >= 6 && password.indexOf(' ') === -1 ) {
//     console.log("VALID PASSWORD!")
// } else {
//     console.log("Password is invalid")
// }

// 0 - 5 - FREE
// 5 - 10 CHILD $10
// 10 - 65 ADULT $20
// 65+ SENIOR FREE

// const age = 54;
// if (age > 0 && age < 5 || age >= 65) {
//     console.log("FREE")
// } else if (age >=5 && age < 10) {
//     console.log("$10")
// } else if (age >= 10 && age < 65 ) {
//     console.log("$20") 
// } else {
//     console.log("Invalid Age")
// }

// const firstName = prompt("enter your first name");
// if (!firstName) {
//     firstName = prompt("TRY AGAIN!!!")
// }


// const age = 64;
// if (!(age > 0 && age < 5 || age >= 65))
// console.log("YOU ARE NOT A BABY OR A SENIOR")

const day = 6;
if (day === 1) {
    console.log("MONDAY")
} else if (day === 2) {
    console.log("TUESDAY") 
} else if (day == 3) {
    console.log("WEDNESDAY") 
} else if (day === 4) {
    console.log("THURSDAY")
} else if (day === 5) {
    console.log("FRIDAY")
} else {
    console.log("I DONT KNOW THAT!")
}

switch(day) {
    case 1:
        console.log("HELLO!");
        break;
    case 2:
        console.log("HELLO!!");
        break;
    case 3:
        console.log("HELLO!!!");
        break;
    case 4:
        console.log("HELLO!!!!");
        break;
    case 5:
        console.log("HELLO!!!!!");
        break;
    case 6:
    case 7:
        console.log("WEEKEND");
        break
    default:
        console.log("I DO NOT KNOW THAT")        
}