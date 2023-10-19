//SOLVED: Time O(n) Space O(1)
function maxArea(height) {
  //have pointers on left and right side and set max area to 0
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    // minheight will be the shortest between the left and right side
    let minHeight = Math.min(height[left], height[right]);
    //current area is min height *distance
    let currentArea = minHeight * (right - left);

    // Update max area if current area is larger
    maxArea = Math.max(maxArea, currentArea);

    // Move the pointer of the shorter line inward
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}
