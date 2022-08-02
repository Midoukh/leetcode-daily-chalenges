//solution one can't deal with big integers
// const addBinary = (a: string, b: string): string => {
//   let sum = BigInt("ob" + a) + BigInt("ob" + b);
//   return sum.toString(2);
// };

//solution 2

const addBinary = (a: string, b: string): string => {
  let i = a.length - 1;
  let j = b.length - 1;
  let result = "";
  let carry = 0;

  while (i >= 0 || j >= 0) {
    let curSum = carry;
    // let curA = parseInt(a[i], 10);
    // let curB = parseInt(b[i], 10);
    let curA = +a[i];
    let curB = +b[i];
    if (i >= 0) curSum += curA;
    if (j >= 0) curSum += curB;

    console.log(result);
    curSum = (curA + curB) % 2;
    result = curSum + result;
    carry = Math.floor((curA + curB) / 2);

    j--;
    i--;
  }

  if (carry !== 0) result = carry + result;

  return result;
};
console.log(addBinary("1", "11"));
// console.log(
//   addBinary(
//     "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
//     "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
//   )
// );
