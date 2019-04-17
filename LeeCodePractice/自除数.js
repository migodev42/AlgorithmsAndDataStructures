/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 * https://leetcode-cn.com/problems/self-dividing-numbers/submissions/
 */
var selfDividingNumbers = function(left, right) {
  let rs=[],selfcut;
  for(let i=left; i<=right; i++){
      selfcut=true;
      i.toString().split('').forEach(el=>{
         // console.log(i,parseInt(el,10),i%parseInt(el,10));
          if(i%parseInt(el,10)!==0){
            selfcut=false             
         }  
      })
      // console.log(selfcut);
      if(selfcut){
          rs.push(i);
      }
  }
  // console.log(rs)
  return rs
};