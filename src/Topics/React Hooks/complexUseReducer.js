import React, { useReducer } from 'react';

const initialState = {
  cart: [],
  total: 0,
  
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const updatedCart = [...state.cart, action.payload];
      const updatedTotal = state.total + action.payload.price;
      return { ...state, cart: updatedCart, total: updatedTotal };

    case 'REMOVE_FROM_CART':
      const filteredCart = state.cart.filter((item) => item.id !== action.payload.id);
      const updatedCartTotal = state.total - action.payload.price;
      return { ...state, cart: filteredCart, total: updatedCartTotal };

    case 'CLEAR_CART':
      return { ...state, cart: [], total: 0 };

    default:
      return state;
  }
};

function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <h2>Cart Total: ${state.total.toFixed(2)}</h2>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
      <ul>
        {state.cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}{' '}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Available Items:</h3>
        <ul>
          <li>
            Item 1 - $10.00{' '}
            <button onClick={() => addToCart({ id: 1, name: 'Item 1', price: 10.00 })}>
              Add to Cart
            </button>
          </li>
          <li>
            Item 2 - $20.00{' '}
            <button onClick={() => addToCart({ id: 2, name: 'Item 2', price: 20.00 })}>
              Add to Cart
            </button>
          </li>
          <li>
            Item 3 - $30.00{' '}
            <button onClick={() => addToCart({ id: 3, name: 'Item 3', price: 30.00 })}>
              Add to Cart
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ShoppingCart;
