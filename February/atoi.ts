const myAtoi = (s: string): number => {
  // edge cases
  if (isNaN(+s[0]) && s[0] !== "-" && s[0] !== "+") return 0;
  let num: number = 0;

  //1-- trim spaces at the begening and the end of s
  let newStr = s.trim();

  //2-- handle signs
  const { sign, offset } = handleSign(newStr);

  if (sign === "not-allowed") return 0;

  //3-- build the number by looping through the string
  let decimal = 10;
  console.log("before building number", newStr);

  for (let i = sign ? offset : 0; i < newStr.length; i++) {
    if (!isNaN(+newStr[i]) && newStr[i] !== " ") {
      num = num * decimal + +newStr[i];
      console.log("num in loop", num);
    } else break;
  }

  //4-- assign sign
  num = sign === "-" ? num * -1 : num;

  //5-- handle limits and return final number

  return handleLimit(num);
};

const handleLimit = (num: number): number => {
  const [lower, upper] = [Math.pow(-2, 31), Math.pow(2, 31) - 1];
  if (num > upper) return upper;
  else if (num < lower) return lower;
  return num;
};

const handleSign = (str: string): { sign: string; offset: number } => {
  const noDigit = /(\+\-)|(\-\+)/g;
  let sign: string = "";
  let offset: number = 1;
  if (str[1] !== "+" && str[1] !== "-") {
    switch (str[0]) {
      case "+":
        sign = "+";
        break;
      case "-":
        sign = "-";
        break;
      default:
        sign = "";
    }
  }
  if (str.slice(0, 2).match(noDigit)) {
    sign = "not-allowed";
    offset = 2;
  }
  return {
    sign,
    offset,
  };
};

console.log(myAtoi("4193 with words"));
