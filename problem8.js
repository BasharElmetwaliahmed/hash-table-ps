
/* Roman to Integer
 */

/**

 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    hash={
'I':             1,
'V':             5,
'X':             10,
'L':             50,
'C':             100,
'D':             500,
'M':             1000,
}
s=s.split('');
let sum=0;
let except =false;
for(let i=0;i<s.length;i++){
    if(except){
        except=false;
        continue;
    }
    if(hash[s[i]]>=hash[s[i+1]] ||!hash[s[i+1]])
    sum+=hash[s[i]];
    else{
        sum+=hash[s[i+1]]-hash[s[i]];
        except=true
    }
}
return sum;
};
