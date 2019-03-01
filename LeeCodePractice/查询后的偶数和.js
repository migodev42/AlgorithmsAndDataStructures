/** 
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 * https://leetcode-cn.com/problems/sum-of-even-numbers-after-queries/
 */
/*  时间复杂度O(n^2)  可以缩小为O(n) */
var sumEvenAfterQueries = function(A, queries) {
  if(Array.isArray(A) !== true || Array.isArray(queries)!== true){
      return false
  }
  
  let rs=[];
  queries.forEach(el=>{
      // el[0] addNum el[1] addIndex
      A[el[1]]+=el[0];
      console.log(A);
      let oddSum=A.reduce((pre,cur,idx,array)=>{
        console.log(pre,cur)  
        if(isOdd(cur) && isOdd(pre)){
              return pre+cur;
          }else if(isOdd(pre)){
            return pre;
          }else{
            return cur
          }
      })
      console.log(oddSum);
      if(isOdd(oddSum)){
        rs.push(oddSum);
      }
      else{
        rs.push(0)
      }
      
      
  })
  return rs;
};


function isOdd(num){

  return num%2 === 0 ? true : false
}

// let A = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]];
// let A =[1],queries=[[4,0]];

let A =[3,2],
    queries=[[4,0],[3,0]];
console.log(sumEvenAfterQueries(A,queries));