//unefficient solution
const maxSubArray = (nums: number[]): number => {
  //input is an array of integers
  //output is an integer which is the sum of the intgers of a subarray that contain the largest sum
  if (nums.length === 1) return nums[0];
  const sums: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const subarray: number[] = [];

    for (let j = i; j < nums.length; j++) {
      subarray.push(nums[j]);
      sums.push(subarray.reduce((a, b) => a + b));
    }
    //emptying the subarray
    subarray.splice(0, subarray.length);
  }
  return sums.sort((a, b) => b - a)[0];
};

//o(n) solution
const maxSubArray2 = (nums: number[]): number => {
  let maxSum = nums[0],
    curSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (curSum < 0) curSum = 0;
    curSum += nums[i];
    maxSum = Math.max(maxSum, curSum);
  }
  return maxSum;
};
console.log(maxSubArray2([-1, -2]));
