function permute(nums: number[]): void {
  const result = [];
  const reorder = (arr: number[], m: number[] | []): void => {
    //this is a recursive function
    //base case
    if (!arr.length) result.push(m);
    else {
      for (let i = 0; i < arr.length; i++) {
        const curr = [...arr];
        const next = arr.splice(i, 1);
      }
    }
  };
}
const arr = [1, 2, 3];
const part = arr.splice(0, 1);

console.log(part);
console.log(arr);
