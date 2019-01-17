// http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html
/* var quickSort = function(arr) {

  　　if (arr.length <= 1) { return arr; }
  
  　　var pivotIndex = Math.floor(arr.length / 2);
  
  　　var pivot = arr.splice(pivotIndex, 1)[0];
  
  　　var left = [];
  
  　　var right = [];
  
  　　for (var i = 0; i < arr.length; i++){
  
  　　　　if (arr[i] < pivot) {
  
  　　　　　　left.push(arr[i]);
  
  　　　　} else {
  
  　　　　　　right.push(arr[i]);
  
  　　　　}
  
  　　}
  
  　　return quickSort(left).concat([pivot], quickSort(right));
  
  }; */


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