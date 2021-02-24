//create variables for even and odd
//loop through the array and check

const evenOddSums = (array) => {

  let evenSum = 0;
  let oddSum = 0;

  array.forEach(num =>{

    if(num % 2 === 0){
      evenSum += num;
    } else {
      oddSum += num;
    }

  });

  return [evenSum, oddSum];
};

console.log(evenOddSums([50, 60, 60, 45, 71]));

//create an output array
//loop through tables
// create a row for a table
// loop through more tables

const multiTable = () => {

  let output = []

  for (i = 0; i <= 12; i++){
    let row = [];

    for (j = 0; j <= 12; j++){
      let sum = i * j;
      row.push(sum);
    }
    output.push(row);
  }

  return output;
}

// console.log(multiTable());
// console.table(multiTable());

const anotherTable = () => {
  const genNums = () => [...Array(13).keys()];
    return genNums().map((row) => genNums().map((num) => row * num));
};

console.table(anotherTable());
