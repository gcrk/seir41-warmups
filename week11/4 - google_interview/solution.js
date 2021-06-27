const findMatch = (array, sum) => {

  for(i = 0; i < array.length; i++){
    for(j = i + 1; j < array.length; j++){
      if (array[i] + array[j] === sum) {
        console.log(`${array[i]} + ${array[j]} = ${sum}`)
        return true;
      }
    }
  }
  return false;
}

console.log(findMatch([5, 3, 1, 4], 9));

const findMatch2 = (array, sum) => {

  for (let i = 0; i < array.length; i++) {

    const difference = sum - array[i]

    const resultArray = array.filter(num => num === difference && difference !== array[i])

    if (resultArray.length !== 0) {
      return true
    }
  }

  return false
}
}

console.log(findMatch2([5, 3, 1, 4], 9));
