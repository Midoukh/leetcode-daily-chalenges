const longestCommonPrefix = (strs: string[]): string => {
  if (strs.length === 1) return strs[0];

  let longestComment: string = "",
    j = 0;

  for (let i = 0; i <= j; i++) {
    const firstLetterFromStrOne = strs[0].slice(0, j);
    const ispref = strs.every(
      (str) => str.slice(0, j) === firstLetterFromStrOne
    );

    if (ispref) {
      longestComment = strs[0].slice(0, j);
      j++;
    }
  }
  return longestComment;
};
console.log(longestCommonPrefix(["afower", "aflow", "aflight"])); // return af
