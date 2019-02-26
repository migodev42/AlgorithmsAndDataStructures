/**
 * https://leetcode-cn.com/problems/n-repeated-element-in-size-2n-array/submissions/
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  const len =A.length;
  A.sort(function(val1,val2){
      return val2-val1;
  })
  //排序后的该数组有以下规律
  
  //若第N/2位的数字和最后一位数字不相等，那么重复了N次的元素为第N/2-1位数字的集合
  //若相等，那么重复了N次的元素为最后一位数字的集合
  console.log(A,len);
  return A[len/2] === A[len-1] ? A[len-1]: A[len/2-1]
};

/* 测试用例
  [5,1,5,2,5,3,5,4]
  [2,1,2,5,3,2]
  [1,2,3,3]
*/