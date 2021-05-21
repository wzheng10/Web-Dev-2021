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
2. while loop
3. for...of loop
4. for...in loop

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