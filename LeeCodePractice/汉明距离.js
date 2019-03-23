/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  if(x<0 || y > Math.pow(2,31)){
      return false
  }
  const lenY=y.toString(2).length,
        lenX=x.toString(2).length,
        revX=x.toString(2).split('').reverse(),
        revY=y.toString(2).split('').reverse();
  
  let lenMax=0,
      countDiff=0
  
  lenY>lenX? lenMax=lenY:lenMax=lenX

  for(let i =0 ; i<lenMax;i++){
      if(!revX[i]){
          revX[i]="0"
      }
      if(!revY[i]){
          revY[i]="0"
      }
      
      if(revX[i]!==revY[i]){
          countDiff++
      }
  }
  
  return countDiff
};

console.log(hammingDistance(1,4) )


/* 
  奇怪的快速解法 
  没有理解到？

*/

return [...(x ^ y).toString(2)].filter(s => s == '1').length