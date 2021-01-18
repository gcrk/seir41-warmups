#two strings
#Calculate the difference

#change the strings to arrays
#check if each character is the same at each index

# def point_mutation (string_one, string_two)
#
#   index = 0
#   hamming_distance = 0
#
#   string_one_split = string_one.split("")
#   string_two_split = string_two.split("")
#
#   until index == string_one.size
#     hamming_distance += 1 if string_one_split[index] != string_two_split[index]
#     index += 1
#   end
#
#   puts hamming_distance
#
# end
#
# point_mutation "GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT"

def point_mutation2 (string_one, string_two)

  hamming_distance = 0

  string_one.upcase.chars.each_with_index do |letter, index|

    if string_one[index] != string_two[index]
      hamming_distance +=1
    end
  end

  puts hamming_distance

end

point_mutation2 "GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT"
