function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  //1 remove the zeros from nums1 if they exist
  for (let i = 1; i <= m + n; i++) {
    nums1 = nums1.splice(i, 1);
    if (i > n) break;
  }
  //2 insert the elements of nums2 into nums1 and sort the elements of nums1
  nums1 = [...nums1, ...nums2].sort();
  console.log(nums1);
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
