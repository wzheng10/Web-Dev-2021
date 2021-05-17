Javascript Strings
**Crucial!**
String Basics
Indices and Length
Undefined & Null
String Methods
String Template LIterals

*Important*
Random Numbers and the Math Object

Strings- are antoher primitive type in JS.
-They represent text and must be wrapped in quotes.

Can use double quotes or single quotes but not a combination of both
Ex.
let firstName = "Ziiggy";
let lastName = 'Zaney';

Strings are indexed- meaning each character has a corresponding index position
Chicken has 6index positions starting from 0
C = 0
H = 1
I = 2
C = 3
K = 4
E = 5
N = 6
let word = "CHICKEN";
word[0] = C
word[6] = N

can use .length to find the number of characters(also counts spaces)
index is one less than the length

**String Methods**
methods are built0in actions we can perform with individual strings

-seach within a string
-replacing part of a string
-changing the casing of a string

Casing
.toUpperCase()
.toLowerCase()
.trim()

thing.method(arg)
-some methods accept arguments that modify their behavior.
-inputs that we can pass inside of the parentheses

.indexOf('string')
.slice(beginIndex[, endIndex]) #[, endIndex] is optional

.replace('string','replaced word')
.replaceAll('string','replaced word')
.repeat(num of times)

Template Literals
-strings that allow embedded expressions, which will be evalutated and then turned into a resulting string
`I counted ${3 +4} sheep`; #= "I counterd 7 sheep"
-we use back-ticks, not single quotes 

Before:
let produce = 'Artichoke';
undefined
let price = 2.25;
undefined
let qty = 5;
undefined
"You bought " + qty + " " + produce + ". Total is: " + price * qty
"You bought 5 Artichoke. Total is: 11.25"

After
`You bought ${qty} ${produce}. Total is: $${qty * price}.`
"You bought 5 Artichoke. Total is: $11.25."
embedding variables directly inside a string

Null & Undefined
-Null is the "Intentional absence of any value" and must be assigned
-Undefined is the variable that do not have an assigned value 

Math Object- collection of properties and methods for mathematical constants and functions
Ex.
Math.PI
Math.round
Math.abs
Math.pow

Random Numbers-
Math.random() gives us a random decimal between0 and 1 (non-inclusive)

to generate a random number between 1 to 10
const step1 = Math.random()); #gets a random decimal number between 0 and 1
const step2 = step1 * 10    
const step3 = Math.floor(step2);    #removes the decimal numbers
const step4 = step3 + 1;        #
OR
Math.floor(Math.random() * 10) + 1; can choose the range of the number and where the number begins 
