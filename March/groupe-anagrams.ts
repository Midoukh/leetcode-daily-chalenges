const groupAnagrams = (strs: string[]): string[][] => {
  //what are anagrams? word that have the same characters, that means the same lengths
  const ans: string[][] = [];

  const strsCopy = strs;
  for (let i = 0; i < strsCopy.length; i++) {
    console.log("loop");
    let arr: string[] = [strsCopy[i]];
    for (let x = 0; x < strsCopy.length; x++) {
      if (x !== i) {
        if (
          strsCopy[i].length === strsCopy[x].length &&
          checkAnagram(strsCopy[i], strsCopy[x])
        ) {
          arr.push(strsCopy[x]);
          strsCopy.splice(x, 1);
        }
      }
    }
    ans.push(arr);
    arr = [];
  }
  return ans;
};
const checkAnagram = (str1: string, str2: string): boolean => {
  const sorted1 = str1.split("").sort().join("");
  const sorted2 = str2.split("").sort().join("");

  return sorted1 === sorted2;
};
console.log(groupAnagrams(["", "", ""]));
