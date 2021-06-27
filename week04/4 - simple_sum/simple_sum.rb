# # Simple Sums - Ruby
# Write a program that can calculate the sum of the first n elements of the following sequences:
#
# s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc
# s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc
#
# ## For example:
#
# s1(4) = 0
#
# s2(4) = 10
#
# Can you guess what the sum would be if n is infinity?

require 'pry'

def s1 num

  result = num % 2
  puts result

end

def s2 num
  (1..num).sum
end


binding.pry

s1(4)
s1(10)
s1(1)
s1(3)
