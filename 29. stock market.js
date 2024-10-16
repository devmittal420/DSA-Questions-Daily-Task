// Input: prices = [7,1,5,3,6,4]
// Output: 5

function maxProfit(profit) {
  let maxProfit = 0;

  for (let i = 0; i < profit.length; i++) {
    for (let j = i + 1; j < profit.length; j++) {
      let sub = profit[j] - profit[i];
      if (sub > maxProfit) {
        maxProfit = sub;
      }
    }
  }
  return maxProfit;
}

const profit = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(profit));
