JavaScript Decision Making

**Crucial!**
-Comparison Opertatiors
-Running JS from a File
-Conditionals: If, Else-If, and Else
-Truth-y and False-y Values
-Logical AND
-Logical OR
-Logical NOT

Comparison Operators
// > greater than
// < less than
// >= greater than equal to
// <= less than equal to
// == equality
// @= not equal
// === strict equality
// !== strick non-equality

Unicode assigned values makes these true
'A' < 'a'
true
'@' < 'A'
true

== (double equals)
-checks for equality of value, but not equality of type.
-it coerces both alues to the same type and then compares them
-this can lead to some unexpected results

Ex.
1 == 1
true
1 == '1' // a number(Int) is compared to a string
true

Other weird things
null == undefined;  //true
0 == false  //true

Triple Equals - checks for equality of both value and type
1 === '1' // false
0 === false // false

**take away: always use triple equals(===)/strick non-equality(!==)**\

Console, Alert & Prompts
console.log() - prints arguments to the console
alert("some message")- will create an 'alert'
prompts("")- will require an input
parseInt(userInput)- will convert the string to a Int

Running JS from a Script
-Write your code in a .js file, then include your script in a .html file
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <script src="app.js"></script>   //<-------- .js file linked
</body>
</html>

**JS files should be at the very bottom of your body**

Conditional Statmentes

- If Statement- only runs code if given condition is true
Ex.
let rating = 3;
if (rating === 3) {
    console.log(" YOU ARE A SUPERSTAR!")
}

- Else If statments- if not the first thing, maybe this other thing??
Ex.
else if (rating === 2) {
    console.log("MEETS EXPECTATIONS");
}

- Else Statement- if nothing else was true, then do this...
works as a catch all
Ex.
 else {
    console.log("MEH")
}

Nesting - we can nest conditionals inside conditionals

Truthy and Falsy Values
- all JS values have an inherent truthyness or falsyness about them
Falsy values:
-false
-0
-""(empty string)
-null
-undefined
-NaN (not a number)
**Everything else is truthy!**

Logical Operators- comibining expressions
&& (and)- both sides must be true, for the entire thing to be true
    -if the left side is false, then it will not run the second part
|| (or)- if one side is true, then the entire thing is true
    -while using && with || the && will run first
! (not)- will reverse the boolean value
Ex. !false //=true

Switch- the switch statement is another control-flow statement that can replace multiple if statements.
switches will need to include "break" to stop it
default is the equalivent of else