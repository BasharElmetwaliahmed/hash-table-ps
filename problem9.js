/*Minimum Index Sum of Two Lists */


/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
 hash1={}
 let commonelements=[];
 let generatedlist=list1.concat(list2);
for(let i=0;i<generatedlist.length;i++){
    if(!hash1[generatedlist[i]]){
       hash1[generatedlist[i]]=1;
    }
 else { hash1[generatedlist[i]]++;
            commonelements.push(generatedlist[i])}
          
        };

let finalarray=[...new Set(commonelements)];
let indexofmin=0;
let min=10000;
let minarray=[];
for(let i=0;i<finalarray.length;i++){
    let sumindex=list1.indexOf(finalarray[i])+list2.indexOf(finalarray[i]);
    if(i==0){
                min=sumindex;
        indexofmin=i;
        minarray.push(i);
    }
    else if (min>sumindex){
        min=sumindex;
        indexofmin=i;
        minarray=[];
    }
    else if(min==sumindex){
        minarray.push(i);
      
    }
}
if(minarray.length==0){
return[finalarray[indexofmin]]}
else{

    for(let i=0;i<minarray.length;i++){
        minarray[i]=finalarray[minarray[i]];
    }
    return minarray;
}
};
