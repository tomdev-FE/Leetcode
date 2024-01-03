/**
 * @param {number} n
 * @return {boolean}
 */
function find_square_sum(num){
    let sum = 0;
    while(num>0){
        let digit = num%10;
        sum += digit*digit
        n = Math.floor(num/10)
    }
    return sum;
}
 

  function find_square_sum(num) {
    let sum = 0;
    while ((num > 0)) {
      let digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  }
var isHappy = function(n) {
     let slow = n, fast = n;
    while (true) {
      slow = find_square_sum(slow); // move one step
      fast = find_square_sum(find_square_sum(fast)); // move two steps
      if (slow === fast) { // found the cycle
        break;
      }
    }
    return slow === 1; 
  
};