/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let rs;
  if(x<=((-2) ** 31) || x>=(2 ** 31 -1) ){
      console.info('输入超出');
      return 0;
  }
    
  let xArr=String(x).split('').reverse();
  const i=xArr.slice(xArr.length-1).join('')
  if(i === '-'){
    rs= parseInt('-'+xArr.join(''));
  
  }else{
    rs=Number(xArr.join(''));
  }
  if(rs<=((-2)**31) || rs>=(2**31-1)   ){
    console.info('输出超出');
    return 0;
  }else{
    return rs;
  }
};

console.log('结果',reverse(-1563847412));