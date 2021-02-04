//get the number of grains at a specific square
const onSquare = function(square){
  return 2 ** (square - 1)
}
//get the number of grains for all the squares (in an array)
const allSquares = function (square = 64){
  let arrayAllSquares = []
  for (let i = 1; i <= square; i++){
    arrayAllSquares.push(onSquare(i))
  }
  return arrayAllSquares
}
//get the sum of grains for all squares
const sumSquares = function (squares = 64){
  let arrayAllSquares = allSquares(squares)
  let sum = arrayAllSquares.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
  })
  return sum
}
console.log(sumSquares())
