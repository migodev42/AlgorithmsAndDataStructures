/*
    JS实现简单插入排序
    按关键字从小到大排序
*/

let list=[1,3,12,10,9,11,8,13,14,27,18,20]

function SimpleInsertSort(list){
    for(let i =1; i<list.length;i++){
        let temp=i;
        let current=list[i] //暂存当前元素
        while(current<list[temp-1]){    //定位
            //当前元素依次与有序列进行比较

            //挤空
            list[temp]=list[temp-1];
            //若当前元素小于，有序列元素往后移动一位
            temp-=1;
        }
        //直到当前元素不再小于有序列的元素
        //将当前元素插入这个元素后面
        list[temp]=current; //插入
    }
    return list
}

let rs=SimpleInsertSort(list);
console.log(rs);