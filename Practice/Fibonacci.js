/* 
  要求：完成一个函数，求n个斐波那契数(从1开始的Fibonacci数列)
*/


/* 
  递归方法 
  自顶而下递出，再从最底（边际条件），层层向上归去（计算结果）
*/
function Fibonacci(n) {

  if (n <= 1) {
    return n;
  } else {
    return Fibonacci(n - 1) + Fibonacci(n - 2);
  }
}

console.log(Fibonacci(5))

/* 
  循环方法 
  直接自底而上
*/

function FibonacciLoopWay(n) {
  if (n <= 1) {
    return n
  } else {
    let iter = 2;
    let pre = 0, now = 1, next = 0;
    while (n >= iter) {
      next = pre + now;
      pre = now;
      now = next;
      iter++
    }
    return next
  }
}
console.log(FibonacciLoopWay(5))