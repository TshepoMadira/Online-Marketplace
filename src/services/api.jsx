import axios from 'axios';


const getAuthToken = () => {
  return localStorage.getItem('authToken');
};


export const registerUser = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:5000/api/products/register', { email, password });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};


export const loginUser = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:5000/api/products/login', { email, password });
    localStorage.setItem('authToken', response.data.token);  
    return response.data;  
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};


export const getProducts = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/products');  
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};


export const addProduct = async (productData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/products/add', productData, {
      headers: { Authorization: `Bearer ${getAuthToken()}` }, 
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};


export const updateProduct = async (id, productData) => {
  try {
    const response = await axios.put(`http://localhost:5000/api/products/update/${id}`, productData, {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};


export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:5000/api/products/delete/${id}`, {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
