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