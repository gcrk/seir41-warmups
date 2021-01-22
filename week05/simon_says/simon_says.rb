# random number
# sequence for random number
# guess
# guess = random sequence
#repeat until wrong guess

sequence = []
guess = ''

  until guess != sequence.join('')
    sequence.push(rand(1..4))
    puts "New sequence:"
    puts sequence.join(' ')
    sleep 1
    system "clear"
    puts "Your guess"
    guess = gets.chomp

  end

  if sequence.size > 5
    puts "Legend! You got #{sequence.size}"
  else sequence.size < 5
    puts "Loser! You got #{sequence.size}"
end

# Second solution

#   sequence = []
#   guessed = true
#
#   while guessed
#     puts 'New sequence:'
#       sequence.push rand 1..4
#       puts sequence.join(' ')
#     sleep 1
#     puts `clear`
#
#     puts 'Your guess:'
#       input = gets.chomp().split('')
#
#     #check if numbers are the same
#
#     sequence.each_with_index do |x, index|
#         if x == input[index].to_i
#           puts `clear`
#
#         else
#           guessed = false
#           puts "Wrong"
#     end
#    end
#   end
#
#   if sequence.size > 5
#     puts "Legend! You got #{sequence.size}"
#   else sequence.size < 5
#     puts "Loser! You got #{sequence.size}"
# end
