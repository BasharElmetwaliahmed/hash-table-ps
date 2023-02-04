/*Ransom Note*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
let hash1={

}

for(let i=0;i<magazine.length;i++){
    if(hash1[magazine[i]]){
        hash1[magazine[i]]+=1;
    }
    else{
                hash1[magazine[i]]=1;
    }
}
for(let i=0;i<ransomNote.length;i++){
        if(!hash1[ransomNote[i]]){
              return false;
                  }
    else if(hash1[ransomNote[i]]<1){
                return false;
    }
    else{
        hash1[ransomNote[i]]-=1;
    }
}


  return true  
};
