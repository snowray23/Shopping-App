import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  useEffect(() => {
    const fetchProducts = async () => {
      let response;
      try {
        response = await fetch('https://fakestoreapi.com/products');
      } catch (error) {
        console.error('Failed to fetch products:');
        return;
      }

      if (response.ok) {
        const data = await response.json();
        const productsWithImage = data.map(product => ({
          ...product,
          image: product.image 
        }));
        setProducts(productsWithImage);
      } else {
        console.error('Failed to fetch products!');
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ id: product.id, title: product.title, price: product.price, quantity: 1 }));
    alert('Product Added To Cart');
  };

  return (
    <div>
      <h2>Products List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
              <div>
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCatalog;