//SOLVED: Time O(n^2) Spsce O(n)
function threeSum(nums) {
  // Sort the array
  nums.sort((a, b) => a - b);

  let result = [];
  //we normally do i<nums.length , but we do -2 because we are looking for triplets.
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates, if there is duplicate i++
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    //left alway bigger than i and right is last element
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        // Skip duplicates
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}
