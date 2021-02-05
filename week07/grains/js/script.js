//get the number of grains at a specific square
const onSquare = function(square){
  return BigInt(2 ** (square - 1))
}
console.log(`there is ${onSquare(8)} grains on square 8` )
console.log(`there is ${onSquare(64)} grains on square 64` )

//get the number of grains for all the squares (in an array)
const allSquares = function (square = 64){
  let arrayAllSquares = []
  for (let i = 1; i <= square; i++){
    arrayAllSquares.push(onSquare(i))
  }
  return arrayAllSquares
}
console.log(allSquares())
//get the sum of grains for all squares
const sumSquares = function (squares = 64){
  let arrayAllSquares = allSquares(squares)
  let sum = arrayAllSquares.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
  })
  return sum
}
console.log(`Total grains on the 64 squares: ${sumSquares()}`)

const binOnSquare = function(square){
  return BigInt("0b1"+("0").repeat(square-1))
}

console.log(binOnSquare(8))
console.log(binOnSquare(64))

const binSumSquare = function(squares = 64){
  return BigInt("0b"+("1").repeat(squares))
}
console.log(binSumSquare())
