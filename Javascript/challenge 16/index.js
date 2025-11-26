// Objects are complex data types

let course = {
    title : "Learn Js",
    creator : "Noddy",
    lessons : 10,
    length :  60,
    level : 3,
    isFree : true,
    tags : ["html" , "css"]

}

console.log(course.tags[1]);
console.log(course["tags"]);   //brackets notation

// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let castleListings = {
    name : "Royal Castle",
    isExpensive : true,
    costs: 50000,
    rooms : 500,
    reviews : ["good", "greate-place","lovely","grand"]
}

console.log(castleListings.isExpensive);
console.log(castleListings.reviews[0]);

