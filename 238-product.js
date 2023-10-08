//SOLVED: Time O(n) Space O(n)
function productExceptSelf(nums) {
  // Create an output array initialize with 1
  let output = new Array(nums.length).fill(1);
  //Create prefix and suffix array and also fill them with 1s
  let prefixProducts = new Array(nums.length).fill(1);
  let suffixProducts = new Array(nums.length).fill(1);

  // Generate prefix products.
  //prefixProduct is 1 because the first thing we multiply it with will give that same value. EX:2*1=2
  let prefixProduct = 1;
  //we start at i =1 because at i=0, there is nothing before it , so we have prefixPruducts[0]=1 and we just multiply that with suffixPruducts[0]
  //EX: Input: [2,3,4,5]===> prefixProducts= [1,2,6,24]
  //1 is only number before 2, 1*2 is only number before 3, 1*2*3 is only number before 4, 1*2*3*4 is only number before 5.
  for (let i = 1; i < nums.length; i++) {
    prefixProduct *= nums[i - 1];
    //what we get for prefixProduct that goes into PrefixProducts[i]and we do prefixProdiucts[i]*suffixProducts[i] to get output[i]
    prefixProducts[i] = prefixProduct;
  }

  // Generate suffix products.
  //we start at i = nums.length -2 because there is nothing after num.length -1 so just let num.length -1 index in suffixPructs =1
  //EX: INput: [2,3,4,5]====> suffixProducts= [60,20,5,1]
  //there is nothing after 5, so have 1. at 4 only 5 is after so 5*1, at 3 we have 4*5*1, at 2 we have 3*4*5*1.
  let suffixProduct = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    suffixProduct *= nums[i + 1];
    suffixProducts[i] = suffixProduct;
  }

  // Generate output using prefix and suffix products.
  for (let i = 0; i < nums.length; i++) {
    output[i] = prefixProducts[i] * suffixProducts[i];
  }

  return output;
}
