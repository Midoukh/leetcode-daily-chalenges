const searchInsert = (nums: number[], target: number): number => {
  //return the index of target in nums
  //if target is not there return the index of where it suppose to be
  //using binary search to solve this

  //1)-- determine which side to look in
  let leftPointer = 0,
    rightPointer = nums.length - 1;
  const closestToTarget = [];

  while (leftPointer <= rightPointer) {
    const middle = Math.floor((leftPointer + rightPointer) / 2);

    if (target === nums[middle]) return middle;

    if (nums[middle] > target) {
      rightPointer = middle - 1;
      closestToTarget[0] = middle;
    } else {
      leftPointer = middle + 1;
      closestToTarget[1] = middle + 1;
    }
  }
  //if the target is not there
  //got to find the closed two value to it (up and down)
  if (target < nums[0]) return 0;
  return closestToTarget[0] || closestToTarget[1];
};

console.log(searchInsert([1, 3, 5, 6], 2));
