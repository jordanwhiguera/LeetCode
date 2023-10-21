//SOLVED: Time O(n) Space O(1)
function minSubArrayLen(target, nums) {
  let minLength = Infinity; // Start with a large value for minimum length
  let left = 0; // Left pointer for the sliding window
  let sum = 0; // Current sum of the subarray

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]; // Add the current number to the sum

    // While the current sum is greater than or equal to target
    while (sum >= target) {
      //+1 because (right - left +1)is the length of the array.
      //EX: Array [1,2,3] , right = 2 and left =0, 2-0 =2 is not the length of array, add 1 to get 3, the length of array
      minLength = Math.min(minLength, right - left + 1); // Update the minimum length
      sum -= nums[left]; // Subtract the left-most number from the sum
      left++; // Move the left pointer to the right
    }
  }

  // If minLength is still Infinity, it means no subarray was found
  return minLength === Infinity ? 0 : minLength;
}
