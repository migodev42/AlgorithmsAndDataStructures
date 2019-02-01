/*
    Js实现二分查找
*/
let OrderList=[1,3,9,17,29,45,50,70,90];
function BinarySearch(OrderList,elem){
    let high=OrderList.length-1;
    let low = 0;
    let mid;
    while(low<=high){
        mid=Math.floor((high+low)/2);
        if(OrderList[mid]===elem){
            return mid;
        }

        if(elem>OrderList[mid]){
            low=mid+1;
        }
        else{
            high=mid-1;
        }
        
        
    }
    return -1;
}

let rs=BinarySearch(OrderList,1);
console.log(rs,OrderList[rs]);