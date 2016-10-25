[toc]
# Problem Description
```description
Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each operand may be an integer or another expression.
```
Examples:
```
["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
  ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
```
# Analyse
计算逆波兰表达式求值，堆栈实现 javascript里面是push and pop操作。有一个坑就是异号除法的取整问题。如果是负数那么应该向上取整用ceil如果是正数应该向下取整。floor这一点要加个判断
## Method one: stack push and pop $O(n)$
JavaScript代码如下:
```JavaScript
var evalRPN = function(tokens) {
    var arr = new Array(tokens.length);
    if(tokens.length == 1) return parseInt(tokens[0]);
    var len = tokens.length;
    for(var i=0;i<len;i++){
        var m = tokens.shift();
        if(isNum(m)){
            arr.push(parseInt(m));
        }else{
            var b = arr.pop();
            var a = arr.pop();
            if(m == '*'){
                arr.push(a*b);
            }
            if(m == '+') arr.push(a+b);
            if(m == '-') arr.push(a-b);
            if(m == '/') {
                if(a/b>0) 
                arr.push(Math.floor(a/b));
                else arr.push(Math.ceil(a/b));
                
            }
            
        }
    }
    return arr.pop();
};
function isNum(str){
    if(str=='+'||str =='-'|| str =='*'||str =='/') return false;
    else return true;
}
};
```
