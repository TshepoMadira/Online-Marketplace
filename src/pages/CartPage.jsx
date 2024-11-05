import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCart, removeFromCart } from '../redux/cartSlice';
import './CartPage.css';

const CartPage = () => {
  const location = useLocation();  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, totalPrice } = useSelector(state => state.cart);  

  useEffect(() => {
    if (location.state && location.state.cart) {
      const { cart: cartData, totalPrice } = location.state;
      dispatch(setCart({ cart: cartData, totalPrice }));
    }
  }, [dispatch, location.state]);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));  
  };

  const handleProceedToPayment = (product) => {
    console.log("Proceeding to payment for product:", product);
    navigate('/paypal', { state: { totalPrice: product.price } }); 
  };

  return (
    <div className="cart-container">
      <h2 className="my-4 text-center">Your Cart</h2>
      <div className="product-grid">
        {cart.length > 0 ? (
          cart.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image || 'default-image-url.jpg'}
                alt={product.name}
                className="product-image"
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-muted">${product.price}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveFromCart(product.id)}
                >
                  Remove from Cart
                </button>
                <button
                  className="proceed-to-payment"
                  onClick={() => handleProceedToPayment(product)}
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty!</p>
        )}
      </div>

   
    </div>
  );
};

export default CartPage;