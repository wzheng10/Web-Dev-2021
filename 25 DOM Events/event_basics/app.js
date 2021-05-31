const btn = document.querySelector(`#v2`);

btn.onclick = function(){
    console.log('YOU CLICKED ME!!')
    console.log('I hoped it worked :D')
}


function scream(){
    console.log('AAAAAAAAAAAAAA')
    console.log('stop touching me!!!!!!!')
}
btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!')
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('mouseup', function() {
    alert('Clicked!')
})

function twist() {
    console.log("TWIST!")
}

function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas');
tasButton.addEventListener('click', twist, {once: true})
tasButton.addEventListener('click', shout)

tasButton.addEventListener('click', () => {
    console.log("YERRRRRRR!")
})