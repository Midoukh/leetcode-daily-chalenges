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

  const ans = findBestPriceToBuy(prices);

  console.log(ans);
  return 0;
}

const findBestPriceToBuy = (prices: number[]): Recor => {
  let bestPrice = prices[0];
  const out: Recor = {};
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < bestPrice) {
      out.bestDayToBuy = i;
      bestPrice = prices[i];
      out.bestPriceToBuy = bestPrice;
    }
  }
  return out;
};

maxProfit([7, 1, 5, 3, 6, 4]);
