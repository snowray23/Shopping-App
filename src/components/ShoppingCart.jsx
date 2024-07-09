import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCartItem, removeCartItem, clearCart } from '../features/cartSlice';

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateCartItem({ id, quantity }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeCartItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    dispatch(clearCart()); 
    alert('You have checked out, thank you!');
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>
              Quantity:
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(event) => handleQuantityChange(item.id, parseInt(event.target.value))}
              />
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </p>
          </li>
        ))}
      </ul>
      <button onClick={handleClearCart}>Clear Cart</button>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default ShoppingCart;