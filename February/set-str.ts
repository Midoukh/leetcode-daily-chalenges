const strStr = (haystack: string, needle: string): number => {
  //find and return the needle in haystack

  //1) edge cases
  if (!haystack.length && !needle.length) return 0;

  //2) check if haystack has the needle
  //methode 1
  return haystack.indexOf(needle);
};

console.log(strStr("hello", "ll"));
