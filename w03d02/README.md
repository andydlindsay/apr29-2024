# W03D02 - CRUD with Express

### To Do
- [x] Implement CRUD over HTTP with Express
- [x] Render data for the user using EJS templates
- [x] Use forms to submit HTTP requests
- [x] Explore the Post-Redirect-Get pattern
- [x] Using Chrome DevTools to see requests and responses
- [x] Practice debugging Express

### CRUD
* Create
* Read
* Update
* Delete
* resource => noun, users, products, maps, blogposts

```js
{
  id: 'abc',
  name: 'guitar',
  price: 199.99,
  description: 'some of the strings are broken'
}
```

### Routes
* combination of a verb and a path/url

Create
GET /products/new
POST /products

Read
GET /products

Update
GET /products/:id/edit
POST /products/:id/edit

Delete
POST /products/:id/delete

url encoding

name=harmonica&description=still+works&price=2.45

{
  name: 'harmonica',
  description: 'still works',
  price: '2.45'
}

body-parser middleware



















