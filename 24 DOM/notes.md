Introducing The WOrld of The DOM


**Crucial!**
Intro to the DOM
getElementByld
querySelector
InnerHTML and Text
Changing Styles
classList
Creating/Removing Elements

*Important*
Manipulating Attributes
Traversing the DOM


THE DOM (document object model)
    -combines JS with HTML/CSS
    -the DOM is a JS representation of a webpage.
    -it's your JS 'window' into the contents of a webpage
    -simply put a bunch of objects that you can interact with via JS

HTML + CSS Go In .... JS Objects Come Out

THe Documents - is our entry point into the world of the DOM.
    -contains represtations of all the content on a page, plus tons of useful methods and properties

SELECTING- using JS to single out a single element of a type and manipulate them
    1. getElementByld - returns an element object representing the element whose id property matches the specified string
    2. getElementByTagName- selects by Tag name and returns an HTML collection
    3. getElementByClassName- selects by class name returns an HTML collection

    const banner = document.getElementById('banner')
    consle.dir(banner) - will display an interactive list of the propertis of the specified JS object
are all elements but not in an array

querySelector - a newer, all-in-one method to select a single element
    -only gives the first matched one

-finds first h1 element:
document.querySelector('h1');
-finds first element with ID of red:
document.querySelector('#red');
-finds first element with class of big
document.querySelector('.big');

-selecting anchor tag with a title of 'Java'
document.querySelector('a[title= "Java"]')

querySelectorAll- samething as querySelector , but returns a collection of matching elements

MANIPULATING

Properties & Methods (the important ones)
classList
getAttribute()
setAttribute()
appendChild()
append()
prepend()
removeCHild()
remove()
createELement
innerText
textContent
inerHTML
value
parentELemetn
children
nextSibling
previousSibling
style


innerText- shows the text but not everything. does not retreive information as much
    Ex. document.querySelector('p').innerText  // can look up the first parargraph 
        document.querySelector('p').innerText = 'lolololol' // rewrites the the paragraph or whatever 'p' was to 'lolololol'
textContent- acts like innerText and shows where the markup is ,but not exactly all the details
innerHTML- shows the entirety of where each tag and markup is exactly on the .html file and also add html elements
    Ex. document.querySelector('h1').innerHTML = '<i>Silkie</i>'
    -the DOM will recognize the <i> and adjust it 
    the . will retreive the information and the = updates the information


Attributes
document.querySelector('a').title  //"List of chicken breeds"
document.querySelector('a').href    //"file:///C:/wiki/List_of_chicken_breeds"

.getAttribute()
.setAttribute()

const firstLink = document.querySelector('a')
firstLink.href  // "file:///C:/wiki/List_of_chicken_breeds"
firstLink.getAttribute('href')  //  "/wiki/List_of_chicken_breeds"
const firstLink = document.querySelector('a')
firstLink.setAttribute('href', 'http://www.google.com') // sets the link to google instead of the "wiki/List_of_chicken_breeds"

(does the same but the latter is the prefer method of selection)
document.querySelectorAll('input')[1] // <input type="text">
document.querySelector('input[type="text"]') //<input type="text">

const input = document.querySelector('input[type="text"]') 
input.type // 'text'
input.type = 'password' // changes text to password type
input.type = 'color' // changes it to color spectrum
input.setAttribute('type', 'text') // sets it back to a 'text'

Ex 54
const chicken = document.querySelector('img');
chicken.src = 'https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg'
chicken.alt = 'chicken'

Changeing Stlyes
h1.style.color ='green'
h1.style.fontSize = '3em'
h1.style.border = '2px solid pink'

making inline style changes is not the best

CSS style declration
const h1 = document.querySelector('h1')
window.getComputedStyle(h1) 
window.getComputedStyle(h1).margin

Ex 55:
const container = document.querySelector('#container')
const image = document.querySelector('img')
container.style.textAlign = 'center'
image.style.width = '150px'
image.style.borderRadius = '50%'

Ex 56:
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
document.querySelectorAll('span')[0].style.color = colors[0];
document.querySelectorAll('span')[1].style.color = colors[1];
document.querySelectorAll('span')[2].style.color = colors[2];
document.querySelectorAll('span')[3].style.color = colors[3];
document.querySelectorAll('span')[4].style.color = colors[4];
document.querySelectorAll('span')[5].style.color = colors[5];
document.querySelectorAll('span')[6].style.color = colors[6];

//YOU CODE GOES HERE:
const span = document.querySelectorAll('span');

for (let i = 0; i <= span.length; i ++) {
    span[i].style.color = colors[i];
}

//YOU CODE GOES HERE:
const spans = document.querySelectorAll('span');

let i = 0;
for (let span of spans){
    span.style.color = colors[i];
    i++
}

.classList- object we can interact with to control/manipulate classes on an element
Ex.
const h2 = document.querySelector('h2')
h2 // now is set to the 'h2' <h2 id=​"mw-toc-heading">​Contents​</h2>​
h2.getAttribute('class') // returns 'null'
h2.setAttribute('class', 'purple') // h2 is now purple
h2.setAttribute('class', 'border') // h2 now had a border but loese the purple from previous
//Doing this will allow the use of two different attributes but it's clunky and messy to write out
let currentClasses = h2.getAttribute('class')
h2.setAttribute('class', `${currentClasses} purple`)

//with .classList, we can add multiple different classes without it overriding one another
let h2 = document.querySelector('h2')
h2.classList.add('purple')  -adds purple
h2.classList.add('border')  -add border
h2.classList.remove('border') -removes border 
h2.classList.toggle('purple') - toggle turns on and off

Ex 57:
const high= document.querySelectorAll('li')

for (let i = 0; i <high.length; i++){
    high[i].classList.toggle('highlight')
}

for (let i of high){
    i.classList.toggle('highlight')
}

Traversing Parent/Child/Sibling
.parentElement- will traverse upward
Ex.
const firstBold = document.querySelector('b') //saving the first bold element <b>Silkie</b>
firstBold.parentElement // shows the parent element the <p>...</p>
firstBold.parentElement.parentElement // will show the parent of the paragragh tag which is the <body>...</body>

.childElementCount- shows the number of child elements there are
.children- shows the HTMLCollection (appears like an array ,but is not an array)
const paragraph = firstBold.parentElement
paragraph.childElementCount // 8
paragraph.children // HTMLCollection(8) [b, b, a, a, a, a, a, a]
paragraph.children[0] // <b>Silkie</b>

.nextSibling
.previousSibling- gives us the corresponding node (white spaces)

.nextElementSibling- to get to the previous element sibling
.previousElementSibling- to get to the next element sibling

Append & AppendChild
    Adding a Photo with .appendChild
const newImg = document.createElement('img')
newImg.src = 'some random link'
document.body.apppendChild(newImg)  // will add the img to the page
newImg.classList.add('square')  // will format it to the 'square' class in the .css file
    Adding a Text with .appendChild
const newH3 = documen.createElement('h3')
newH3.innerText = "I am new!"
document.body.appendChild(newH3) // displays 'I am new!' at the bottom of the page

    Using append and prepend- easy way to add text to the end of something
const p = document.querySelector('p')
p.append('i am new text yaaaaaaaaay!!!')    // the pargraph p now contains the msg at the end
p.prepend('i am new text yaaaaaaaaay!!!')   // does the same thing but to the front of the paragraph

    creating a bold tag
const newB = document.createElement('b')
newB.append('Hi!')  // newB now display <b>Hi!</b>
p.prepend(newB) // the bold Hi! will now show up in the front of the paragraph 

    .insertAdjacentElement(var1, var2)
        'beforebegin': Before the targetElement itself.
        'afterbegin': Just inside the targetElement, before its first child.
        'beforeend': Just inside the targetElement, after its last child.
        'afterend': After the targetElement itself.

const h2 = document.createElement('h2') //creating the new h2 element
h2.append('Are adorable chickens')  // create the message for the h2 element <h2>Are adorable chickens</h2>
const h1 = document.querySelector('h1') //create a varaible for the h1
h1.insertAdjacentElement('afterend', h2)    //inserting the h2 after the h1
const container = document.querySelector('#container');


Ex 58:
for (let i = 0; i < 100; i++){
    const button = document.createElement('button');
    button.innerText = ('Hey!');
    container.appendChild(button); 
}

removeChild() & remove()
removeChild() method removes a child node from the DOM and returns the removed node.
    -is a janky old method
Ex.
    const firstLi = document.querySelector('li')
    const ul = firstLi.parentElement
    ul.removeChild(firstLi)     //needs the parent in order to remove the child

remove()- method removes the object from the tree it belongs to
    -no hassle of the parent and child 
Ex.
    const img = document.querySelector('img')
    img.remove()