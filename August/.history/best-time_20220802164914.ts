function maxProfit(prices: number[]): {} {
  const pricesCopy = [...prices];

  let dayToBuy = prices[0],
    dayToSell = 0,
    i = 0;

  while (dayToBuy > prices[i]) {
    if (prices[i] < dayToBuy) {
      if (prices[i + 1] > prices[i]) dayToBuy = i;
    }
    i++;
  }

  return {
    dayToBuy,
  };
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
