const longestPalindrome = (s: string): string => {
  if (s.length < 2) return s;

  let ans = s[0];
  let start = s.length;

  while (!isPalindrome(s) && start > 0) {
    ans = isPalindrome(s) && s;
    start--;
  }

  return ans;
};

const isPalindrome = (s: string): boolean => {
  return s === s.split("").reverse().join("");
};

console.log(longestPalindrome("babad"));
