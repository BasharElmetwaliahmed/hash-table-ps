/* Valid Anagram*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!=t.length){
        return false;
    }
    let hash1={

}

for(let i=0;i<s.length;i++){
    if(hash1[s[i]]){
        hash1[s[i]]+=1;
    }
    else{
                hash1[s[i]]=1;
    }
}
    let hash2={

}

for(let i=0;i<t.length;i++){
    if(hash2[t[i]]){
        hash2[t[i]]+=1;
    }
    else{
                hash2[t[i]]=1;
    }
}
let keys1=Object.keys(hash1);
for(let i=0;i<keys1.length;i++){
    if(!hash2[keys1[i]]){
        return false;
    }
   if(hash2[keys1[i]]!=hash1[keys1[i]]){
    return false
   }
}
  return true
};
