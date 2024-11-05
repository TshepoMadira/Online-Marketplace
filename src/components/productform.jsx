import React, { useState, useEffect } from 'react';
import { addProduct, updateProduct } from '../services/api';
import './Productform.css'

const ProductForm = ({ productId }) => {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: '',
    size: '',  
    color: '',
    category: '',  
  });

  const categories = [
    'Boys Clothes', 
    'Women Clothes', 
    'Kids Clothes', 
    'Accessories', 
    'Stationeries', 
    'Technology'
  ];

  useEffect(() => {
    if (productId) {
     
    }
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (productId) {
        await updateProduct(productId, productData);  
      } else {
        await addProduct(productData);  
      }
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  return (
    <div className="productform-container">
      <h2>{productId ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit}>
        
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={productData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={productData.price}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <textarea
            className="form-control"
            name="description"
            value={productData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label>Size</label>
          <input
            type="text"
            className="form-control"
            name="size"
            value={productData.size}
            onChange={handleChange}
            placeholder="Enter product size (e.g., S, M, L, XL)"
          />
        </div>

        <div className="mb-3">
          <label>Color</label>
          <select
            className="form-control"
            name="color"
            value={productData.color}
            onChange={handleChange}
          >
            <option value="">Select Color</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Yellow">Yellow</option>
          </select>
        </div>

       
        <div className="mb-3">
          <label>Category</label>
          <select
            className="form-control"
            name="category"
            value={productData.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          {productId ? 'Update Product' : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
