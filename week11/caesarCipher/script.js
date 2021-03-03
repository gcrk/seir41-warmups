const cipher = (string, key) => {
  const charCode = []
  for ( i = 0; i<string.length; i++){
    const index = string.charCodeAt(i)
    if (index >= 65 && index <= 90) {
      charCode[i] = 65 + ((index - 65 + key) % 26 )
    } else if ( index >= 97 && index <= 122 ){
      charCode[i] = 97 + ((index - 97 + key) % 26 )
    } else {
      charCode[i] = index
    }
  }
  return String.fromCharCode(...charCode)
}

console.log(cipher("SEIR41 is great!!", 4))

const quickCipher = (string, key) => {
  return cryptedString = string.replace(/[a-z]/gi, letter => {
    const charCodeStart = letter < "a" ? 65 : 97;
    return String.fromCharCode((letter.charCodeAt() - charCodeStart + key) % 26 + charCodeStart)
  })
}

console.log(quickCipher("SEIR41 is great!!", 4))


const deCipher = (string, key) => {
  return quickCipher(string, (26-key))
}
console.log(deCipher("WIMV41 mw kviex!!", 4))

const bruteDeCipher = (string) => {
  const list = []
  for ( i = 0; i < 26; i++){
    list.push(deCipher(string, i))
  }
  return list
}
console.table(bruteDeCipher("WIMV41 mw kviex!!"))
