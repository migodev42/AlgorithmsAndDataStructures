/* 
  题目：
  有长度为n 的数组，其元素都是整数（有正有负）。
  在连续的子数组中找到其和为最大值的数组。
  
  输入的数组为[1, -2, 3, 10, -4, 7, 2, -5]，
  和最大的子数组为[3, 10, -4, 7, 2]。因此输出为该子数组的和18 

  参考：https://www.jianshu.com/p/7053d71ca5b6
*/

/* 
  解法1：分析数组规律。(类似于贪心算法取局部最优解的思想)
  
  遍历累加，每次加的时候存储一个sum作为判断，
  若curSum<maxSum,则不做操作
  若curSum>maxSum,则更新终止pos为当前pos，并将maxSum更新为新的最大值
  若curSum<当前元素curEl 则起始pos变为当前的pos


  输入的数组为[1, -2, 3, 10, -4, 7, 2, -5]，

  两个关键的点，
  1、起始pos的选择条件分析：
  起始位置必定是正数，
  起始位置必定大于前面子数组之和，
  更新起始位置时候需要更新curSum和maxSum为起始位置的值
  更新startPos和endPos
  2、结束pos的条件分析：
  结束pos的curSum必定大于maxSum,
  更新maxSum为当前结束pos的curSum
*/
function maxSubArr(arr) {
  let maxSum = 0,
    curSum = 0
    startPos=0
    endPos=0
    subSet=[];
  for (let i = 0; i < arr.length; i++) {
    let curEl = arr[i];
    curSum += curEl;

    if (curSum < curEl && curEl>0) {
      startPos=i;
      endPos=i;
      subSet.push([startPos,endPos]);
      curSum=curEl;
      maxSum=curEl;
    }
    if (curSum > maxSum) {
      endPos=i;
      maxSum=curSum;
    }
    
  }
  subSet.forEach(el=>{
    console.log(el);
  })
  return arr.slice(startPos,endPos+1)
}

let arr=[-3, -2, -3, 10, -4, -7, 2, 6];//这种情况 下 应该是[10] 而输出的是[2,6]
console.log( maxSubArr(arr) );

