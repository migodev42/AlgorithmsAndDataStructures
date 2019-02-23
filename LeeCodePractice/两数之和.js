/* 
  https://leetcode-cn.com/problems/two-sum/solution/ 
*/

/* 
  暴力法 
  时间复杂度 O(n^2)
  空间复杂度 O(1)
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const  len=nums.length;
  for(let i=0;i<len;i++){
      for(let j=i+1;j<len;j++){
          if(nums[i]+nums[j]===target){
              return [i,j];
          }
      }
  }
};

/* 
  哈希法 
  时间复杂度 O(n)
  空间复杂度 O(n)
*/