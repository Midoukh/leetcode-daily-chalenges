function maxProfit(prices: number[]): {} {
  const pricesCopy = [...prices];

  let dayToBuy = 0,
    dayToSell = 0;

  for (let i = 0; i < pricesCopy.length; i++) {
    if (pricesCopy[i] >= dayToBuy) {
      dayToBuy = pricesCopy[i];
      pricesCopy.splice(i, 1);
    }
    if (pricesCopy[i] > dayToSell) dayToSell = pricesCopy[i];
  }
  return {
    dayToBuy,
    dayToSell,
  };
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
