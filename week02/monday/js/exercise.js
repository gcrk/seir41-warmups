//
// # Filter
//
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
//
// ## Example:
//
// Input:
//
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
//
// Output:
//
// 'alpha beta gamma delta'
//
// # Bonus question
//
// Create a function that returns a string 'banana'. The catch is you can only use letters 'a' and 'b'.
// Super extra bonus points for proving "how well engineered Javascript really is".
const string = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

const wordFilter = function(words) {
  const splitWords = words.split(' ');
  const filteredWords = [];
  for ( let i = 0; i < splitWords.length; i++ ){
    if ( filteredWords.includes(splitWords[i]) === false) {
      filteredWords.push(splitWords[i])
    }
  }
  return filteredWords.join(' ')
}
console.log(wordFilter(string))


const bonus = function() {
  const result = 'b' + 'a' + + 'b' + 'a';
  return result;
}
console.log(bonus())
