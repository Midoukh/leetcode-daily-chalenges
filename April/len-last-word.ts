//using the native trim function
const lengthOfLastWord = (s: string): number => {
  const trimedStr = s.trim();
  const arrOfStrs: string[] = trimedStr.split(" ");
  return arrOfStrs[arrOfStrs.length - 1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
