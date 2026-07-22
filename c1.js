let display=document.getElementById("display");

function appendValue(value){
    display.value+=value;
}

function clearDisplay(){
    display.value=" ";
}

function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function changeColor() {
    document.body.classList.toggle("color-theme");
}