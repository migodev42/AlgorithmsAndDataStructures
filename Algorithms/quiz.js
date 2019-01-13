function F_M_S(array,low,high){
  if(high-low<0.01){
    return array[low];
  }
  else{
    let mid= Math.floor((low+high)/2);
    let leftSum=F_M_S(array,low,mid);
    let rightSum=F_M_S(array,mid+1,high);
    console.log(leftSum,rightSum);
  }
}

F_M_S([1,2,3,4,5],0,4);