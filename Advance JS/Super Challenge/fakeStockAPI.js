export function getStockData() {
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: getNewPrice(),
        time: getCurrentTime()
    }
}


function getNewPrice() {
    return Math.round(Math.random() * 3 * 100) / 100;
}

let previousPrice = null;

// setInterval(() => {
//     const currentPrice = getNewPrice()
//     console.log(currentPrice);

//     if (previousPrice !== null) {
//         if (currentPrice > previousPrice) {
//             console.log("Increased");

//         } else if (currentPrice < previousPrice) {
//             console.log("Decreased");

//         } else {
//             console.log("No change");

//         }
//     }
//     console.log("Current", currentPrice);
//     previousPrice = currentPrice;


// }, 1500);

function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

// Example Usage:
// console.log(getCurrentTime());     // e.g., "14:35:08"

/* Note:
(for price) return a random number between 0 and 3 to two decimal places 
(for time) /*return a timestamp in this format:hh/mm/ss */

/*
1. To compare price changes -->switch statement use.
2. function that should generate a new number every 1.5 second
3. 


*/