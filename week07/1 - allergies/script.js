const allergies = function(score){
  // store the data
  const scorecard = {
    cats: 128,
    pollen: 64,
    chocolate: 32,
    tomatoes: 16,
    strawberries: 8,
    shellfish: 4,
    peanuts: 2,
    eggs:1
  }
  //create a list
  let list = []
  //loop
  if (score <= 0){
    return 'Good news you have no allergies'
  } else {
    Object.keys(scorecard).forEach(function(key){
      if (score >= scorecard[key]){
        list.push(key)
        score -= scorecard[key]
      }
    })
    return `Here is your list of allergies: ${list.join(', ')}`
  }
}
console.log(allergies(0))
console.log(allergies(34))
console.log(allergies(255))
