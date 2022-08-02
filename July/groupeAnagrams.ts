function groupAnagrams(strs: string[]): string[][] {
  if (!strs.length) return [[""]];
  const result: string[][] = [];
  const founds: { [key: string]: boolean } = {};
  for (let i = 0; i < strs.length; i++) {
    let arr = [strs[i]];
    const word1 = strs[i].split("").sort().join("");
    if (founds[word1]) continue;
    founds[word1] = true;
    for (let j = 0; j < strs.length; j++) {
      if (i === j) continue;
      else {
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
