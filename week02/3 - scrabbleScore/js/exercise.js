const scrabble = function(word, doubleLetter, tripleLetter, doubleWord, tripleWord) {
  const points = {
  	a: 1,
  	e: 1,
  	i: 1,
  	o: 1,
  	u: 1,
  	l: 1,
  	n: 1,
  	r: 1,
  	s: 1,
  	t: 1,
  	d: 2,
  	g: 2,
  	b: 3,
  	c: 3,
  	m: 3,
  	p: 3,
  	f: 4,
  	h: 4,
  	v: 4,
  	w: 4,
  	y: 4,
  	k: 5,
  	j: 8,
  	x: 8,
  	q: 10,
  	z: 10,
  };
  let score = 0;

  points[doubleLetter] *= 2
  points[tripleLetter] *= 3

  for (let i=0; i < word.length; i++ ) {
    score += points[word[i]]
  }

  if(doubleWord){
    score *= 2
  } else if (tripleWord) {
    score *= 3
  }
  console.log(score)

}
scrabble("cabbage", "b", "g", false, true)
scrabble("cabbage", "a", "e", true, false)
scrabble("cabbage", "c", "a", false, true)
