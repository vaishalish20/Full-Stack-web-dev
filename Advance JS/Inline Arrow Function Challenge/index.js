import { itemsBoughtArr } from "./itemsBrought.js";

//challenge : use reduce method to calculate the total cost of items which have been bought.
function  calculateTotalCost (itemsBoughtArr){
    
    const total = itemsBoughtArr.reduce((total, currentItem) => 
        total + currentItem.priceUSD , 0
    )
     return total;
}

console.log(calculateTotalCost(itemsBoughtArr));
//cheatcommit
