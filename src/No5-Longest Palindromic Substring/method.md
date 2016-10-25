[toc]
# Problem Description
```description
Longest Palindromic Substring
```language
Given a string S, find the longest palindromic substring in S. You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.
```
# Analyse
最长回文字符串。回文字符串即是一种正反度都一样的字符串，字符串本身关于中心对称。解决这类问题可以采用多种算法实现。
## Methond one: violence time complexity O(N^3)
暴力破解的方式是求解出字符串s的所有子串，然后判断是否为回文，计算出回文长度，将回文子字符串的起始索引与长度保留，然后在计算出的所有的回文字符串中找出长度最长的即可，代码如下：
```JavaScript
var longestPalindrome = function(s) {
    function isPalin(s){
        if(!s) return false;
        var len = s.length;
        for(var i=0;i<Math.floor(len/2);i++){
            if(s[i]!=s[len-i-1]) return false;
        }
        return true;
    }
    var len = 1;
    var idx = 0;
    for(var i=0;i<s.length;i++){
        for(var j=i+1;j<s.length;j++){
            var sub = s.substring(i,j+1);
            if(isPalin(sub)&&sub.length>len){
                len = sub.length;
                idx = i;
                
            }
        }
    }
    return s.substr(idx,len);
};
```
很明显 time limit exceeded
## Method two Dynamic Programming time conplexity O(N^2)
回文字符串有这样一个特性，其子串也是回文字符串。