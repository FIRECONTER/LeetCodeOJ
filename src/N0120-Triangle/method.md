[toc]
# Problem Description
```description
Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle
```
Examples:
```
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]

The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
```
# Analyse
计算三角形排列数组集合中从顶部到底部的最小值，要求选择最小值的路径上的节点上下是临近的。最先想到的肯定是使用回朔算法每一层计算下一层返回的两个分支的最小值与本层当前节点相加作为本层本节点的最小值返回。
## Method one: backtracking 
JavaScript代码如下:
```JavaScript
var minimumTotal = function(triangle) {
    if(triangle.length == 0) return 0;
    var num = getNum(triangle,0,0);
    return num;
};

function getNum(triangle,i,j){
if(i==triangle.length-1) return triangle[i][j];
var a = getNum(triangle,i+1,j);
var b = getNum(triangle,i+1,j+1);
if(a<=b) return triangle[i][j]+a;
else return triangle[i][j]+b;
}
```
回朔算法会导致所有的数组中的元素都会遍历，从而导致时间复杂度飙升。但是发现在整个求解过程中有一些子问题有重叠的性质，如果把这个数组构成三角形看做一颗二叉树可以发现使用回朔有比较多的重叠路径的节点重复计算了最小值，所以本题采用动态规划完成。
## Method two dynamic programming $O(n)$
实现代码如下:
```JavaScript
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if(triangle.length == 0) return 0;
    var rows = triangle.length;
    
    //generate rows-1 data
    var arr = new Array(rows);
    var i =0;
    for(;i<rows;i++){
        arr[i] = new Array(i+1);
    }
    i = i-1;
    for(var j=0;j<triangle[triangle.length-1].length;j++) arr[i][j] = triangle[triangle.length-1][j];
    
    for(var i=rows-2;i>=0;i--){
       for(var j=0;j<i+1;j++){
           if(arr[i+1][j]<=arr[i+1][j+1]) arr[i][j]=triangle[i][j]+arr[i+1][j];
           else arr[i][j]=triangle[i][j]+arr[i+1][j+1];
       }
    }
    return arr[0][0];
};
```
