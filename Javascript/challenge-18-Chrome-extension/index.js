// Create two variables:
// myLeads -> should be assigned to an empty array
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
// inputEl -> should be assigned to the text input field
//note: using const datatype instead of let to not change its value
const inputEl =  document.getElementById("input-el")
const inputBtn =  document.getElementById("input-btn")

// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el")
// Push the value "www.awesomelead.com" to myArray when the input button is clicked
inputBtn.addEventListener("click", function (){
    // myLeads.push("www.awesomelead.com")  

    // Push the value from the inputEl into the myLeads array 
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    myLeads.push(inputEl.value)
    console.log(myLeads);
})
// Render the leads in the unordered list using ulEl.textContent
for(let i=0;i < myLeads.length;i++){
    // console.log(myLeads[i]);   
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>" ;
    
}

