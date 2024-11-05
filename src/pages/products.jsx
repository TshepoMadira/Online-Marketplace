import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import { useNavigate } from 'react-router-dom';

const products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddProduct = () => {
    navigate('/add-product');
  };

  return (
    <div className="container">
      <h2>Products</h2>
      <button onClick={handleAddProduct} className="btn btn-success">
        Add Product
      </button>
      <div className="row mt-4">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">${product.price}</p>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger ms-2">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default products;
