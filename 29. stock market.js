// Input: prices = [7,1,5,3,6,4]  Output: 5
function maxProfit(profit) {
  let maxProfit = 0;
  let buy = profit[0];

  for (let i = 1; i < profit.length; i++) {
    if (profit[i] < buy) {
      buy = profit[i]; // we have to find smallest value
    } else {
      let sell = profit[i] - buy;

      if (sell > maxProfit) {
        maxProfit = sell;
      }
    }
  }
  return maxProfit;
}
const profit = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(profit));
