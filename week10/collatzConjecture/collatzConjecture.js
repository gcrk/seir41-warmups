
const collatz = function(num){

  let count = 0;
  let collection = [num];

  for(i = 0; num > 1; i++){

    if(num % 2 === 0){
      num = num / 2;
    } else {
      num = (num * 3) + 1;
    }
    count ++;
    collection.push(num);
  }
  console.log(`The final count is ${count}`);
  console.log(`The process is ${collection}`);
};

console.log(collatz(12));
console.log(collatz(19));

//============RECURSION================

const collatzRec = function(num, count = 0){

  if (num === 1){
    console.log(`The final count is ${count}`);
    return;
  }

  if (num % 2 === 0){
    num = num / 2;
    count ++;
    collatzRec(num, count);
  } else {
    num = (num * 3) + 1;
    count ++;
    collatzRec(num, count);
  }

};

console.log('RECURSION')
console.log('========================');
collatzRecur(12);
console.log('========================');
collatzRecur(19);
console.log('========================');
collatzRecur(27);
