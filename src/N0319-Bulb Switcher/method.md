[toc]
# Problem Description
```description
There are n bulbs that are initially off. You first turn on all the bulbs. Then, you turn off every second bulb. On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb. Find how many bulbs are on after n rounds.
```
Examples:
```
Given n = 3. 

At first, the three bulbs are [off, off, off].
After first round, the three bulbs are [on, on, on].
After second round, the three bulbs are [on, off, on].
After third round, the three bulbs are [on, off, off]. 

So you should return 1, because there is only one bulb is on.
```
# Analyse
判断完全平方数
## Methond one: stack push and pop $O(n)$
JavaScript代码如下:
```JavaScript
var bulbSwitch = function a(n) {
   if(n==0) return 0;
   var num = 0;
   for(var i=1;i<=n;i++){
       var temp = Math.sqrt(i);
       if(temp == Math.floor(temp)) num++;
   }
  return num;
};
```
