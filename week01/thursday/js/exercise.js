const sergeSays = function(message){
  if (message.endsWith("?")){
    console.log("Sure")
  } else if (message === "") {
    console.log("Fine. Be that way!")
  } else if (message === message.toUpperCase()) {
    console.log("Woah, chill out !")
  } else {
    console.log("Whatever")
  }
}

sergeSays("Are you doing?")
sergeSays("HEY")
sergeSays("")
sergeSays("Hello")
