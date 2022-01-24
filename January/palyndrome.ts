const isPalindrome = (x: number): boolean => {
  let palyndrome: number = 0;
  let n = x,
    m = 1;

  for (let i = 0; i < getNumLength(n) - 1; i++) {
    m *= 10;
  }

  //123 ==> 321
  //123 ==> 321
  //121 ==> 121
  while (n > 0) {
    //n = 191 DIV 10 = 1
    palyndrome += (n % 10) * m;
    n = Math.floor(n / 10);
    m /= 10;
  }

  //10
  // p = 0 * 1 = 1
  //p = 1 + (1 % 10) * 10
  return palyndrome === x;
};

const getNumLength = (num: number): number => {
  let l = 1;
  let n = num;

  while (n > 9) {
    n = Math.floor(n / 10);
    l++;
  }
  return l;
};

console.log(isPalindrome(192));

// 121 % 10 = 1 => 1 * 1
// 12 % 10 = 2 => 2 * 10 ==== > 1 + 20 + 100 = 121
// 1 % 10 = 1 => 1 * 100
