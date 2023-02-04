/* happy number */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
let happy=false;
let sum=0;
let myset=new Set();
while(!myset.has(n)){
    sum=0;
        myset.add(n);

        if(n==1){
     happy=true;
     return happy
    }
    while(n!=0){
        sum+=((n%10)**2)
        n=Math.floor(n/10);
    }
    n=sum;

}

    return false
};
