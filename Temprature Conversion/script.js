const textBox = document.getElementById("textBox");
const Farnheit = document.getElementById("Farnheit");
const Celcius = document.getElementById("Celcius");
const result = document.getElementById("result");
let temp;

function convert() {
    if(Farnheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 /5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(Celcius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "mane maande ath";
    }

}