/**
 * @param {number[]} A
 * @return {number}
 */


 /* 
  1 暴力检验法 
  时间复杂度 O(n) 空间复杂度O(1)
  因为给定数组确定时山脉数组，所以直接按定义检测
 */
var peakIndexInMountainArray = function(A) {
  if(A.length<3){
      return
  }

  for(let i=0; i<A.length;i++){
      if(A[i]<A[i+1]){
          continue;
      }else{
         return i
      }
  }
  

};

/* 
  2 二分法查找思想 
*/
var peakIndexInMountainArray = function(A) {
  let begin=0;
  let end=A.length-1;
  
  while(begin<=end){
    let mid=Math.floor((begin+end)/2)
    if(A[mid]>A[mid+1] && A[mid]>A[mid-1]){
      return mid
    }

    if(A[mid]<A[mid+1]){
      begin=mid+1;

    }else{
      end=mid-1;
    } 
  }

  

};
