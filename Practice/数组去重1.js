/* 题目描述
编写一个Javascript函数，传入一个数组，对数组中的元素进行去重并返回一个无重复元素的数组，数组的元素可以是数字、字符串、数组和对象。举例说明：
    1. 如传入的数组元素为[123, "meili", "123", "mogu", 123],则输出：[123, "meili", "123", "mogu"]
    2. 如传入的数组元素为[123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"],则输出：[123, [1, 2, 3], [1, "2", 3], "meili"]
    3. 如传入的数组元素为[123, {a: 1}, {a: {b: 1}}, {a: "1"}, {a: {b: 1}}, "meili"],则输出：[123, {a: 1}, {a: {b: 1}}, {a: "1"}, "meili"] 
*/

// 因为数组中存在 数组 和对象类型的成员，所以应该进行深拷贝

function mySet(arr) {
  let rs = [];
  for (let i = 0; i < arr.length; i++) {
    rs.indexOf(arr[i]) === -1 ? rs.push(arr[i]) : countinue;
  }
  return rs;
}

console.log(mySet([123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"]));


function distinct (arr) {
  let hash = {}
  let newArray = []
  for(let i =0; i<arr.length; i++){
      let string = JSON.stringify(arr[i])
      if(!hash[string]){
          hash[string] = 1
          newArray.push(JSON.parse(string))
      }
  }
  return newArray
}

console.log(distinct([123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"]));