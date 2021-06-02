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