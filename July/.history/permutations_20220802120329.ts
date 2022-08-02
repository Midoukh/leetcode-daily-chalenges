function permute(nums: number[]): number[][] {
  const result = [];
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

  return result;
}

console.log(permute([1, 2, 3]));
