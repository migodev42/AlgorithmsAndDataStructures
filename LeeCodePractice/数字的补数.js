/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  let t1=num.toString(2).replace(/0/g,'temp').replace(/1/g,'0').replace(/temp/g,1)
  console.log(num.toString(2),t1)
  return parseInt(t1,2)
  
};