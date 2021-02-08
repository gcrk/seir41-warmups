const pairWise = function ( array, sum ) {

  const indexList = [] //array to store all the indexes where the pair sum is equal to the sum argument

// loop into the array to find pairs that equal to sum
  array.forEach( (element, index ) => {
    const foundIndex = array.indexOf(sum - element) // get the index of coressponding value

    console.log(`element: ${element} at index: ${index}`)

    if (foundIndex >= 0) { //if foundIndex = -1 means there is no corresponding value
      if (!indexList.includes(foundIndex) && !indexList.includes(index)){ // this statement to avoid duplicate indexes
        indexList.push(index, foundIndex)
      }
    }
  })
  console.log(indexList)
  // reduce methods to sum all the values of the array
  return `The result is: ${ indexList.reduce((accumulator, currentValue) => accumulator + currentValue)}`
}
console.log(pairWise([7, 9, 11, 13, 15, 11, 5], 20))



const indexPairWise = function (array, sum) {

  const pairs = [] //declare an empty array to store pairs of indexes where the sum of values equal to sum

  array.forEach((element, index) => { //loop to find elements where the sum is equal to sum
    const valueToFind = sum - element
    const secondArray = array.slice(index+1) // I create a second array with slice to avoid considering previous values
    secondArray.forEach((element2, index2) => {
      if (element2 === valueToFind){
        pairs.push([index, (index2+(index+1))]) // push pairs of indexes
      }
    })
  })
  pairs.forEach((pair) => {
    console.log(`There is a pair at those indexes: ${pair}`)
  })
}
indexPairWise([7, 9, 11, 13, 15, 11, 5], 20)
