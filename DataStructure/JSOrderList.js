/*
    Js实现顺序线性表的基本操作
*/

class OrderList {
    constructor() {
        // let items = [];
        this.items = []
    }

    findElemByVal(data) {
        //按值查找,返回对应的位置
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] === data) {
                return i + 1;
            }
        }
    }

    findElemByPos(p) {
        //按位置查找，返回对应的值
        if (p > 0 && p <= this.items.length && this.items.length > 0) {
            return this.items[p - 1];
        }
        else {
            return false;
        }
    }

    ListInsert(pos, elem) {
        //按位置插入元素操作，返回新的数组
        if (pos > 0 && pos <= this.items.length && this.items.length > 0) {
            for (let i = this.items.length ; i > pos - 1; i--) {
                this.items[i] = this.items[i-1];
                //从最后一个元素依次向后移动一个位置，直到待插入位置
            }
            this.items[pos-1]=elem;
            return this.items;
        } else {
            return false
        }

    }

    ListDelete(pos){
        //按位置删除,返回删除的元素
        if (pos > 0 && pos <= this.items.length && this.items.length > 0){
            let DelElem=this.items[pos-1]
            for(let i=pos-1; i<this.items.length; i++){
                this.items[i]=this.items[i+1];
            }
            
            this.items.pop();
            return DelElem;
        }else{
            return false;
        }    
    }


}

/*
    测试用例
*/
var list=new OrderList();
list.items.push('a','b','c');
console.log(list.items);
console.log(list.findElemByVal('b'));
console.log(list.findElemByPos(1));
console.log(list.ListInsert(2,'z'));
console.log(list.ListDelete(3));
console.log(list.items);
