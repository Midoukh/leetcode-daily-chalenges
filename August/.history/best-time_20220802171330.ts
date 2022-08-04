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
  console.log({ dayToBuy, dayToSell });

  for (i = i + 1; i <= prices.length; i++) {
    if (prices[i] > dayToSell) dayToSell = i + 1;
  }
  console.log({ dayToBuy, dayToSell });
  return prices[dayToSell - 1] - prices[dayToBuy - 1] > 0
    ? prices[dayToSell - 1] - prices[dayToBuy - 1]
    : 0;
}

console.log(maxProfit([2, 1, 4]));
