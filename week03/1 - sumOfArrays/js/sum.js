// Sum of arrays
// Write a function that receives two arguments, both of which are Arrays and sums them. These arrays contain only numbers. You don't know their length and they can contain both integers and floating point numbers.

// Example
// [2, 6.4, 3] + [3, 3.6, 2] = 20

const sumArrays = function(array1, array2){
  let sum = 0;

  for(let i = 0; i < array1.length; i++){
    sum += array1[i];
  }
  for(let j = 0; j < array2.length; j++){
    sum += array2[j];
  }
  return sum;
}

console.log(sumArrays([2, 6.4, 3], [3, 3.6, 2]));


const multipleArrays = function(){
  let sum = 0;

  for(let i = 0; i < arguments.length; i++){
    for(let j = 0; j < arguments[i].length; j++){
      sum += arguments[i][j];
    }
  }
  return sum;
}

console.log(multipleArrays([2, 6.4, 3], [3, 3.6, 2], [2, 6.4, 3], [3, 3.6, 2]))
