interface numToLett {
  [key: number]: string;
}

const map: numToLett = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};
const letterCombinations = (digits: string): string[] => {
  if (!digits) return [];
  if (digits.length === 1) return map[Number(digits)].split("");

  //285
  // 1) to split the digits string to individual digits
  //285 ==> ['2', '8', '5']
  // 2 ==> abc,  8 ==> tuv,  5 ==> jkl
  // atj auk avl btj ...

  const letters: string[] = [];
  const first: string[] = map[Number(digits[0])].split("");
  const second: string[] = letterCombinations(
    digits.substring(1, digits.length)
  );

  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      letters.push(first[i] + second[j]);
    }
  }
  return letters;
};
console.log(letterCombinations("284"));
