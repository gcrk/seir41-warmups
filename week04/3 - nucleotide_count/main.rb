# # Nucleotide Count
#
# DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.
#
# Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.
#
# Write a program in ruby that will tell you how many times each nucleotide occurs in a string (i.e. how many times 'A', 'C', 'G' and 'T' appear in a given string).
#
# It should also tell you if a character in the string is not a valid nucleotide (i.e. NOT 'A', 'C', 'G', and 'T').
#
# Example:
#
# ```
# count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
# # output:
# A: 20
# C: 12
# G: 17
# T: 21
# ```
def nucleotide_counter string

  counter = {
    "A" => 0,
    "C" => 0,
    "T" => 0,
    "G" => 0,
    "Error" => 0
  }

  string.each_char do |letter|
    if counter.key? letter
      counter[letter] += 1
    else
      counter["Error"] += 1
    end
  end

  counter.each do |key, value|
    puts "#{key}: #{value}"
  end
end

nucleotide_counter "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
