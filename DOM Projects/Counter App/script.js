const decrementbtn = document.getElementById("decrementbtn");
const incrementbtn = document.getElementById("incrementbtn");
const resetbtn = document.getElementById("resetbtn");
const display = document.getElementById("display");

// for decrement

decrementbtn.addEventListener("click" , () => {
    const value = Number(display.innerText);
    if(value > 0){
        display.innerText = value - 1;
    }
    else{
        alert("negative value are not allowed");
    }
});

// for increment


incrementbtn.addEventListener("click" , () => {
    const value = Number(display.innerText);
    if(value >= 10){
        alert("greater than 10 number are not allowed");
    }
    else{
        display.innerText = value + 1;
    }
});
  
// for reset 

resetbtn.addEventListener("click" , () => {
    display.innerText = 0 ;
});