/**
 * @param {number[]} A
 * @return {number[]}
 * https://leetcode-cn.com/problems/squares-of-a-sorted-array/
 */
var sortedSquares = function(A) {
  return A.map(el=>{
      return Math.pow(el,2);
  }).sort(function(val1,val2){
      return val1-val2;
  })
  
};