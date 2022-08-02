const longestPalindrome = (s: string): string => {
  let sCopy = s,
    ans = "";

  //1) traverse s
  for (let i = 0; i < s.length; i += 2) {
    let j = i + 2;
    const sub = s.substring(i, j);

    console.log(sub);
  }

  return ans;
};

longestPalindrome("abscflrmtktjmlddsfsdfsdgflsdkm");
