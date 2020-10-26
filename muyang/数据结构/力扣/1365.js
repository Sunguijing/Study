// 给你一个数组 nums， 对于其中每个元素 nums[i]， 请你统计数组中比它小的所有数字的数目。换而言之， 对于每个 nums[i] 你必须计算出有效的 j 的数量， 其中 j 满足 j != i 且 nums[j] < nums[i]。以数组形式返回答案。


/**
 * @param {number[]} nums
 * @return {number[]}
 */

var smallerNumbersThanCurrent = function (nums) {
  const res = Array.from({ length: nums.length }, function () { return 0; });
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j !== i && nums[i] > nums[j]) {
        if (!res[i]) {
          res[i] = 0;
        }
        res[i] += 1;
      }
    }
  }
  console.log(res)
  return res
};

const nums = [8, 1, 2, 2, 3];

smallerNumbersThanCurrent(nums);