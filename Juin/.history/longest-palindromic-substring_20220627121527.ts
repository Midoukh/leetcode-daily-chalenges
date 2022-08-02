const longestPalindrome = (s: string): string => {
  if (s.length < 2) return s;
  let sCopy = s,
    ans = "";

  //1) traverse s
  for (let i = 0; i < s.length; i++) {
    // you take two characters from the begining of the string
    //and two from the end of the string and compare them
    for (let j = i + 1; j < s.length; j++) {
      const sub = s.substring(i, j + 1);
      console.log(sub);
      if (isPalindrome(sub) && sub.length > ans.length) {
        ans = sub;
      }
    }
  }

  return ans;
};

const isPalindrome = (s: string): boolean => {
  return s === s.split("").reverse().join("");
};

console.log(longestPalindrome("babad"));
