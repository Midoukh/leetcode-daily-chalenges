function maxProfit(prices: number[]): number {
  let dayToBuy = prices[0],
    dayToSell = 0,
    index = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < dayToBuy && prices[i + 1] > prices[i]) {
      dayToBuy = i;
      index = i;
      break;
    }
  }
  for (let i = index; i < prices.length; i++) {
    if (prices[i] > dayToSell) dayToSell = i;
  }

  return prices[dayToSell] - prices[dayToBuy] > 0
    ? prices[dayToSell] - prices[dayToBuy]
    : 0;
}

console.log(maxProfit([1, 2]));
