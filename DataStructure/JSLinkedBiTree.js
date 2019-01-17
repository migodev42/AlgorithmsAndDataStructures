// function Biode(elem){
//   this.element=elem;      //数据域
//   this.rchild=null;         //指针域
//   this.lchild=null
// }
// function LinkedTreeLeftChild(p,biTree){      
//     let count=0;
//     if(biTree.lchild!==null){

//       LinkedTreeLeftChild(p,biTree.lchild);
//       count++;
//     }else(
//       LinkedTreeLeftChild(p,biTree.rchild);
//     )



// }


int BitreeLchild(Bitree bt){
  if (bt == null) return 0;
  if (bt -> lchild == null && bt -> rchild == null) return 0;
  countL = BitreeLchild(bt -> lchild);
  BitreeLchild(bt -> rchild);
  return countL
}



for (int r = 2; r <= n; r++){
  for (int i = 1; i <= n - r + 1; i++){
    int j = i + r - 1;
    for (int k = i; k <= j; k++)
    {
      int t = m[i][k] + m[k][j];
      if (t < m[i][j]) {
        m[i][j] = t;
      }
    }
  }
}