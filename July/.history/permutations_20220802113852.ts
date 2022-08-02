console.log([1, 2, 3].slice());
function permute(nums: number[]): number[][] {
  const pLength = facto(nums.length); //6
}

const facto = (n: number): number => {
  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact *= i;
  }

  return fact;
};

const reorder = (nums: number[]): number[] => {};
