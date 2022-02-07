const longestPalindrome = (s: string): string => {
  //palindromic string need to be atleast 2 chars long
  //example "araba"
  if (s.length < 2) return s;
  const list: string[] = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= s.length; j++) {
      const substr = s.slice(i, j);
      const substrRev = substr.split("").reverse().join("");
      if (substr.length > 1) {
        if (substr === substrRev) {
          list.push(substr);
        }
      }
    }
  }
  return list.length ? list.sort((a, b) => b.length - a.length)[0] : s[0];
};

console.log(longestPalindrome("abcda"));
