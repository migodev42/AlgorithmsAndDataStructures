/*
    Js实现单链表及基本操作
    
    **基本操作已实现
    **appendNode之后的方法待测试
*/
class LinkedList{
    constructor(){
        this.length=0;
        
        this.Node=function(elem){
            this.element=elem;      //数据域
            this.next=null;         //指针域
        }
        this.head=new this.Node('head');
    }

    // newNode(elem){
    //     this.element=elem;
    //     this.next=null
    // }
    initList(elem){
        
        let nodes=[];
        // 建立单链表，输入一个元素的数组建立这些元素的链式存储结构
        for(let i =elem.length-1; i>=0 ; i--){
            nodes[i] = new this.Node(elem[i]);
            if(this.head===null){
                this.head.next=nodes[i];
            }else{
                nodes[i].next=nodes[i+1];
                this.head.next=nodes[i];
            }
            this.length++
        }
        
    }

    displayList(){
        let current =this.head;
        while(current.next!=null){
            console.log(current.next.element)
            current=current.next;
        }
    }

    appendNode(elem){
        let node=new Node(elem);            //构造新的元素节点
        let current;
        if(this.head.next === null){             //头节点为空时  当前结点作为头节点    
            this.head.next = node;
        }else{
            //头结点不为空遍历链表，直到当前结点.next为空,则将新元素结点赋值给当前元素结点.next
            current=this.head;
            while(current.next){
                current=current.next
            }
            current.next=node;
        }
        this.length++;
    }

    searchNodeByPos(pos){
        //按位置查找，返回目标元素
        let i =0;
        let current=this.head;

        while( current.next !== null && pos!==0){
            
            if(i===pos){
                return current;
            }
            current=current.next;
            i++;
        }
        return false;
    }

    searchNodeByVal(val){
        let current=this.head;
        let pos=0
        if(this.head.next===null){
            return false
        }
        while(current.next!==null){
            if(current.element===val){
                return current.element;
            }
            current=current.next;
            pos++;
        }
        return false
    }

    removeNode(pos){
        
        let p=this.searchNodeByPos(pos-1);
        let s=p.next;

        p.next=s.next;



    }

    insertNode(pos,elem){
        let node =new this.Node(elem);
        let p = this.searchNodeByPos(pos-1);
        node.next=p.next;
        p.next=node;
    }

    
}

let list = new LinkedList();
list.initList(['a','b','c','d']);
console.log(list);
list.displayList();



/*
    参考 电子科大数据结构与算法
        https://www.cnblogs.com/tylerdonet/p/5880088.html
*/