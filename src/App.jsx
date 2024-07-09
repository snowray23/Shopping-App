import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store';
import CreateUser from './components/CreateUser';
import Login from './components/Login';
import ProductCatalog from './components/ProductCatalog';
import ShoppingCart from './components/ShoppingCart';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
          <h1 style={{ textAlign: 'center', padding: '20px 0', backgroundColor: '#fff' }}>Shopping App</h1>
          <nav style={{ backgroundColor: '#333', color: '#fff', padding: '10px 0' }}>
            <ul style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none' }}>
              <li style={{ margin: '0 10px' }}>
                <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
              </li>
              <li style={{ margin: '0 10px' }}>
                <Link to="/create-user" style={{ color: '#fff', textDecoration: 'none' }}>Create User</Link>
              </li>
              <li style={{ margin: '0 10px' }}>
                <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
              </li>
              <li style={{ margin: '0 10px' }}>
                <Link to="/catalog" style={{ color: '#fff', textDecoration: 'none' }}>Product Catalog</Link>
              </li>
              <li style={{ margin: '0 10px' }}>
                <Link to="/cart" style={{ color: '#fff', textDecoration: 'none' }}>Shopping Cart</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/login" element={<Login />} />
            <Route path="/catalog" element={<ProductCatalog />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};



export default App;