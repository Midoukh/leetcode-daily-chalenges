interface Recor {
  [key: string]: number;
}
function maxProfit(prices: number[]): number {
  const record: Recor = {
    priceToBuy: 0,
    priceToSell: 0,
    dayToBuy: 1,
    dayToSell: 1,
    profit: 0,
  };
  let left = 1,
    right = 0,
    foundBestBuy = false;
  record.priceToBuy = prices[0];
  while (!foundBestBuy && left < prices.length) {
    if (prices[left] < record.priceToBuy && prices[left + 1] > prices[left]) {
      record.priceToBuy = prices[left];
      record.dayToBuy = left + 1;
      foundBestBuy = true;
    }
    left++;
  }
  console.log(record);
  return 0;
}

maxProfit([7, 1, 5, 3, 6, 4]);
