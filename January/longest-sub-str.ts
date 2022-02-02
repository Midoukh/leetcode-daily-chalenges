const lengthOfLongestSubstring = (s: string): number => {
  let max = 0,
    currentString = "",
    i: number,
    char: string,
    pos: number;

  for (i = 0; i < s.length; i++) {
    console.log(currentString);
    char = s.charAt(i); //a
    pos = currentString.indexOf(char); // 0 exist, -1 doesn't exist
    if (pos !== -1) {
      currentString = currentString.substring(pos + 1);
    }
    currentString += char;
    max = Math.max(max, currentString.length);
  }
  return max;
};

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

console.log(lengthOfLongestSubstring("pwwkew"));
