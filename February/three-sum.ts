const threeSum = (nums: number[]): number[][] | number[] => {
  // -1) sort the array
  const sortedNums = nums.sort();

  const output: number[][] = [];

  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (i === 0 || (i > 0 && sortedNums[i] !== sortedNums[i - 1])) {
      let low = i + 1;
      let high = sortedNums.length - 1;
      let sum = 0 - sortedNums[i];

      while (low < high) {
        if (sortedNums[low] + sortedNums[high] === sum) {
          const triplet = [sortedNums[low], sortedNums[high], sortedNums[i]];
          output.push(triplet);
          while (low < high && sortedNums[low] === sortedNums[low + 1]) low++;
          while (low < high && sortedNums[high] === sortedNums[high - 1])
            high--;
          low++;
          high--;
        } else if (sortedNums[low] + sortedNums[high] > sum) high--;
        else low++;
      }
    }
  }

  return output;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
