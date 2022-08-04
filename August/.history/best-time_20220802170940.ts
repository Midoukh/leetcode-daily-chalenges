function maxProfit(prices: number[]): number {
  let dayToBuy = prices[0],
    dayToSell = 0,
    i = 0;
  while (dayToBuy >= prices[i]) {
    if (prices[i] < dayToBuy) {
      if (prices[i + 1] > prices[i]) {
        dayToBuy = i + 1;
        break;
      }
    }
    i++;
  }
  for (i = i + 1; i < prices.length; i++) {
    console.log(i);
    if (prices[i] > dayToSell) dayToSell = i;
  }
  console.log({ dayToBuy, dayToSell });
  return prices[dayToSell] - prices[dayToBuy] > 0
    ? prices[dayToSell] - prices[dayToBuy]
    : 0;
}

console.log(maxProfit([2, 1, 4]));
