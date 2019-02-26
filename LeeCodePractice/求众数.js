/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let rs={}
  for(let i=0 ; i<nums.length; i++){
      if( rs[nums[i]] ){
          rs[nums[i]]++
      }else{
          rs[nums[i]]=1
      }
  }
  console.log(rs);
  for(let [key,value] of Object.entries(rs)){
    console.log(key,value);
    if (value > (nums.length/2)){
          return key;
      }
  }
};

console.log(majorityElement([3,2,3]))
