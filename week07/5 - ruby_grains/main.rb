# This function get the amount of grins on a specific square
def one_square square
  return 2 ** (square-1)
end

puts one_square 8

# This function create an array with the amount of grains on each square (by default 64 squares)
def all_squares squares=64
  array_squares = []
  (1..squares).each do |square|
    array_squares.push(one_square(square))
  end
  return array_squares
end

print all_squares
puts

# This function get the sum of all the grains on each square (by default all 64 squares)
def sum_all_squares squares=64
  array = all_squares(squares)
  return array.sum
end

puts sum_all_squares

# This function do the same as all_squares does but with a recursive approach
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
