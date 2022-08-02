function groupAnagrams(strs: string[]): string[][] {
  if (!strs.length) return [[""]];
  const result: string[][] = [];
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      const arr = [strs[i]];
      if (i !== j) {
        if (strs[j].length !== strs[i].length) continue;
        const word = strs[j].split("").sort().join("");
        if (strs[i] === word) arr.push(word);
      }
      result.push(arr);
    }
  }
  return result;
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
