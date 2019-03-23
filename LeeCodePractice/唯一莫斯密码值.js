/**
 * @param {string[]} words
 * @return {number}
 */
/* 
  探索了下leetcode上的提交 拼接莫斯码的思路都基本一致 时间复杂度O(n^2)
  在去重上有两种方案
  1、indexOf()===-1
  2、new Set()
*/

var uniqueMorseRepresentations = function(words) {
  let mos=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  let rs=[]
  //let mosArr=
  words.forEach(el=>{
      let word=[...el.split('')];
      
      let wordMos=word.map(el=>{
          let mosIdx=el.charCodeAt()-97;
          return mos[mosIdx];
          
      }).join('')
      
      if(rs.indexOf(wordMos)===-1){rs.push(wordMos)};
  })
//    console.log(mosArr)
  
  return rs.length
};