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
    right = 2,
    foundBestBuy = false,
    foundBestSell = false;
  record.priceToBuy = prices[0];
  while (!foundBestBuy && !foundBestSell && left < prices.length) {
    if (prices[left] < record.priceToBuy && prices[left + 1] > prices[left]) {
      record.priceToBuy = prices[left];
      record.dayToBuy = left + 1;
      foundBestBuy = true;
    }
    if (
      prices[right] > prices[left] &&
      prices[right + 1] < prices[right] &&
      foundBestBuy
    ) {
      record.priceToSell = prices[right];
      record.profit = record.priceToSell - record.priceToBuy;
      foundBestSell = true;
    }
    right++;
    left++;
  }
  console.log(record);
  return 0;
}

maxProfit([7, 1, 5, 3, 6, 4]);
