// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { getProductById, updateProduct } from "../services/api";  // Correct import

// const EditProduct = () => {
//   const { id } = useParams();  // Get the product id from the URL
//   const navigate = useNavigate();  // Hook for navigation
//   const [product, setProduct] = useState({
//     name: "",
//     price: "",
//     description: "",
//     size: "",
//     color: ""
//   });
//   const [loading, setLoading] = useState(true);  // Loading state
//   const [error, setError] = useState(null);  // Error state for handling fetch issues

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const productData = await getProductById(id);  // Fetch the product by ID
//         setProduct(productData);  // Set the product data into state
//         setLoading(false);
//       } catch (error) {
//         setError("Failed to fetch product details.");
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct((prevProduct) => ({
//       ...prevProduct,
//       [name]: value
//     }));
//   };

//   // Handle form submission (update product)
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await updateProduct(id, product);  // Update the product via API
//       navigate(`/`);  // Navigate back to the product list after successful update
//     } catch (error) {
//       setError("Failed to update product.");
//     }
//   };

//   if (loading) return <div>Loading...</div>;

//   if (error) return <div>{error}</div>;

//   return (
//     <div className="container">
//       <h2>Edit Product</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             name="name"
//             value={product.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="price" className="form-label">Price</label>
//           <input
//             type="number"
//             className="form-control"
//             id="price"
//             name="price"
//             value={product.price}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="description" className="form-label">Description</label>
//           <textarea
//             className="form-control"
//             id="description"
//             name="description"
//             value={product.description}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="size" className="form-label">Size</label>
//           <input
//             type="text"
//             className="form-control"
//             id="size"
//             name="size"
//             value={product.size}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="color" className="form-label">Color</label>
//           <input
//             type="text"
//             className="form-control"
//             id="color"
//             name="color"
//             value={product.color}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Save Changes
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditProduct;
