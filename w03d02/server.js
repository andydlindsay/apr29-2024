const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8080;

const products = {
  abc: {
    id: 'abc',
    name: 'guitar',
    price: 199.99,
    description: 'some of the strings are broken'
  },
  def: {
    id: 'def',
    name: 'drum kit',
    price: 99.99,
    description: 'nice for annoying the neighbours'
  }
};

// configuration
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); // creates and populates req.body

// routes

// GET /products
app.get('/products', (req, res) => {
  const templateVars = {
    products: products,
  };

  res.render('products', templateVars);
});

// GET /products/new
app.get('/products/new', (req, res) => {
  res.render('new-product');
});

// POST /products
app.post('/products', (req, res) => {
  // grab the info from the body
  const name = req.body.name;
  const description = req.body.description;
  const price = Number(req.body.price);

  const id = Math.random().toString(36).slice(2, 5); // random 3 character string

  const newProduct = {
    id,
    name,
    description,
    price,
  };

  products[id] = newProduct;
  // console.log(products);

  // redirect the user somewhere
  res.redirect('/products');
});

// POST /products/:id/delete
app.post('/products/:id/delete', (req, res) => {
  const productId = req.params.id; // 'abc'

  delete products[productId];

  res.redirect('/products');
});

// GET /products/:id/edit
app.get('/products/:id/edit', (req, res) => {
  const productId = req.params.id;

  const templateVars = {
    product: products[productId]
  };
  // console.log('templateVars:', templateVars);

  res.render('product-edit', templateVars);
});

// POST /products/:id/edit
app.post('/products/:id/edit', (req, res) => {
  const productId = req.params.id;

  const name = req.body.name;
  const description = req.body.description;
  const price = Number(req.body.price);  

  // products[productId].name = name;

  const edittedProduct = {
    id: productId,
    name,
    description,
    price,
  };

  products[productId] = edittedProduct;
  // console.log(products);

  res.redirect('/products');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
