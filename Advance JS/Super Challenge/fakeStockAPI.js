export function getStockData() {
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: (Math.random()*3).toFixed(2),
        time: new Date().toLocaleDateString()
    }
}


/* Note:
(for price) return a random number between 0 and 3 to two decimal places 
(for time) /*return a timestamp in this format:hh/mm/ss */

/*
1. To compare price changes -->switch statement use.
2. function that should generate a new number every 1.5 second
3. 


*/