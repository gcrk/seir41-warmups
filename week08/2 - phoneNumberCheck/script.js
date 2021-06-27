const number = {

  deleteNonNumerals: function(number){

    return number.replace(/\D/g, "")
    
  },

  elevenTest: function(number){

    if (number[0] === '1') {
      return number.slice(1)
    } else {
      return false
    }
  },

  formatedNumber: function(number) {

    let output = ''

    output += `(${number.slice(0, 3)}) `
    output += `${number.slice(3, 6)}`
    output += `-${number.slice(6)}`

    return output

  },

  format: function(number){
    //change number into a string and get rid of any non digits
    let numString = this.deleteNonNumerals(number.toString())

    if (numString.length > 11 || numString.length < 10) {
      return '0000000000'
    }
    if (numString.length === 11) {
      const numElevenTest = this.elevenTest(numString)
      if (numElevenTest === false) {
        return '0000000000'
      } else {
        return this.formatedNumber(numElevenTest)
      }
    }
    if (numString.length === 10) {
      return this.formatedNumber(numString)
    }

  }


}
console.log(number.format(1234567890))
console.log(number.format(123456))
console.log(number.format("123r4567t890"))
console.log(number.format(1234567890))
console.log(number.format(12345678901))
