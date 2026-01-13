import { itemsBoughtArr } from "./itemsBrought.js";

//challenge : use reduce method to calculate the total cost of items which have been bought.
function  calculateTotalCost (itemsBoughtArr, discount){
    
    const total = itemsBoughtArr.reduce((total, currentItem) => 
        total + currentItem.priceUSD , 0
    )
     return total-discount;
}

console.log(calculateTotalCost(itemsBoughtArr, 10));
//cheatcommit
