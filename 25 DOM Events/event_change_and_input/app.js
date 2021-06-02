const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// input.addEventListener('change', function(e){
//     console.log("whatever")
// })

input.addEventListener('input', function(e){

    h1.innerText = `Welcome, ${input.value}`
    
})


const input = document.querySelector("input");
const h1 = document.querySelector("h1");
 
input.addEventListener("input", function () {
  if (input.value === "") {
    h1.innerText = `Enter Your Username` 
  } else {
    h1.innerText = `Welcome, ${input.value}`;
  }
});


