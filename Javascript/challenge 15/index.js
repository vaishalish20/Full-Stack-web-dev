let hasCompletedCourse = true;
let givesCertificate = false;

function generateCertificate() {
    if(hasCompletedCourse === true && givesCertificate === true)
    console.log("Generating cerificate");
    
}



generateCertificate()


// ====================================

let hasSolvedChallenge = true
let hasHintsLeft = false

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function

if(hasSolvedChallenge !== true && hasHintsLeft !== true){
    showSolution();
}
function showSolution() {
    console.log("Showing the solution....")
}

// Note: And means both the condition should be true and in case of OR either of the conditions are true.

// =================================================

// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

let likesDocumentaries = false;
let likesStartups = true;

if (likesDocumentaries === true || likesStartups === true){
    recommendMovie();
}
function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}