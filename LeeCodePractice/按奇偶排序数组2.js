/**
 * @param {number[]} A
 * @return {number[]}
 */


 /* 
  1、两次遍历 
  时间复杂度O(n) 空间复杂度O(2n)
  第一次遍历将奇数、偶数分别保存在数组中
  第二次遍历根据idx的奇数、偶数序号分别从奇、偶数组中取。（即奇数位取奇数，偶数位取偶数）

 
 */
var sortArrayByParityII = function(A) {
    
  odd=[];
  nodd=[];
  rs=[];
  
  A.forEach(el=>{
      el%2===1?nodd.push(el):odd.push(el);
  })
  
  for(let i=0 ; i<A.length; i++){
      i%2===1?rs.push(nodd.shift()):rs.push(odd.shift());    
  }
  
  return rs;
};

/* 
  2 交换的思想 
  需要遍历中嵌套遍历
  时间复杂度O(n) 空间复杂度O(1)
  遍历原数组，若当前位置上的数奇偶不符合位置的奇偶，
  则遍历其后的数找到第一个符合的进行交换。

*/
var sortArrayByParityII2 = function(A) {
    for(let i=0;i<A.length; i++){
      if(i%2===A[i]%2){
        continue;
      }else{
        let j=i+1;
        while(j<A.length){
          if(i%2===A[j]%2){
            let temp=A[i];
            A[i]=A[j];
            A[j]=temp;
            break;
          }
          j++
        }
      }


    }
    return A
  
};

let A=[4,2,5,7];
A=[3,1,4,2];
console.log( sortArrayByParityII2(A))

/* 
  3 目测最优方案 
  一遍循环 时间复杂度O(n) 空间复杂度O(n)
  在遍历时，将奇数放在结果数组的奇数位置，偶数放在结果数组的偶数位置

*/
var sortArrayByParityII3 = function(A) {
    let rs=[];
    let even=0;
    let odd=1;
    A.forEach(el=>{
      if(el%2===1){
        rs[odd]=el;
        odd+=2;
      }else{
        rs[even]=el;
        even+=2
      }
    })
    return rs;
};

console.log(sortArrayByParityII3(A))