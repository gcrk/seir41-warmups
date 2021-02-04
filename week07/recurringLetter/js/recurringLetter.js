// split the string
// create a object variable that hold my letters and counts
// Loop through to add object values and keys

//create maxScore
//create maxLetter
//Loop through object to check maxScore/maxLetter

const capLetter = function(string, letter){

  const lettersArray = string.split('');
  console.log(lettersArray);

  _.each(lettersArray, function(char, index){
      if (char === letter){
        lettersArray[index] = char.toUpperCase();
      }
  });

  return lettersArray.join('')
}


const recurringLetter = function(string){

  const lettersArray = string.split(' ').join('').toLowerCase().split('');
  // console.log(lettersArray);

  let lettersScores = {};
  let maxScore = 0;
  let maxLetter = '';

  lettersArray.forEach(function(char){
    if (lettersScores[char] >= 1){
      lettersScores[char]++;
      // console.log(lettersScores);
    } else {
      lettersScores[char] = 1;
    }
  });

  _.each(lettersScores, function(value, key){
     let score = value;
     if (score > maxScore){
       maxScore = score;
       maxLetter = key;
     }
  })

  console.log(`The recurring letter of '${string}' is ${maxLetter}`);


  console.log(`Sentence with caps: ${capLetter(string, maxLetter)}`);

};

recurringLetter('just a simple sentence chilling');
