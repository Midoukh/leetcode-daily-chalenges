function maxProfit(prices: number[]): number {
  let ans = 0;
  const temp = [...prices];
  for (let i = temp.length - 1; i > 0; i--) {
    temp[i] = Math.min(temp[i], temp[i - 1]);
  }
  for (let i = 1; i < temp.length; i++) {
    ans += prices[i] - temp[i];
  }
  return ans;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // [1 ,1 ,3 ,3 ,4]
