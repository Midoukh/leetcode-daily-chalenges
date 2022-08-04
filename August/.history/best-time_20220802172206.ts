function maxProfit(prices: number[]): number {
  let dayToBuy = prices[0],
    dayToSell = 0,
    i = 0;
  while (dayToBuy >= prices[i]) {
    if (prices[i] < dayToBuy) {
      if (prices[i + 1] > prices[i]) {
        dayToBuy = i;
        break;
      } else i++;
    }
  }
  console.log({ dayToBuy, dayToSell });
  for (i; i <= prices.length; i++) {
    if (prices[i] > dayToSell) dayToSell = i;
  }
  return prices[dayToSell] - prices[dayToBuy] > 0
    ? prices[dayToSell] - prices[dayToBuy]
    : 0;
}

console.log(maxProfit([1, 2]));
