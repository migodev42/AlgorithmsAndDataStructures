#include<stdio.h>
#include<math.h>
 
#define MAXNUM 10
 
void main()
{
    void shellSort(int array[],int n,int t);//t为排序趟数
    int array[MAXNUM],i;
    for(i=0;i<MAXNUM;i++)
        scanf("%d",&array[i]);
    shellSort(array,MAXNUM,(int)(log(MAXNUM+1)/log(2)));//排序趟数应为log2(n+1)的整数部分
    for(i=0;i<MAXNUM;i++)
        printf("%d ",array[i]);
    printf("\n");
}
 
//根据当前增量进行插入排序
void shellInsert(int array[],int n,int dk)
{
    int i,j,temp;
    for(i=dk;i<n;i++)//分别向每组的有序区域插入
    {
        temp=array[i];
        for(j=i-dk;(j>=i%dk)&&array[j]>temp;j-=dk)//比较与记录后移同时进行
            array[j+dk]=array[j];
        if(j!=i-dk)
            array[j+dk]=temp;//插入
    }
}
 
//计算Hibbard增量
int dkHibbard(int t,int k)
{
    return (int)(pow(2,t-k+1)-1);
}
 
//希尔排序
void shellSort(int array[],int n,int t)
{
    void shellInsert(int array[],int n,int dk);
    int i;
    for(i=1;i<=t;i++)
        shellInsert(array,n,dkHibbard(t,i));
}
 
//此写法便于理解，实际应用时应将上述三个函数写成一个函数。