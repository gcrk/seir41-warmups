const primeNumber = {
  primeFactors: function (num){

    let factors = []

    let i = 2
    
    while ( num > 1 ){
      if ( num % i === 0 ){
        factors.push(i)
        num = num / i
      } else {
        i++
      }
    }
    return factors
  },

  isPrime: function(num){
    return this.primeFactors(num).length === 1 ? true : false
  }
}
console.log(primeNumber.isPrime(60))
console.log(primeNumber.isPrime(5))
console.log(primeNumber.primeFactors(60))
console.log(primeNumber.primeFactors(5))
console.log(primeNumber.primeFactors(3464))


const recPrimeFactors = function (num, primeArray = []){
  let i = 2
  while ( i <= num ) {
    if ( num % i === 0 ){
      primeArray.push(i)
      return recPrimeFactors(num/i, primeArray)
    }
    i++
  }
  return primeArray
}

console.log(recPrimeFactors(60))
console.log(recPrimeFactors(3464))
