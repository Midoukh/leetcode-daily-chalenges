const rotate = (matrix: number[][]): void => {
  const { length: size } = matrix;

  const rotateableLayers = size / 2;

  for (let i = 0; i < rotateableLayers; i++) {
    const first = i;
    const last = size - first - 1;
    for (let j = first; j < last; j++) {
      const offset = j - first;

      const top = matrix[first][j];
      const rightSide = matrix[j][last];
      const bottom = matrix[last][last - offset];
      const leftSide = matrix[last - offset][first];

      matrix[first][j] = leftSide;
      matrix[j][last] = top;
      matrix[last][last - offset] = rightSide;
      matrix[last - offset][first] = bottom;
    }
  }
};
// [                         [
//     [1,2,3],                 [7,4,1],
//     [4,5,6], =======>>       [8,5,2],x
//     [7,8,9]                  [9,6,3],
// ]                         ]
rotate([
  [0, 1, 2], //i
  [3, 4, 5],
  [6, 7, 8],
]);
