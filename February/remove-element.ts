const removeElement = (nums: any[], val: number): number => {
  let k: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      console.log(nums[i]);
      nums.splice(i, 1);
      nums.push("_");
      k++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      console.log(nums[i]);
      nums.splice(i, 1);
      nums.push("_");
      k++;
    }
  }
  console.log(nums);

  return nums.length - k;
};

console.log(removeElement([2, 2, 2], 2));
