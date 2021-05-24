Repeating Stuff With Loops
**Crucial!**
-For Loops
-While Loops
-The Break Keyword
-For...Of Loop
-Iterating Arrays
*Important*
-Nested Loops
*Nice to Have*
-Iterating Objects

Loops
    -alows us to repeat code
Types of loop
1. for loop
a for loop will repeat until a specified condition evaluates to false
    for ([initialExpression]; [conditionExpression]; [incrementExpression])
        statement

2. while loop
a while loop executues it statments as long as a specified condition evalutates to true or it will be passed to the following while statement
    while (condition)
        statement
3. for...of loop
a for...of statement creates a loop iterating over iterable objects, invoking a custom iteration hook with statements ot be execute for the value of each distinct property
    for (variable of object)
        statement
4. for...in loop
a for...in statement iterates a specified variable over all the enumberable properties of an object
    for (variable in object)
        statement

for...in iterates over property names, for...of iterates over property values
**break statements**
using the break statement to terminate a loop
break; at the end of the condition will stop the loop



For Loop Syntax
for (
    [initialExpression];
    [condition];
    [incrementExpression]
)
Ex. 
for (let i = 25; i >= 0; i -= 5) {
    console.log(i)
}
<!-- 25
20
15
10
5
0 -->

Looping Over Arrays
to loop over na array, start at index 0 and continue looping to until last index (length -1)
Ex.
const animals = [ 'lions', 'tigers', 'bears'];

for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i])
}
0 "lions"
1 "tigers"
2 "bears"

**Template Literals**
-string literals alowwing embedded expressions
Ex.
`string text ${expression} string text`

While Loops
-will continue running as long as the tet condition is true

let num = 0;
while (num < 5){
    console.log(num)
    num ++
}

parseint('anything') will show NaN if the input is not a number

For...Of
-a nice and easy way of iterating over arrays (or other iterable ojbects)
Note* It is not internet explorere supported
Ex.
for (variable of iterable) {
    statement
}

Iterating Objects
Object.values()
Object.keys()
Object.entries()

Project Time
Todo List
'new'- Add A Todo
'list'- LIst All Todos
'delete' -Remove Specifiec Todo
'quit' -Quit App