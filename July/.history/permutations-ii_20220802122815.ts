function permuteUnique(nums: number[]): number[][] {
  const result: number[][] = [];
  const reorder = (arr: number[], m: number[] = []): void => {
    //this is a recursive function
    //base case
    if (!arr.length) result.push(m);
    else {
      for (let i = 0; i < arr.length; i++) {
        const curr = [...arr];
        const next = curr.splice(i, 1);
        reorder(curr.slice(), m.concat(next));
      }
    }
  };
  reorder(nums);

  return removeDups(result);
}

const removeDups = (ints: number[][]): number[][] => {
  const uniques = [];
  const itemsFound = {};
  for (let i = 0, l = ints.length; i < l; i++) {
    const stringified = JSON.stringify(ints[i]);
    if (itemsFound[stringified]) continue;
    uniques.push(ints[i]);
    itemsFound[stringified] = true;
  }
  return uniques;
};
