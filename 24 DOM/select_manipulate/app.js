// SELECTING
// const allImages = document.getElementsByTagName('img');
// for (let img of allImages){
//     img.src = 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
// }

// const squareImages = document.getElementsByClassName('square');
// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg'

// }

// const links = document.querySelectorAll('p a');

// for(let link of links) {
//     console.log(link.href)
// }

//MANIPULATING
const allLinks = document.querySelectorAll('a');
// for(let link of allLinks){
//     link.innerText = 'I AM A LINK!!!'
// }

//inline styles
for(let link of allLinks) {
    link.style.color = 'cyan'
    link.style.textDecorationColor ='magenta'
    link.style.textDecorationStyle ='wavy'
}
