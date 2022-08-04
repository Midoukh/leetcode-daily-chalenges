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

  const buying = findBestPriceToBuy(prices);
  const selling = findBestPriceToSell(prices, buying.lastIndex);

  console.log(buying);
  console.log(selling);
  return 0;
}

const findBestPriceToBuy = (prices: number[]): Recor => {
  let bestPrice = prices[0];
  const out: Recor = {};
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < bestPrice) {
      out.bestDayToBuy = i + 1;
      bestPrice = prices[i];
      out.bestPriceToBuy = bestPrice;
      out.lastIndex = i;
    }
  }
  return out;
};
const findBestPriceToSell = (prices: number[], index: number): Recor => {
  let bestPrice = prices[index + 1];
  const out: Recor = {};
  for (let i = index + 1; i < prices.length; i++) {
    if (prices[i] > bestPrice) {
      out.bestDayToSell = i + 1;
      bestPrice = prices[i];
      out.bestPriceToSell = bestPrice;
      out.lastIndex = i;
      if (i < prices.length) return out;
    }
  }
  return out;
};

maxProfit([7, 1, 5, 3, 6, 4]);
