import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; 


const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

export const registerUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/customers/register`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/customers/login`, { email, password });
    localStorage.setItem('authToken', response.data.token);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/customers/products`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const addProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_URL}/customers/products`, productData, {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const response = await axios.put(`${API_URL}/customers/products/${id}`, productData, {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/customers/products/${id}`, {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
