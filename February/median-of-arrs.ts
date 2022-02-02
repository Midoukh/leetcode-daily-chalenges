const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
  const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
  console.log(mergedArray);
  const medianOddArray = mergedArray[Math.floor(mergedArray.length / 2)];
  const medianEvenArray =
    (mergedArray[mergedArray.length / 2] +
      mergedArray[mergedArray.length / 2 - 1]) /
    2;
  const median =
    mergedArray.length % 2 === 0 ? medianEvenArray : medianOddArray;
  return median;
};

console.log(findMedianSortedArrays([3], [-1, -2]));
