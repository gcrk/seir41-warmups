//nested loops
// const findMatch = (array, sum) => {
//
//   for (i = 0; i < array.length; i++){
//     for (j = i + 1; j < array.length; j++){
//
//       if (array[i] + array[j] === sum){
//         console.log(`${array[i]} + ${array[j]} = ${sum}`);
//         return true;
//       }
//     }
//   }
//   return false;
// }
//
// console.log(findMatch([3, 5, 1, 4], 9));

//loop
//variable difference
// method filter

const findMatch2 = (array, sum) => {

  for (i = 0; i < array.length; i++){

    const difference = sum - array[i];

    const resultArray = array.filter(num => num === difference && difference !== array[i])

    if (resultArray.length !== 0){
      console.log(resultArray);
      return true;
    }
  }
  return false;
}

console.log(findMatch2([3, 5, 1, 4], 9));
