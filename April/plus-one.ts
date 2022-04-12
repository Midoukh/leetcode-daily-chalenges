const plusOne = (digits: number[]): number[] => {
  let num = BigInt(digits.join(""));
  num++;
  return Array.from(num.toString()).join().split(",").map(Number);
};

const plusOne2 = (digits: number[]): number[] => {
  if (digits.length === 1) {
    if (digits[0] === 9) return [1, 0];
    return [digits[0] + 1];
  }
  let res: number[] = [...digits];
  if (digits[digits.length - 1] === 9) {
    let last: any = "";
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] === 9 && i !== 0) {
        last += digits[i].toString();
      } else {
        if (digits[i] === 9) {
          last += digits[i].toString();
        }
        res.splice(i);
        last = (parseInt(last) + 1).toString();
        last = last.split("").map((item: string) => parseInt(item));
        res = res.concat(last);
        break;
      }
    }
    return res;
  }
  res[res.length - 1] = res[res.length - 1] + 1;
  return res;
};

console.log(plusOne2([8, 9, 9, 9]));
console.log(8999 + 1);
