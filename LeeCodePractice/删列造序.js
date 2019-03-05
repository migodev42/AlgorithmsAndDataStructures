/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
  const arrLen=A.length;
  const strLen=A[0].length;
  let rs=0
  for(let i =0; i<strLen; i++){
    for(let j = 0 ; j<arrLen-1;j++){
      if(A[j][i]>A[j+1][i]){
        rs++;
        break;
      }
    }
  }
  return rs;
};


const A= ["cba","daf","ghi"];
console.log(minDeletionSize(A));