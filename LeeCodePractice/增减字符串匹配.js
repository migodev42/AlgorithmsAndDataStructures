/**
 * @param {string} S
 * @return {number[]}
 * https://leetcode-cn.com/problems/di-string-match/submissions/
 */
var diStringMatch = function(S) {
  const arrlen=S.length+1;
  let rs=[];
  let left=0;
      right=S.length;
  S.split('').forEach(el=>{
      if(el==='I'){
          rs.push(left);
          left++
      }else if(el==='D'){
          rs.push(right);
          right--;
      }else{
          return 'S is not in right shape.'
      }
  })
  rs.push(right) || rs.push(left);
  return rs
};