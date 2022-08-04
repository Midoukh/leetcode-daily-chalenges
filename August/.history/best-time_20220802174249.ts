function maxProfit(prices: number[]): number {
  let dayToBuy = 0,
    dayToSell = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[dayToBuy] && prices[i + 1] > prices[i]) {
      dayToBuy = i;
      break;
    }
  }
  dayToSell = prices[dayToBuy];
  for (let i = dayToBuy; i < prices.length; i++) {
    if (prices[i] > dayToSell) dayToSell = i;
  }
  console.log({ dayToBuy, dayToSell });
  return prices[dayToSell] - prices[dayToBuy] > 0
    ? prices[dayToSell] - prices[dayToBuy]
    : 0;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
