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

/**test**/
var t = require();
//get the string;

console.log(isMatch(s,p));