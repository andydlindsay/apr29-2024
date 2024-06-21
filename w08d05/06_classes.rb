class Car
  def initialize(make, model, year)
    @make = make # instance variable
    @model = model
    @year = year
  end

  # attr_reader(:model) # readable
  # attr_writer(:model) # writable
  attr_accessor(:year, :make, :model) # readable and writable

  # # getter
  # def make
  #   @make
  # end

  # # setter
  # def make= new_make
  #   @make = new_make
  # end
end

car = Car.new('Toyota', 'Tercel', 1986)

p car

puts car.make
car.make = 'Ford'

p car

puts car.model

car.model = 'F150'

p car

puts car.year

car.year = 2011

p car
