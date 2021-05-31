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
