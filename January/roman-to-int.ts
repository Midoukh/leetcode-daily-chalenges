interface Romans {
  [key: string]: number;
}
const romanAsInt: Romans = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
const romanToInt = (s: string): number => {
  const regex: RegExp = /(CM)|(XC)|(IV)|(IX)|(XL)|(XC)|(CD)|(CM)/g;
  let number = 0;
  const matches: string[] | null = s.match(regex);
  let strWithoutRegex: string = s;

  if (matches) {
    matches.forEach((roman) => {
      strWithoutRegex = strWithoutRegex.replace(roman, "");
      switch (roman) {
        case "CM":
          number += 900;
          break;
        case "XC":
          number += 90;
          break;
        case "IV":
          number += 4;
          break;
        case "IX":
          number += 9;
          break;
        case "XL":
          number += 40;
          break;
        case "CM":
          number += 90;
          break;
        case "CD":
          number += 400;
          break;
        default:
          number += 0;
      }
    });
  }

  for (let i = 0; i < strWithoutRegex.length; i++) {
    if (romanAsInt[strWithoutRegex[i]]) {
      number += romanAsInt[strWithoutRegex[i]];
    }
  }
  return number;
};

console.log(romanToInt("III"));
