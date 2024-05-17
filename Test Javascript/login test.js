let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if(username === "Minhaj" && password === "password") {
        loggedIn = true;
        console.log("You are right!");
    }
    else{
        console.log("You are wrong!");
    }
}