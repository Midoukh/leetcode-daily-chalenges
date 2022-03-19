interface Rec {
  [key: number]: [number, number];
}
const searchRange = (nums: number[], target: number): number[] => {
  if (!nums.length || !nums.includes(target)) return [-1, -1];

  //1) create a map to keep track of each number starting and ending index
  const record: Rec = {};
  let left = 0,
    right = 0,
    begining = 0,
    end = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!record[nums[i]]) {
      left = i;
      begining = i;
    } else {
      right++;
      end++;
    }
    if (nums[i] !== nums[i + 1]) {
      console.log(nums[i]);
      end = i;
    }
    record[nums[i]] = [begining, end];
  }

  return record[target];
};
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
