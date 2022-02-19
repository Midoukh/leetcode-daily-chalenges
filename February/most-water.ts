const maxArea = (height: number[]): number => {
  //the numbers on the height array represent the value of the line on the y-axis
  // There are n vertical lines drawn such that the two endpoints of
  //the ith line are (i, 0) and (i, height[i]).
  //line has 2 endpoints : (i, 0) and (i, height[i])

  //the job of this function is to Find two lines
  //Find two lines that together with the x-axis form
  //a container, such that the container contains the most water.
  let leftPointer = 0,
    rightPointer = height.length - 1;
  let area = 0;
  for (let i = 0; i < height.length; i++) {
    let recLength = rightPointer - leftPointer;
    const lineHeight = Math.min(height[leftPointer], height[rightPointer]);
    area = Math.max(area, recLength * lineHeight);

    if (height[leftPointer] > height[rightPointer]) rightPointer--;
    else leftPointer++;
  }
  return area;
};
// 1,8
// 8,7
console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));
