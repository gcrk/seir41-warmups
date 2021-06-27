// convert decimal into binary
// iterate for each digit
// output
// convert into a decimal

const bitwiseAND = function(n1, n2) {
  bin1 = n1.toString(2).split("").reverse()
  bin2 = n2.toString(2).split("").reverse()

  const output = new Array(bin1.length >= bin2.length ? bin1.length : bin2.length)
  for ( i = 0; i < output.length; i++){
    if (bin1[i] === "1" && bin2[i] === "1"){
      output[i] = "1"
    } else {
      output[i] = "0"
    }
  }
  return parseInt(output.reverse().join(""), 2)
}

console.log("bitwiseAND for 22 and 27", bitwiseAND(22,27))

const bitwiseOR = function(n1,n2){
  bin1 = n1.toString(2).split("").reverse()
  bin2 = n2.toString(2).split("").reverse()

  const output = new Array(bin1.length >= bin2.length ? bin1.length : bin2.length)
  for ( i = 0; i < output.length; i++){
    if (bin1[i] === "1" || bin2[i] === "1"){
      output[i] = "1"
    } else {
      output[i] = "0"
    }
  }
  return parseInt(output.reverse().join(""), 2)
}

console.log("bitwiseOR for 22 and 27", bitwiseOR(22,27))

const bitwiseXOR = function(n1,n2){
  bin1 = n1.toString(2).split("").reverse()
  bin2 = n2.toString(2).split("").reverse()

  const output = new Array(bin1.length >= bin2.length ? bin1.length : bin2.length)
  for ( i = 0; i < output.length; i++){
    if (bin1[i] !== bin2[i] ){
      output[i] = "1"
    } else {
      output[i] = "0"
    }
  }
  return parseInt(output.reverse().join(""), 2)
}

console.log(bitwiseXOR("bitwiseXOR for 22 and 27", 22,27))


// Shorter solutions with built-ins Javascript operators

const shortBitwiseAND = (n1,n2) => n1 & n2
const shortBitwiseOR = (n1,n2) => n1 | n2
const shortBitwiseXOR = (n1,n2) => n1 ^ n2

console.log("shortbitwiseAND for 22 and 27", shortBitwiseAND(22, 27))
console.log("shortbitwiseOR for 22 and 27", shortBitwiseOR(22, 27))
console.log("shortbitwiseXOR for 22 and 27", shortBitwiseXOR(22, 27))
