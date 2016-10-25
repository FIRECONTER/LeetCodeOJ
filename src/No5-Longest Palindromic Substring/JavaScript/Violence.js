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

var s = 'abb';
console.log(longestPalindrome(s));