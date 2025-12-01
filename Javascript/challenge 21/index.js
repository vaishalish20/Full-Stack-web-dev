// template strings/literals

const recipient = "James"

// Create a new variable, sender, and set its value to your name
const sender = "Noddy"
// Use your sender variable instead of "Per"

// Refactor the email string to use template strings
// const email = "Hey " + recipient + "! How is it going? Cheers Per"
const email = `
Hey ${recipient}! 
How is it going? Cheers 
${sender}`

console.log(email)