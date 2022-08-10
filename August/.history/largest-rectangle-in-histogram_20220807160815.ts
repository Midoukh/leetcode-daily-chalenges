function largestRectangleArea(heights: number[]): number {
  //find all the possible rectangles
  //calc theirs areas
  //store it a dict
  //get the largest one

  //1) how to find all the possible rectangles???
  //calculate the area of each rectangle in the area
  //what makes a rectangle
  //two pr more adjacent rectangles to be able to form a valid rect
  //they need to have the same heights
  //so they either need to be originally have the same height
  //if a rectangle has a height of 2 and the one next to it has a height
  //of 7 than the formed rectangle will get the height of the smallerst
  //retangle which is 2
  //so both of them will have the area of 1*2 + 1*2 = 4
  const areas: any = {};
  for (let i = 0; i < heights.length; i++) {
    //the rect next to it need to be heigher then it
    const currLeftRec = heights[i];
    let area = currLeftRec,
      rectCounts = 1,
      areaNum = 1;

    for (let j = i + 1; j < heights.length; j++) {
      const currRightRec = heights[j];
      if (currLeftRec <= currRightRec) {
        area += currLeftRec;
        rectCounts++;
      } else {
        areas[areaNum] = area;
        break;
      }
    }
    areaNum++;
    rectCounts = 1;
  }
  console.log(areas);
  return 0;
}

largestRectangleArea([2, 1, 5, 6, 2, 3]);
