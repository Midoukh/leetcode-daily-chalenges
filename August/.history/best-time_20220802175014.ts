function maxProfit(prices: number[]): number {
  let dayToBuy = 0,
    dayToSell = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[dayToBuy] && prices[i + 1] > prices[i]) {
      dayToBuy = i;
      break;
    }
  }
  dayToSell = dayToBuy + 1;
  for (let i = dayToBuy + 1; i < prices.length; i++) {
    if (prices[i] > prices[dayToSell]) dayToSell = i;
  }
  return prices[dayToSell] - prices[dayToBuy] > 0
    ? prices[dayToSell] - prices[dayToBuy]
    : 0;
}

console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));
