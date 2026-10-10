// alert("Hello")
let button = document.getElementById("btn")


function rando(){
    let val1 = Math.ceil(Math.random()*255);
    let val2 = Math.ceil(Math.random()*255);
    let val3 = Math.ceil(Math.random()*255);
    return `rgb(${val1}, ${val2}, ${val3}`
}

button.addEventListener("click", ()=>{
    button.style.backgroundColor = rando()
})