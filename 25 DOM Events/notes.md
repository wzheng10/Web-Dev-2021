The Missing Pieces: DOM Events

**Crucial!**
Introducing Events
addEventListener (important)
Form Events

*Important*
Keybaord Events
Input & Change Events
Event Bubbling
Event Delegation

## Events ##
    Events respond to user inputs and actions
A Small Taste
    clicks
    drags
    drops
    hovers
    scrolls
    form submission
    key presses
    focus/blur
    mouse wheel
    double click
    copying
    pasting
    audio start
    screen resize
    printing

## Inline Events ##
<button onclick="alert('You clicked me !'); alert('stop clicking me')">Click me too!</button>
not the best and is very repetitive 

## Onclick Property ##
.onclick- triggers whatever function is over it once you click
Ex.

const btn = document.querySelector(`#v2`);
btn.onclick = function(){
    console.log('YOU CLICKED ME!!')
    console.log('I hoped it worked :D')
}
.onmouseenter- triggers the function when mouse is hovered over it
Ex.

function scream(){
    console.log('AAAAAAAAAAAAAA')
    console.log('stop touching me!!!!!!!')
}
btn.onmouseenter = scream;      //function does not have to be attached directly to it

addEventListener- specify the event type and a callback to run

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function() {
    alert('Clicked!')
})

cannot have two callback property
const tasButton = document.querySelector('#tas');
tasButton.onclick = shout
tasButton.onclick = twist

unless you use .addEventListener

## Change and Input Events ##
const input = document.querySelector('input');

input.addEventListener('change', function(e){
    console.log("whatever")
})      
//  will result in console.log to trigger when leaving the text box

const input = document.querySelector('input');

input.addEventListener('input', function(e){
    console.log("INPUT EVENT!")
})
//things that do impact the value inside the textbox will now trigger the console.log

Excercise 62 
* creating an input to say
    1. "Enter Your Username" when text is blank
    2. Start off with 'Welcome' during text
    
const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('input', function(e){
    if (input.value === "") {
    h1.innerText = "Enter Your Username";
    } else { 
        h1.innerText = `Welcome, ${input.value}`}
})

## Event Bubbling ##
<body>
    <section onclick="alert('section clicked')">
        <p onclick="alert('paragraph clicked')">
            I am a paragraph:
            <button onclick="alert('button clicked')">Click</button>
        </p>
    </section>
    <script src="app.js"></script>
</body>

Button is triggered, then paragraph and lastly section
Event bubbles to the top, so order matters
## Event Delegation ##
    -we are going to add EventListener a parent of our li's in this case after the fact when it is newly created
tweetsContainer.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove();
})
//the target found in the event object(e) is what identifies what to delete(in this case the 'LI')
// it would delete all the newly created 'tweets' as well as the old ones, but non li's such as paragraghs would also be removed 
//hence we add the .nodeName to only target 'LI' types

-With the *nodeName* inside the remove condition, the tags ('li') are always capitalized. nodeName returns in uppercase on HTML elements in DOMs flagged as HTML documents, we have to match the letter capitalization inorder to make teh JS string comparison.

The use of && operations between two conditions is that only the second condition is only performed/checked when whatever the first condition is true.
Another way of writing is:
if(e.target.nodeName === 'LI') e.target.remove();

*The &&-operators evaluates the left hand side expression if it is falsy, otherwise to right hand side expression.*
const sessionId = request.session && request.session.id;
*The ||-operator evaluates to left hand side expression if it is truthy, otherwise to right hand side expression.*
Ex: const name = user.name || 'Guest'

*The e parameter represents the event object which the browser will automatically pass to our event listener callback function.(contains details about the specific browser event that happened.)

event object (e or evt)- contains information about the object
Ex.
const input = document.querySelector('input');
input.addEventListener('keydown', function(e){
    console.log(e.key)      //  prints the key entered
    console.log(e.code)     //  prints the key entered
})

e.preventDefault-
    stops the default action of an element from happening
    Ex. -prevents a submit button from submitting a form
        -prevent a link from following the URL.