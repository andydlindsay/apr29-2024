import './App.css';

import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Product from './components/Product';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="App">
      <h2>React Router Demo</h2>

      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="*" element={<h2>Four oh Four!</h2>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin" element={<h2>Custom Admin Page</h2>} />
          <Route path="/products/:productId" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
