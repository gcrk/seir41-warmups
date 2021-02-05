def one_square square
  return 2 ** (square-1)
end

puts one_square 8

def all_squares squares=64
  array_squares = []
  (1..squares).each do |square|
    array_squares.push(one_square(square))
  end
  return array_squares
end

print all_squares
puts

def sum_all_squares squares=64
  array = all_squares(squares)
  return array.sum
end

puts sum_all_squares

def all_sq_rec square, current_square = 1, array = []
  if current_square == square
    array.push(one_square(current_square))
    return array
  else
    array.push(one_square(current_square))
    all_sq_rec(square, current_square+1, array)
  end
end

print all_sq_rec(64)
