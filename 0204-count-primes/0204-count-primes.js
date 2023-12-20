/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n <= 2) {
        return 0;
    }

    // Create an array to mark whether numbers are prime or not
    const isPrime = new Array(n).fill(true);
    
    // 0 and 1 are not prime
    isPrime[0] = isPrime[1] = false;

    // Use the Sieve of Eratosthenes to mark multiples as non-prime
    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // Count the number of primes
    return isPrime.filter(val => val).length;
};
   
