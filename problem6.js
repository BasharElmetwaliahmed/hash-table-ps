/*Keyboard Row*/


/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
let firstRow="qwertyuiop".split('');
let secondRow="asdfghjkl".split('');
let thirdRow="zxcvbnm".split('');
let res=[]
for(let i=0;i<words.length;i++){
    let count1=0,count2=0,count3=0;
    let len=words[i].length
    let word=words[i].toLowerCase()
    for(let j=0;j<word.length;j++){
        if(firstRow.includes(word[j]))
           count1++;
        else if(secondRow.includes(word[j])){
            count2++;
        }
        else{
            count3++;
        }
    }
    if(count1==len || count2==len || count3==len)
        res.push(words[i]);

}
 return res   
};
