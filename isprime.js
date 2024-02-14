function isPrime(n){
    if(n<2){
        return false
    }
    for (let i = 2; i< n ; i++ ) // for(let i = 2; i<= Math.sqrt(n); i++) more optimized ans// Big-O = O(n)
    if(n%i === 0){
        return false
    }
    return true
}
console.log(isPrime(1))
console.log(isPrime(5))
