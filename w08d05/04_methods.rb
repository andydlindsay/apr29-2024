# functions in Ruby are NOT first-class

def say_hello name, age
  puts "hello there #{name}"
end

say_hello 'alice', 42
say_hello 'bob', 50

# return_val = say_hello('carol', 42)

# puts return_val
