// Create two variables:
// myLeads -> should be assigned to an empty array
let myLeads = [];
// inputEl -> should be assigned to the text input field
//note: using const datatype instead of let to not change its value
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el")
// Push the value "www.awesomelead.com" to myArray when the input button is clicked
inputBtn.addEventListener("click", function () {
    // myLeads.push("www.awesomelead.com")  

    // Push the value from the inputEl into the myLeads array 
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    myLeads.push(inputEl.value)
     // 2. Call the renderLeads() function
     renderLeads()
})


// Render the leads in the unordered list using ulEl.textContent
// Replace .textContent with .innerHTML and use <li> tags



// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
// 1. Wrap the code below in a renderLeads() function
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // console.log(myLeads[i]);   
        // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>" ;
        listItems += "<li>" + myLeads[i] + "</li>";
        // create element
        // set textcontent
        // append in ul

        // const li = document.createElement("li");
        // li.textContent = myLeads[i];
        // ulEl.append(li)
       

    }
    // 3. Render the listItems inside the unordered list using ulEl.innerHTML
    ulEl.innerHTML = listItems;
}
