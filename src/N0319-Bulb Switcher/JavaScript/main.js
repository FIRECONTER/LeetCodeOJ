var bulbSwitch = function a(n) {
   if(n==0) return 0;
   var num = 0;
   for(var i=1;i<=n;i++){
       var temp = Math.sqrt(i);
       if(temp == Math.floor(temp)) num++;
   }
  return num;
};