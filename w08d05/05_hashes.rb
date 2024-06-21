# hash == collection of key/value pairs, object, dictionaries, associative arrays

user = {
  "username" => "jstamos",
  "password" => "1234"
}

# puts user
# puts user["username"]

# symbols are lightweight strings (as close to primitives as OOP can get)
# 'username'
# :username

user = {
  :username => "jstamos",
  :password => "1234"
}

# puts user
# puts user[:password]

user = {
  username: "jstamos",
  password: "1234"
}

puts user
puts user[:password]
