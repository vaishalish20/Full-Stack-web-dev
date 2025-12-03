// Create two variables:
// myLeads -> should be assigned to an empty array
let myLeads = ["www.googly.com"];

// 1. Turn the myLeads string into an array
// 2. Push a new value to the array
// 3. Turn the array into a string again
// 4. Console.log the string using typeof to verify that it's a string

// myLeads = JSON.parse(myLeads)
// console.log(myLeads);

// myLeads.push("www.hello.com")
// console.log(myLeads);

// myLeads = JSON.stringify(myLeads)
// console.log(myLeads);
// console.log(typeof myLeads);





// inputEl -> should be assigned to the text input field
//note: using const datatype instead of let to not change its value
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el")
// Push the value "www.awesomelead.com" to myArray when the input button is clicked

// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
// Log out the variable
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// console.log(leadsFromLocalStorage);
// 1. to check truthly of leadsFromLocalStorage
if(leadsFromLocalStorage){
    myLeads = localStorage
    renderLeads()
}
// 2. if so set myLeads to its value and call renderLeads()



inputBtn.addEventListener("click", function () {
    // myLeads.push("www.awesomelead.com")  

    // Push the value from the inputEl into the myLeads array 
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    myLeads.push(inputEl.value)
    // Clear out the leads
    inputEl.value = ""
    // Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads))


    // 2. Call the renderLeads() function
    renderLeads()
    //  // Clear out the leads
    //      inputEl.value = ""

    // To verify that it works:
console.log(localStorage.getItem("myLeads"));

})
// localStorage.setItem("myLeads", "www.example.com")
// console.log(localStorage.getItem("myLeads"));

// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage
// localStorage.setItem("myName", "Noddy");
// console.log(localStorage.getItem("myName"));
// localStorage.clear()
// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings


// Render the leads in the unordered list using ulEl.textContent
// Replace .textContent with .innerHTML and use <li> tags
// function renderLead(){
//     let listItem = "<li>" + inputEl.value + "</li>";
//     ulEl.innerHTML += listItem;
// }


// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
// 1. Wrap the code below in a renderLeads() function
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // console.log(myLeads[i]);   

        // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>" ;
        // Wrap the lead in an anchor tag (<a>) inside the <li>
        // Can you make the link open in a new tab?

        // listItems += "<li><a href=" +  myLeads[i] +" target='_blank'>" + myLeads[i] + "</a></li>";
        listItems += `<li><a href='${myLeads[i]}' target='_blank'>${myLeads[i]}</a></li>`;
        // listItems += `<li>
        // <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
        // </li>`;
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
