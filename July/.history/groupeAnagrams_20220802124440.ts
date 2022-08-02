function groupAnagrams(strs: string[]): string[][] {
  if (!strs.length) return [[""]];
  const result: string[][] = [];
  for (let i = 0; i < strs.length; i++) {
    let arr = [strs[i]];
    const word1 = strs[i].split("").sort().join("");
    for (let j = i + 1; j < strs.length; j++) {
      if (i !== j) {
        const word2 = strs[j].split("").sort().join("");
        if (word1.length !== word2.length) continue;
        if (word1 === word2) arr.push(strs[j]);
      }
    }
    result.push(arr);
    arr = [];
  }
  return result;
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
