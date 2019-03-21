/**
 * @param {number} N
 * @return {number}
 */

/* 
  1 递归方法 


*/
var fib = function(N) {
  if(N<=1){
      return N
  }else{
      return fib(N-2)+fib(N-1);
  }
};

/* 2 尾递归改写为循环方法 */

var fib2 = function(N) {
  let fibArr=[0,1];
  for(let i =2; i<N; i++){
    fibArr[i]=fibArr[i-1]+fibArr[i-2]
  }
  return fibArr[N-1]
};


let N=4;
console.log(fib2(N));