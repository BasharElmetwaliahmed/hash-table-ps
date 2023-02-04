/* N-Repeated Element in Size 2N Array*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let hashing={

}
n=nums.length/2;
for(let i=0;i<nums.length;i++){
    if(!hashing[nums[i]])
    hashing[nums[i]]=1;
    else{
        hashing[nums[i]]++;
    }
}
let keys1=Object.keys(hashing);
for(let i=0;i<nums.length;i++){
   if(hashing[nums[i]]==n){
    return nums[i];
   }
}
};
