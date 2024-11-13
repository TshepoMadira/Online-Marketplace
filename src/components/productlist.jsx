import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { Link } from "react-router-dom";
import "./Productlist.css";

const ProductList = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log(`Added product ${product.name} to cart`);
  };

  const handleToggleFavorite = (product) => {
    if (favorites.includes(product.id)) {
      setFavorites(favorites.filter((id) => id !== product.id));
      console.log(`Removed product ${product.name} from favorites`);
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, product.id]);
      console.log(`Added product ${product.name} to favorites`);
    }
  };

  const filteredProducts = products.filter((product) => {
    const query = searchQuery ? searchQuery.toLowerCase() : "";
    return String(product.name || "")
      .toLowerCase()
      .includes(query);
  });

  return (
    <div className="container">
      <h2 className="my-4 text-center">Product List</h2>
      <div className="cart-favorites-info">
      <Link to="/cart" state={{ cart }} className="icon-link">
    <i className="fas fa-shopping-cart"></i>
    {cart.length > 0 && <span className="icon-count">{cart.length}</span>}
  </Link>
  <Link to="/favorites" state={{ favorites, products }} className="icon-link">
    <i className="fas fa-heart"></i>
    {favorites.length > 0 && <span className="icon-count">{favorites.length}</span>}
  </Link>
      </div>
      

      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image || "default-image-url.jpg"}
                alt={product.name}
                className="product-image"
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-muted">${product.price}</p>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <strong>Size:</strong> {product.size}
                </p>
                <p className="card-text">
                  <strong>Color:</strong> {product.color}
                </p>
                <p className="card-text">
                  <strong>Category:</strong> {product.category}
                </p>

                <div className="icons-container">
                  <button
                    className="icon-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    <i className="fas fa-cart-plus"></i>
                  </button>
                  <button
                    className="icon-btn"
                    onClick={() => handleToggleFavorite(product)}
                  >
                    <i
                      className={`fas fa-heart ${
                        favorites.includes(product.id) ? "favorite" : ""
                      }`}
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
