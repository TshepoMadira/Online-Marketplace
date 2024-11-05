import React, { useState } from 'react';
import { addProduct, updateProduct } from '../services/api';

const productForm = ({ productId }) => {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: ''
  });

  
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
        await addProduct(productData);  t
      }
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  return (
    <div className="container">
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
        <button type="submit" className="btn btn-primary">
          {productId ? 'Update Product' : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

export default productForm;
