function getStockData(){
    return {
        name : 'QtechAI',
        sym: 'QTA',
        price: Math.round(Math.random()*3*100)/100,
        time:  getCurrentFormattedTime() 
    }
    
}

console.log(getStockData());


function getNewPrice(){
    let firstPrice = Math.round(Math.random()*3*100)/100;

}

function getCurrentFormattedTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}

// Example Usage:
console.log(getCurrentFormattedTime());     // e.g., "14:35:08"

/* Note:
(for price) return a random number between 0 and 3 to two decimal places 
(for time) /*return a timestamp in this format:hh/mm/ss */