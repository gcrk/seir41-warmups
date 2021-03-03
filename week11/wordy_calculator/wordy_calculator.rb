#You should define a Calculator class which uses the constructor function (initialize) to set the question, and an answer method to return the answer.

class Calculator

  def initialize(question)
    @question = question
    # puts "@question = #{@question}"
    matches
  end


  def matches
    @matches = @question.match(/(-?\d+) (plus|minus|divided by|multiplied by) (-?\d+)/)
    puts "#{@matches[1]}, #{@matches[2]}, #{@matches[3]}"
  end

  def operator
    case @matches[2]
    when "plus" then :+
    when "minus" then :-
    when "divided by" then :/
    when "multiplied by" then :*
    end
  end

  def answer
    @answer = eval("#{@matches[1]} #{operator} #{@matches[3]}")
  end
end

query = Calculator.new("What is -6 multiplied by 4?")

puts query.answer
