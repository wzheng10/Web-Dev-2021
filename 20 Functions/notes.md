Introducing Functions

**Crucial!**
Working With Arguments
Fucntion Return Values
Defining Functions
Function Exercises

Functions are reusable procedures
    -allows us to write reasurable, modular code
    -we define a 'chunk' of code that we can then execute at a later point.
    - we use functions all the time

2 Step Process
Define and then Run
to define a function

Ex.
function funcName() {
    \\do something
}

functions grumpus () {
    console.log('ugh...you again')
}

to run the functions
funcName(); //run once
funcName(); //run again!

*we can also write functions that accept inputs, called arguments*

greet('Wei')
arguemnt is what we pass into the function

parameter is the functions we use as a placeholder

Return-
    built-in method return values when we call them and store them as well

return is how we get values out of a function and save them


**condition ? expression_1 : expression_2;**
The JavaScript ternary operator is the only operator that takes three operands.

The condition is an expression that evaluates to a Boolean value, either true or false. If the condition is true, the ternary operator returns expression_1, otherwise it returns the expression_2

blocks - the code in between the curly braces { } 
block scopes - can only be accessibly inside the block and cannot be called from outside
lexical scope- all the inner layers are able to access the outer layer but not the other way around
var makes the varaible accessible outside of the blocks