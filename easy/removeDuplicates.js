// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/*
  - array of numbers
  - it will always have numbers
  - it will always have exactly one unique number

  - return the unique number
  - without two loops or an O(n) time complexity
*/
const removeDuplicates = nums => {
  for (let i = 0; i < nums.length; i++) {
    const placeHolder = nums[i];
    nums[i] = '*';

    if (nums.includes(placeHolder)) nums[i] = placeHolder;
    else return placeHolder;
  }
};
console.log(removeDuplicates([1, 2, 3, 4, 5, 100, 100, 893, 1, 2, 3, 4, 5]));
