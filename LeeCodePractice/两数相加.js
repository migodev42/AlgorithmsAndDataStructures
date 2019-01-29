/* 
  https://leetcode-cn.com/problems/add-two-numbers/
*/


let l = [];
for (let s of [1, 2, 3]) {
  l.push(s);
}
console.log(l)

let arr = [1, 2, 3];
console.log(parseInt(arr.reverse().join('')));
let rs = parseInt(arr.reverse().join(''));
console.log(typeof (rs));


function ListNode(val) {
  this.val = val;
  this.next = null;
}
l1=new ListNode(2);




var addTwoNumbers = function (l1, l2) {
  let l = getNum(l1);
  return l
};

function getNum(linkedList) {
  let listArr = [];
  while (linkedList.next !== null) {
    listArr.push(linkedList.val);
    linkedList= linkedList.next;
  }
  return parseInt(listArr.reverse().join(''));
}