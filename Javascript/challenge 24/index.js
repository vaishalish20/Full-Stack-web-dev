const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
// note; providing this function multiple parameters

// adding template literals to avoid + when adding more variables
// add the ability to add an emoji too to this function
function greetUser(greeting,username, emoji){
    welcomeEl.textContent = `${greeting} ${username} ${emoji}`;
}

greetUser("Hello","Noddy","👋");

// ======================================================================================

