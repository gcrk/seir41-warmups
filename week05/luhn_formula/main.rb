def luhn num
  
  array_num = num.digits

  result = 0

  array_num.map.with_index do |item, index|
    item *=2 if index.odd?
    item -=9 if item > 9
    result += item
  end

  puts "The result for number #{num} is #{result % 10 == 0}"

end
luhn 3554
luhn 8763
