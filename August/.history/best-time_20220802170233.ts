function maxProfit(prices: number[]): number {
  let dayToBuy = prices[0],
    dayToSell = 0,
    i = 1,
    buyingIndex = 0,
    sellingIndex = 0;
  while (dayToBuy > prices[i]) {
    if (prices[i] < dayToBuy) {
      if (prices[i + 1] > prices[i]) {
        dayToBuy = i + 1;
        break;
      }
    }
    i++;
  }
  buyingIndex = i;

  for (i = i - 1; i < prices.length; i++) {
    if (prices[i] > dayToSell) dayToSell = prices[i];
  }
  sellingIndex = i - 1;
  console.log({ buyingIndex, sellingIndex });
  return prices[sellingIndex] - prices[buyingIndex] > 0
    ? prices[sellingIndex] - prices[buyingIndex]
    : 0;
}

console.log(maxProfit([2, 1, 4]));
