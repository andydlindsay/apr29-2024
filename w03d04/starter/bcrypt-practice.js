const bcrypt = require('bcryptjs');

// console.log(bcrypt);

// bcrypt.genSalt(10, (err, salt) => {
//   console.log('salt', salt);
// });

// bcrypt.genSalt(10)
//   .then((salt) => {
//     console.log('salt', salt);
//   })

const salt = bcrypt.genSaltSync(10);
// console.log('salt', salt);

const password = '1234';

const hash = bcrypt.hashSync(password, salt);
// console.log('hash', hash);

const hashedPassword = '$2a$10$YavQkulLGaZnua5M8TWuCOYRMIZrwPYnR2LEAYiiiU25aeVyUaLu.';

const result = bcrypt.compareSync('1234', hashedPassword);
console.log('result', result);
