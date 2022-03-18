const divide = (dividend: number, divisor: number): number => {
  //divide two integers without using multiplication, division, and mod operator.
  let quotient = 0,
    acc = 0,
    sign = 1;
  const limits = [Math.pow(-2, 31), Math.pow(2, 31) - 1];

  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) sign = -1;
  let newDivisor: number = Math.abs(divisor);
  let newDividened: number = Math.abs(dividend);
  //bitwise shifting approach
  for (let i = 31; i >= 0; i--) {
    if (acc + (newDivisor << i) <= newDividened) {
      acc += newDivisor << i;
      quotient |= 1 << i;
    }
  }
  //   while (newDividened >= newDivisor) {
  //     ++quotient;
  //     newDividened -= newDivisor;
  //     console.log(newDividened);
  //   }
  if (sign === -1) quotient = -quotient;
  if (quotient <= limits[0]) quotient = limits[0];
  else if (quotient >= limits[1]) quotient = limits[1];
  return quotient;
};

console.log(divide(7, -3));
