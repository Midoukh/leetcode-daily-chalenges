function groupAnagrams(strs: string[]): string[][] {
  if (!strs.length) return [[""]];
  const result: string[][] = [];
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      let arr = [strs[i]];
      if (i !== j) {
        const word = strs[j];
        console.log(word);
        if (strs[i].length !== word.length) continue;
        if (strs[i].includes(word)) arr.push(word);
      }
      result.push(arr);
      arr = [];
    }
  }
  return result;
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
