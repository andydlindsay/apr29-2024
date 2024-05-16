# W03D04 - Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [x] REST
- [x] More HTTP methods

### Security Problems
1. plaintext passwords
2. plaintext cookies
3. plaintext protocol

### Hashing
* one way process
* cannot be undone
* plaintext password => hashing algo => hash 'fashdjkfhasdjhfahsdfhasdfhkdsa'
* salt is added to the password before hashing

'fsdhkfhasd' + password => hashing algo => hash

### Encryption
* two way process

                                    server
client <========== tcp/http ====> middleware <===> middleware <===> route handler
                                                                      request
                                                                      userId: 'abc'
                                  body-parser       cookie-session
                                  req.body
                                  next()

```js
// setting a cookie
res.cookie('cookieName', 'cookie-value');
req.session.cookieName = 'cookie-value';

// reading a cookie
req.cookies.cookieName;
req.session.cookieName;

// clearing a cookie
res.clearCookie('cookieName');
req.session.cookieName = null;
req.session = null;
```

http://localhost:9876/login

Man-in-the-Middle MitM
Monster-in-the-Middle 

HTTPS => HTTP Secure

### Asymetric Encryption
* different key to lock and unlock
* public key => available to anyone
* private key => kept secret

https://www.google.com/


### REST
* naming convention for routes
* RESTful
* resources are plural
* actions are singular

GET /all-the-users
GET /just-one-user-please/:id
POST /create-a-brand-new-user

POST /login
POST /logout

Browse  GET   /pizzas
Read    GET   /pizzas/:id
Edit    POST  /pizzas/:id
Add     POST  /pizzas
Delete  POST  /pizzas/:id/delete

Browse  GET     /pizzas
Read    GET     /pizzas/:id
Edit    PATCH   /pizzas/:id
Add     POST    /pizzas
Delete  DELETE  /pizzas/:id

### More HTTP Verbs
* PUT => replace a resource completely
* PATCH => replace a piece of a resource
* DELETE => deleting a resource

app.patch

let a = 'alice'
let username = 'alice'

* UPDATE











