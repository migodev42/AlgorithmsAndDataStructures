/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let xStr=String(x);
  console.log(xStr.split(''));
  let xArr=xStr.split('').reverse();
  console.log('输出',xArr.slice(xStr.length-1))
  const i=xArr.slice(xStr.length-1)
  if(i === '-'){
    console.log('负数');
  }else if(i === '0'){
      
  }else{
      console.log('正常');
      return parseInt(xArr.join(''));
  }
};

console.log('结果',reverse(-123));