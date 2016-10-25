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