// Store算法每次总是选择在磁盘上存储长度最短的文件
// 使用贪心算法进行贪心选择的意义为，使得剩余可存储空间极大化，以便存储更多的文件

// 由于文件序列可能未按增序排列，所以使用quickSort快排算法重排

function Store(fileCount , totalLen,arr){
  let length=arr.length;
  let sortedArr=quickSort(arr);
  let sum=0;
  
  sortedArr.forEach(el=>{
    if(sum+el<=totalLen){
      sum+=el;
      length--;
    }
    else{
      console.log("存满了")
    }
  })
  console.log(sum);
  return fileCount-length;
}

function quickSort(arr){
  if(arr.length<=1) {return arr};
  let pivotIndex=Math.floor(arr.length/2); //基准
  // let pivot=arr[pivotIndex];
  var pivot = arr.splice(pivotIndex, 1)[0];
  let left=[];
  let right=[];
  arr.forEach(el=>{
    el<pivot?left.push(el):right.push(el)
  });
  return quickSort(left).concat([pivot],quickSort(right));

}


/* 
  测试用例
*/

let arr=[2 ,3 ,13, 8, 80 ,20,4];
let fileCount=arr.length;
let totalLen=50;


console.log(Store(fileCount , totalLen,arr));
