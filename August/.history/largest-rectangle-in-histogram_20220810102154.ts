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
  let areaNum = 1,
    biggestArea = 0;

  for (let i = 0; i < heights.length; i++) {
    //the rect next to it need to be heigher then it
    const currLeftRec = heights[i];
    //[1, 2, 4, 8]
    let area = currLeftRec;
    console.log(`Area at the beg: ${area}`);

    for (let j = 0; j < heights.length; j++) {
      const currAdjRec = heights[j];
      console.log(`j: ${j}`);
      if (
        i !== j &&
        currLeftRec <= currAdjRec &&
        heights[j + 1] !== undefined &&
        heights[j + 1] >= currLeftRec
      ) {
        area += currLeftRec;
        if (j === heights.length - 1) {
          console.log("its here");
          if (heights[j] >= currLeftRec) {
            area += currLeftRec;
          }
        }
      } else {
        break;
      }
    }

    areas[areaNum] = area;
    areaNum++;
    area = 0;
  }

  const areasArr: number[] = Object.values(areas);
  biggestArea = areasArr[0];

  areasArr.forEach((area: number) => {
    if (area > biggestArea) biggestArea = area;
  });

  return biggestArea;
}

console.log(largestRectangleArea([2, 1, 2]));
