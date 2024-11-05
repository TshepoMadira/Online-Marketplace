import React from "react";
import { useLocation, useNavigate } from "react-router-dom";  

const CartPage = () => {
  const location = useLocation();  
  const navigate = useNavigate();  
  const { cart } = location.state || { cart: [] }; 

  const handleRemoveFromCart = (productId) => {
   
    console.log(`Remove product with id: ${productId}`);
  };

  const handleProceedToPayment = () => {
   
    navigate("/paypal");
  };

  return (
    <div className="container">
      <h2 className="my-4 text-center">Your Cart</h2>
      <div className="product-grid">
        {cart.length > 0 ? (
          cart.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image || "default-image-url.jpg"}
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
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty!</p>
        )}
      </div>

     
      {cart.length > 0 && (
        <div className="text-center my-4">
          <button
            className="btn btn-primary"
            onClick={handleProceedToPayment}
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
