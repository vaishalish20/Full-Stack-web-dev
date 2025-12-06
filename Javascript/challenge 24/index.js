const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
// note; providing this function multiple parameters
function greetUser(greeting,username){
    welcomeEl.textContent = greeting + " " + username;
}

greetUser("Hello","Noddy");