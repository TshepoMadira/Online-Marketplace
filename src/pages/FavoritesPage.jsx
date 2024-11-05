import React from "react";
import { useLocation } from "react-router-dom";  

const FavoritesPage = () => {
  const location = useLocation();  
  const { favorites, products } = location.state || { favorites: [], products: [] };

  const favoriteProducts = products.filter(product => favorites.includes(product.id));

  const handleRemoveFromFavorites = (productId) => {
   
    console.log(`Remove product with id: ${productId}`);
  };

  return (
    <div className="container">
      <h2 className="my-4 text-center">Your Favorites</h2>
      <div className="product-grid">
        {favoriteProducts.length > 0 ? (
          favoriteProducts.map((product) => (
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
                  onClick={() => handleRemoveFromFavorites(product.id)}
                >
                  Remove from Favorites
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No favorite products!</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
