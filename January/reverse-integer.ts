const reverse = (x: number): number => {
    //range [-2147483648 to 2147483647]
    const SUP = Math.pow(2, 31) - 1
    const INF = Math.pow(-2, 31)

    let revInt : number = 0
    let xCopy = x, d = 1
    const isXnegative = xCopy < 0? true : false
    
    if (isXnegative) xCopy = Math.abs(xCopy)

    for (let i = 0; i < getNumLength(x) - 1; i++) {
        d *= 10;
    }
    
    while(xCopy > 0){
        revInt += (xCopy % 10) * d
        xCopy = Math.floor(xCopy / 10)
        d /= 10
    }
    revInt = isXnegative? revInt * (-1) : revInt
    revInt = (revInt <= SUP && revInt >= INF)? revInt: 0
    
    return revInt
};
const getNumLength = (num: number): number => {
  let l = 1;
  let n = Math.abs(num);

  while (n > 9) {
    n = Math.floor(n / 10);
    l++;
  }
  
  return l;
};

console.log(reverse(-123))