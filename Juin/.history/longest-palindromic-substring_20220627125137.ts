const longestPalindrome = (s: string): string => {
  if (s.length < 2) return s;

  let ans = s[0];
  let start = 0;
  let sub = "";
  while (!isPalindrome(sub) && start <= s.length) {
    sub = s.substring(start, s.length);
    if (isPalindrome(sub)) ans = sub;
    console.log("sub: ", sub);
    start++;
  }

  return ans;
};

const isPalindrome = (s: string): boolean => {
  return s === s.split("").reverse().join("");
};

console.log(longestPalindrome("babad"));
