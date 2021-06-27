# Warmup - Raindrops
# Write a program using **Ruby** that will take a number (eg 28 or 1755 or 9, etc) and output the following:
#
# - If the number contains 3 as a factor, output 'Pling'.
# - If the number contains 5 as a factor, output 'Plang'.
# - If the number contains 7 as a factor, output 'Plong'.
# - If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
#
# ## Examples
# - 28 has 7 as a factor. In raindrop-speak, this would be a simple "Plong".
# - 1755 has 3 and 5 as factors. In raindrop-speak, this would be a "PlingPlang".
# - 34 has neither 3, 5 nor 7 as a factor. Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".

def raindrops number
  raindrops_str = ""

  # factor of 3
  raindrops_str += "Pling" if number % 3 == 0
  # factor of 5
  raindrops_str += "Plang" if number % 5 == 0
  # factor of 7
  raindrops_str += "Plong" if number % 7 == 0

  # print numbers with no factors
  if raindrops_str.size == 0
    raindrops_str = number.to_s
  end

  raindrops_str
end

puts raindrops 28
puts raindrops 1755
puts raindrops 34
puts raindrops 105
