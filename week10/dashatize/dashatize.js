//make sure only positives
//check if a number
//change numbers to array
// variable for dashed string
//check ends with and starts with

const dashatize = (input) => {

  number = Math.abs(input);

  if (isNaN(number)){
    return number;
  }

  let numArray = number.toString().split("");
  let dashedStr = "";

  for (i = 0; i < numArray.length; i++){
    if (Number(numArray[i]) % 2 !== 0){
      dashedStr += "-" + numArray[i] + "-"
    } else {
      dashedStr += numArray[i];
    }
  }

  dashedStr = dashedStr.replace(/--/g, '-');

  if(dashedStr.startsWith('-')){
    dashedStr = dashedStr.substr(1);
  }

  if(dashedStr.endsWith('-')){
    dashedStr = dashedStr.substr(0, dashedStr.length -1);
  }

  return dashedStr;
}

console.log(dashatize(274));
console.log(dashatize(5311));
console.log(dashatize(86320));
console.log(dashatize(974302));
console.log(dashatize(NaN));
console.log(dashatize(0));
console.log(dashatize(-1));
console.log(dashatize(-28369));
console.log(dashatize('pony'));
