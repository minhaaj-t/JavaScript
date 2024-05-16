const CountNum = document.getElementById("CountNum");
const Decrease = document.getElementById("Decrease");
const Reset = document.getElementById("Reset");
const Increase = document.getElementById("Increase");
count = 0;

Decrease.onclick = function() {
    count++;
    CountNum.textContent = count;
} 

Reset.onclick = function() {
    count = 0;
    CountNum.textContent = count;
} 

Increase.onclick = function() {
    count--;
    CountNum.textContent = count;
} 