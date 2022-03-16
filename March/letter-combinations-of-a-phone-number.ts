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
  if (digits.length === 1) return map[digits].split("");

  //285
};
