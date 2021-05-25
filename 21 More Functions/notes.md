Leveling up Functions

**Crucial!**
Function Scope
Block Scope
Lexical Scope
Function Expressions
Higher Order FUnctions
Adding Methods to Objects
*Important*
The Keyword "this"
Returning Functions

Function Scope- variable "visilibity"
    The location of where a variable is defined dictates where we have access to that variable

Function Expressions
    -storing a function in a variable

functions are values in js we can store or passaround like a number or array

Higher Order Functions
    -functions that can operate on/with other functions
    -should be able to accept other functions as arguments and return a function


Methods- a functions that had been places ad a property on an object
    -functions and objects to form methods
    -every methods is a functions but not every function is not a method
    Ex: Math holds a ton of methods

'THIS' in Methods - use the keyword this to access other properties on the same object

    the value of this depends on the invocation context of the functio it is used in.
    const meow2 = cat.meow;
    meow2() // says MEOWWW
    cat.meow() // Blue Steele says MEOWWW

Console.log() is mainly used for debug mode, to understand the status / value of a variable etc.
Let's say that return is applied for all cases where the data with the related routines have previously been successfully verified.

Statment Try/Catch
try {
    intended error;
} catch {
    console.log("ERROR!!!!!) //will print this instead of the default red error msg
}