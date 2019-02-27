/**
 * @param {number} n
 * @return {boolean}
 所有不快乐数的数字平方和计算，最后都会进入 4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4 的循环中，但开始循环的第一个不一定是4。
 https://zh.wikipedia.org/wiki/%E5%BF%AB%E6%A8%82%E6%95%B8
 */
let base=[4, 16, 37, 58, 89, 145, 42, 20]
var isHappy = function(n) {
    let rs=0;
    for (let el of String(n).split('')){
        rs+=Math.pow(el,2)
    }
    console.log(rs)
    if(rs===1){
        return true
    }else if(base.indexOf(rs)!==-1){
        return false     
    }else{
        return isHappy(rs)    
    }
    
};