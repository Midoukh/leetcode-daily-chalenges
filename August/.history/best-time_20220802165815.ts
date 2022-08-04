function maxProfit(prices: number[]): number {
  const pricesCopy = [...prices];

  let dayToBuy = prices[0],
    dayToSell = 0,
    i = 1;
  console.log(dayToBuy);
  while (dayToBuy > prices[i]) {
    if (prices[i] < dayToBuy) {
      if (prices[i + 1] > prices[i]) {
        dayToBuy = i + 1;
        break;
      }
    }
    i++;
  }

  for (i = i - 1; i < prices.length; i++) {
    if (prices[i] > dayToSell) dayToSell = prices[i];
  }
  return dayToSell - dayToBuy > 0 ? dayToSell - dayToBuy : 0;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
