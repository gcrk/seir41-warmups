require 'pry'
class Robot

  attr_reader :counter # this line is here to let access to the @counter variable

  def initialize
    @name = generate_name
    @counter = 0
    @created_at = Time.now.to_i
    @reset_at = Time.now.to_i
  end

  def generate_name
    letters = ("AA".."ZZ").to_a.sample
    digits = ("000".."999").to_a.sample
    name = letters.concat(digits)
  end

  def get_name
    @counter += 1
    puts "My name is: #{@name}"
  end

  def reset
    @counter += 1
    @reset_at = Time.now.to_i
    @name = generate_name
  end

  def timers
    puts "#{Time.now.to_i - @reset_at} seconds since last reset, and #{Time.now.to_i - @created_at} seconds since creation"
  end

end

binding.pry
