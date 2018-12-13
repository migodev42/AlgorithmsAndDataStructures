let c;
let a=[1,3,5];
let b=[2,4,5,6];

/*
    已知线性表 
    A={1，3，5}
    B={2，4，5，6}
    请采用线性表的基本操作实现 C= A 交 B
    *顺序存储结构的线性表
*/

function MergeAB(listA,listB){
    let c=[];
    /*
        错误的尝试，使用map,foreach等数组函数

        let c=listA.map(el => {
            // return listB.indexOf(el) !== -1 ?el :''
            if(listB.indexOf(el) !== -1){
                // console.log(el);
                return el;
            }
        });
    */
    for( let a of listA){
        if (listB.indexOf(a) !== -1){
            c.push(a)
        }
    }
    return c;
}

c=MergeAB(a,b);
console.log(c);