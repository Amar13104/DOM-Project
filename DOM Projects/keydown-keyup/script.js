const container = document.getElementById('container');
const display = document.getElementById('display');

document.addEventListener("keydown" , (e)=>{
    display.style.color="red";
    display.innerText=e.key + "is key down";
})

document.addEventListener("keyup" , (e)=>{
    display.style.color="green";
    display.innerText=e.key + "is keyup";
})