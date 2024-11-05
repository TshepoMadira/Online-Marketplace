import React from "react";
import { useLocation } from "react-router-dom";  // For accessing state passed via navigation

const CartPage = () => {
  const location = useLocation();  // Use the hook to get the location state
  const { cart } = location.state || { cart: [] };  // Default to empty array if no state

  const handleRemoveFromCart = (productId) => {
    // Remove from cart functionality here
    console.log(`Remove product with id: ${productId}`);
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
    </div>
  );
};

export default CartPage;
