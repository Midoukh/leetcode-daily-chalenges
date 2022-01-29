interface Numbers {
  [key: number]: number;
}
const removeDuplicates = (nums: number[]): number => {
  const map: Numbers = {};
  let k = 0;
  for (let i of nums) {
    if (!map[i]) {
      nums[k++] = i;
      map[i] = 1;
    }
  }
  return k;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
