//create an empty array for the reversed
//loop through array given

// const reverse = function(array){
//
//   let reversedArray = [];
//
//   for (let i = array.length - 1; i >= 0; i--){
//     console.log(array[i]);
//     reversedArray.push(array[i]);
//   }
//   return reversedArray;
// };
//
// console.log(reverse([1,2,3,4]));


//create an empty array for flattened
//loop through and grab the elements
//check if each one is an array

// const flatten = function(array){
//
//   let flattenedArr = []
//
//   array.forEach(function(element){
//     console.log(`Elements: ${element}`);
//
//     if(Array.isArray(element)){
//       flattenedArr = flattenedArr.concat(element);
//       console.log(`flattenedArr: ${flattenedArr}`);
//     } else {
//       flattenedArr.push(element);
//     }
//   });
//
//   return flattenedArr;
// };

// console.log(flatten( ["Hello", ["World", 42] ], "hello1" ));

//create an empty array for flattened
//loop through and grab the elements
//check if each one is an array

const flattenBonus = function(array, flattenedArr = []){
  // let flattenedArr = [];
  console.log(array);
  console.log(flattenedArr);

  array.forEach(function(element){
    // console.log(`element: ${element}`)

    if(Array.isArray(element)){
      flattenedArr = flattenBonus(element, flattenedArr);
    } else {
      flattenedArr.push(element);
    }
  });
  return flattenedArr;
}
console.log(
	flattenBonus([
		'hello',
		[
			[true, false, true],
			'world',
			42,
			[1, 2, ['a', 'b', ['A', [0, 1, 2], 'C']]],
		],
	]),
);
