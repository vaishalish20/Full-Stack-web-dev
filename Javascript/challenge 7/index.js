//rendering the welcome message

// grab the welcomeel paragraph and store it in a variable called welcomeEl
let welcomeEl=document.getElementById("welcome-el")

// create two variables name and greetings
let name = "noddy"
let greeting = "Welcome back "

welcomeEl.innerHTML = greeting + name

// want to add emoji

// welcomeEl.innerHTML =welcomeEl.innerHTML + "👋"
// short hand
welcomeEl.innerHTML += "👋"
