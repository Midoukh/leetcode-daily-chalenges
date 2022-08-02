const longestPalindrome = (s: string): string => {
  if (s.length < 2) return s;

  let ans = s[0];
  let start = 0;

  while (!isPalindrome(s) && start <= s.length) {
    const sub = s.substring(start, s.length);
    ans = isPalindrome(sub) && sub;
    start--;
  }

  return ans;
};

const isPalindrome = (s: string): boolean => {
  return s === s.split("").reverse().join("");
};

console.log(longestPalindrome("babad"));
