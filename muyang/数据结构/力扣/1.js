//给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
//你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
// 链接：https://leetcode-cn.com/problems/two-sum

/** 
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
 * 
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 两次遍历 时间复杂度o(n^2)
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      }
      if (nums[j] + nums[i] === target) {
        return [i, j];
      }
    }
  }
}
// 空间换时间  时间复杂度 o(n)
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [i, map.get(nums[i])]
    } else {
      map.set(target - nums[i], i)
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));