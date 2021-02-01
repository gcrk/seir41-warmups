def allergies score
  score_card = ["eggs", "peanuts", "shellfish", "strawberries", "tomatoes", "chocolate", "pollen", "cats"]
  list = []
  if score == 0
    puts "Good news you have no allergy"
  else
    bin_score = score.digits(2) # convert the decimal number into a binary and each digit into an array(reversed)
    bin_score.each_index do |i|
      list.push(score_card[i]) if bin_score[i] == 1
    end
    puts "Here is your list of allergies: #{list.join(', ')}"
  end
end

allergies 0
allergies 34
allergies 255
