#convert year to roman numerals

#read the keys and values
# loop through the year given

def convert year

    roman = {
          1000 => 'M',
          900 => 'CM',
          500 => 'D',
          400 => 'CD',
          100 => 'C',
          90 => 'XC',
          50 => 'L',
          40 => 'XL',
          10 => 'X',
          9 => 'IX',
          5 => 'V',
          4 => 'IV',
          1 => 'I'
        }

      output = ''

      roman.each do |key, value|

        # puts "Keys: #{key}, Values: #{value}"

        while year >= key
          output += "#{value}"
          year -= key
          # puts "There is a match for #{key}"
          # puts "Current value of year is #{year}"
        end
      end
    output
end

puts convert 1990
puts convert 1950
puts convert 8
puts convert 2008
