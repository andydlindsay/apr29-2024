interface FaveToy {
  name: string;
  chewiness: number;
}

interface Dog {
  id?: number;
  breed: string;
  age: number;
}

const dog: Dog = {
  // id: 42,
  breed: 'labrador',
  age: 4,
};

const dogs: Dog[] = [];
dogs.push(dog);
// dogs.push('hello');
