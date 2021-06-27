// lowercase the word
// iterate on each letter

// const isogramFinder = function (word){
//   word = word.toLowerCase()
//
//   for ( let i=0; i < word.length; i++){
//     for (let j=i+1; j < word.length; j++){
//       if (word[i] === word[j]){
//         return false
//       }
//     }
//   }
//   return true
// }

const isogramFinder = function (word){
  return new Set(word.toLowerCase()).size === word.length
}


console.log("isogram", isogramFinder("isogram"))
console.log("aba", isogramFinder("aba"))
console.log("isIsogram", isogramFinder("isIsogram"))
console.log("Dermatoglyphics", isogramFinder("Dermatoglyphics"))


const hanoiTower = function(discs) {
  return discs === 0 ? 0 : 2*hanoiTower(discs-1)+1
}

console.log(hanoiTower(0))
console.log(hanoiTower(3))
console.log(hanoiTower(5))
