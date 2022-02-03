//without the help of built in methods

//method 1
const myPow = (x: number, n: number): number => {
  let power = 1;

  let N = n;

  if (n === 0) return 1;

  for (let i = 0; i < Math.abs(N); i++) {
    power *= x;
  }

  if (N < 0) {
    power = 1 / power;
  }

  return power;
};

console.time();
console.log(myPow(2, 500));
console.timeEnd();
console.time();
console.log(Math.pow(2, 500));
console.timeEnd();

//method 1
function myPow2(x: number, y: number): number {
  if (y === 0) {
    return 1;
  } else if (y % 2 === 0) {
    // y is even
    const Y = String(y / 2);
    return myPow2(x, parseInt(Y, 10)) * myPow2(x, parseInt(Y, 10));
  }
  // y is odd
  else {
    const Y = String(y / 2);

    return x * myPow2(x, parseInt(Y, 10)) * myPow2(x, parseInt(Y, 10));
  }
}
console.time();
console.log(myPow2(2, 500));
console.timeEnd();
