interface PotentialUser {
  username: string;
  password: string;
}

const login = (user: PotentialUser): boolean => {
  return true;
};

const myUser = {
  username: 'jstamos',
  password: '1234',
  faveTvShow: 'full house',
};

login(myUser);
