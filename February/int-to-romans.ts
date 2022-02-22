// interface Rom {
//   I: number;
//   V: number;
//   X: number;
//   L: number;
//   C: number;
//   D: number;
//   M: number;
// }

interface Rom {
  [key: number]: string;
}

const romans: Rom = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  200: "CC",
  300: "CCC",
  500: "D",
  600: "DC",
  700: "DCC",
  800: "DCCC",
  1000: "M",
  2000: "MM",
  3000: "MMM",
};

const casesOfSubstractions: Rom = {
  4: "IV",
  9: "IX",
  40: "XL",
  90: "XC",
  400: "CD",
  900: "CM",
};

const intToRoman = (num: number): string => {
  //1) divide num to decimals
  let numCopy = num;
  let numLength = getNumberLength(numCopy);

  const decimals: number[] = [];
  while (numCopy > 0) {
    let part = Math.floor(numCopy / numLength) * numLength;

    decimals.push(part);
    numCopy = numCopy % numLength;

    numLength /= 10;
  }

  return mapNumbersToRomans(decimals);
};

const getNumberLength = (num: number): number => {
  let numCopy = num;
  let l = 1;
  while (numCopy > 9) {
    l *= 10;
    numCopy = Math.floor(numCopy / 10);
  }
  return l;
};

const mapNumbersToRomans = (nums: number[]): string => {
  let romanNumber: string = "";
  let numToBeConverted: string = "";
  console.log(nums);
  nums.forEach((n) => {
    numToBeConverted = "";
    if (romans[n]) {
      numToBeConverted = romans[n];
    } else if (casesOfSubstractions[n]) {
      numToBeConverted = casesOfSubstractions[n];
    } else if (n < 9) {
      if (n === 8) {
        numToBeConverted = "VIII";
      } else if (n === 7) {
        numToBeConverted = "VII";
      } else if (n === 6) {
        numToBeConverted = "VI";
      } else if (n === 3) {
        numToBeConverted = "III";
      } else if (n === 2) {
        numToBeConverted = "II";
      }
    } else if (n > 19 && n < 100) {
      if (n === 20) {
        numToBeConverted = "XX";
      } else if (n === 30) {
        numToBeConverted = "XXX";
      } else if (n === 60) {
        numToBeConverted = "LX";
      } else if (n === 70) {
        numToBeConverted = "LXX";
      } else if (n === 80) {
        numToBeConverted = "LXXX";
      }
    }
    romanNumber += numToBeConverted;
  });
  return romanNumber;
};
console.log(intToRoman(20)); // (2234 / 1000) * 1000 = 2000
// (234 / 100) * 100 = 200
