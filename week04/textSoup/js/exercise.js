$(document).ready( function() {
  const text = $("#story").text().trim().split(/\W+/)

  const randomValue = function(maxValue){
    const random = Math.floor(Math.random() * maxValue)
    return random
  }

  const displayWord = function() {
    
    const randomIndex = randomValue(text.length)

    const randomWord = text[randomIndex]

    const word = $('<p>').text(randomWord)
    $('body').append(word)

    word.css({
      position: "absolute",
      fontSize: (20 + randomValue(30)) + "px",
      top: randomValue(window.innerHeight) + "px",
      left: randomValue(window.innerWidth) + "px"
    })

    word.fadeIn(500).fadeOut(1000, function(){
      $(this).remove()
    })

  }
  setInterval(displayWord, 100)

})
