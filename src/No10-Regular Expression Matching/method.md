[toc]
# Problem description
Implement regular expression matching with support for '.' and '*'.
```
'.' Matches any single character.
'*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "a*") → true
isMatch("aa", ".*") → true
isMatch("ab", ".*") → true
isMatch("aab", "c*a*b") → true
```
# Analyse
## Method
尝试过使用最常规的方法解决。首先P字符串遇到第一个字符是*的时候返回false不匹配，这是一种错误的语法。然后需要重点考虑的是遇到*字符s字符串中跳过字符的问题。一般采用贪婪的跳过策略，因为*本身就是一种贪婪的匹配，这种方式实现的代码能够解决一些问题。但是遇到如下的问题就会出错，比如`s=abbc` `p=a*bbc` 一旦遇到这种字符串，贪婪匹配策略失败。仔细分析*代表的意义是尽可能多的匹配，所以如果在某些采用贪婪匹配失败的场合需要能够回到最初的场合重新选择匹配策略。因此这一题的解法就需要采用回朔的算法(backtracking)实现。因此实现的JavaScript代码如下:
```JavaScript
var isMatch = function(s, p) {
    var ids = 0;
    var idp = 0;
    function isMatch(ids,idp){
        if(idp==p.length) return ids==s.length;
        if(p[idp+1]!='*'){
            //the next char is not *
            if(p[idp]!='.'&&p[idp]!=s[ids]) return false;
            else return isMatch(ids+1,idp+1);
        }
        else{
            //the next char is *
            if(isMatch(ids,idp+2)) return true;//this char means nothing
            else{
                var len = s.length-ids;
                for(var i=0;i<len;i++){
                    if(p[idp]!='.'&&p[idp]!=s[ids+i]) return false;
                    if(isMatch(ids+i+1,idp+2)) return true;
                }
                return false;
            }
        }
    }
    if(p[0]=='*') return false;
    else return isMatch(ids,idp);
};
```
## Result

## PS 最开始想出来的但是不能解决问题的算法
```JavaScript
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if(!s||!p) return false;
    var ind1 = 0;
    var ind2 = 0;
    while(ind1!=s.length&&ind2!=p.length){
        if(s[ind1]==p[ind2]){
            if(p[ind2+1]=='*')
            {
                var temp = s[ind1];
                do{
                    ind2++;
                }while(p[ind2]=='*'&&ind2<p.length);
                
                if(ind2!=p.length){
                    //has some char at the end of the string
                    while(s[ind1]==temp&&ind1<s.length-p.length+ind2){
                        ind1++;
                    }
                    
                }
                else
                {
                    
                    do{
                        ind1++;
                    }while(s[ind1]==temp&&ind1<s.length);
                }
                
            }
            else {
                ind1++;
                ind2++;
            }
        }
        else{
            if(p[ind2]=='*') return false;
            else if(p[ind2]=='.'){
                if(ind2+1<p.length&&p[ind2+1]=='*'){
                    do{
                        ind1++;
                        ind2++;
                    }while(p[ind2]=='*'&&ind2<p.length)
                }
                else
                {
                    ind1++;
                    ind2++;
                }
            }
            else{
                if(ind2+1<p.length&&p[ind2+1]=='*'){
                    
                    do{
                        ind2++;
                    }while(p[ind2]=='*'&&ind2<p.length)
                }
                else return false;
                
            }
        }
    }
   if(ind2==p.length&&ind1==s.length) return true;
   else return false;
    
};
```