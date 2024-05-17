// Number guess game
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){
    
    guess = window.prompt('guess a number between');
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("Please Enter a Valid Number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert('Please enter a valid number');
    }
    else{
        attempts++;
        if(guess<answer){
            window.alert("Too low number");
        }
        else if(guess>answer){
            window.alert("Too high number");
        }
        else{
            window.alert('correct!');
            running = false;
        }
    }
}
