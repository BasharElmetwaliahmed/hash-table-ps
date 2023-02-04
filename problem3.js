/*Jewels and Stones*/



/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
     let Jsto = jewels.split("");
  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    if (Jsto.includes(stones[i])) 
      count++;
    }
  

  return count;
    
};
