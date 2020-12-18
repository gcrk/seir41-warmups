// Anagram Detector
//
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word. A word is an anagram if its letters can be rearranged to create a new word.
//
// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".

// create function
// create an array that hold the anagrams
// find anagrams
// sort the word
// loop through the potentialAnagrams and sort
// check if word and potentialAnagrams are similar

const anagram = function (word, potentialAnagrams){
  let matches = [];
  const sortedWord = word.split('').sort().join('').trim();
  console.log(sortedWord)

  for(let i = 0; i < potentialAnagrams.length; i++){
    const sortedAnagrams = potentialAnagrams[i].split('').sort().join('').trim();

    //comparing
    if (sortedAnagrams === sortedWord){
      matches.push(potentialAnagrams[i]);
    }
  }
  return matches;
}

console.log(anagram("listen", ["enlists", "google", "inlets", "banana"]));

console.log(anagram("debit card", ["money", "bad credit", "consumerism"]));

console.log(anagram("define anagram", ["google", "joke", "nerd fame again"]));
