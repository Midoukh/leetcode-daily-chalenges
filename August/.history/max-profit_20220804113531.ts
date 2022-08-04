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
    right = left + 1,
    foundBestBuy = false,
    foundBestSell = false;
  record.priceToBuy = prices[0];
  while (left < prices.length) {
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
      record.dayToSell = right + 1;
      record.profit = record.priceToSell - record.priceToBuy;
      prices.splice(0, right + 1);
      foundBestSell = true;
    }
    left++;
    right++;
  }
  console.log(record);
  return 0;
}

maxProfit([7, 1, 5, 3, 6, 4]);
