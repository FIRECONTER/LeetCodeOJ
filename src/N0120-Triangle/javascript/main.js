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
