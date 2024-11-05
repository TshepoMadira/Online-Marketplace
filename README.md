## E-Commerce Product Management System
This is an E-commerce Product Management system built with React, Redux, and Axios. The application provides the functionality for managing products, adding them to a cart, favoriting them, and proceeding to payment. The backend APIs are built in Express.js, providing the necessary routes for interacting with products, user authentication, and cart management.

### Features
#### Product Management:

- Add, update, and delete products.
- Admin functionality for managing product details (e.g., name, price, description, size, color, category).

U### ser Authentication:

- Register and login functionality for user authentication.
- JWT authentication via Bearer tokens for protected routes.

#### Cart and Favorites:

- Add and remove products to/from the cart.
- Toggle products as favorites.
- View and manage cart and favorite products in dedicated pages.


##### Responsive UI:

- Modern, responsive design for product list, cart, and favorites pages.

### Tech Stack
- Frontend:
- React
- Redux (for state management)
- Axios (for API calls)
- React Router (for routing)


Frontend

#### Authentication:

- POST /api/products/register - Register a new user
- POST /api/products/login - Login with existing credentials

Returns: JWT token for further authentication
Products:
GET /api/products - Fetch all products
POST /api/products/add - Add a new product (Requires JWT token)
PUT /api/products/update/:id - Update an existing product (Requires JWT token)
DELETE /api/products/delete/:id - Delete a product (Requires JWT token)
Cart Management:
POST /api/cart/add - Add product to cart
DELETE /api/cart/remove/:id - Remove product from cart
Favorites Management:
POST /api/favorites/add - Add product to favorites
DELETE /api/favorites/remove/:id - Remove product from favorites
Components
1. ProductForm
Used for adding and updating products.
Contains fields like name, price, description, size, color, and category.
Uses useEffect to pre-populate data when updating an existing product.

2. ProductList
Displays a list of products.
Provides options to add products to the cart or toggle them as favorites.
Supports search functionality to filter products by name.

3. CartPage
Displays products in the cart.
Allows users to remove items or proceed to payment.
Total price of the cart is dynamically updated as items are added/removed.

4. FavoritesPage
Displays a list of favorite products.
Allows users to remove items from their favorites.

5. Cart Slice (Redux)
A Redux slice to manage cart state, including adding and removing items and calculating the total price.
Redux Actions and Reducers
addToCart: Adds a product to the cart.
removeFromCart: Removes a product from the cart.
setCart: Sets the entire cart state.
setTotalPrice: Sets the total price for the cart.
Styling
The project uses CSS to style the various components, with the following main pages:

ProductForm.css: Styles for the form to add/update products.
ProductList.css: Styles for displaying the product list.
CartPage.css: Styles for the cart page.
Favorites.css: Styles for the favorites page.



### Frontend (React) structure:
bash
Copy code
/frontend
  /src
    /components
      ProductForm.js
      ProductList.js
      CartPage.js
      FavoritesPage.js
    /redux
      cartSlice.js
      userSlice.js
    /services
      axios.js
    App.js
    index.js
    /styles
      ProductForm.css
      ProductList.css
      CartPage.css
      FavoritesPage.css

## Installation
- Clone the repository:
git clone   https://github.com/TshepoMadira/online-marketplace.git

- Navigate to the project directory:
cd online-marketplace

- Navigate to this branch git checkout dev

- Install dependencies:

npm install

- To run the project use:
npm start


# Figma link
https://www.figma.com/design/GdY7kioY3P3sdSDNl7HCk3/Untitled?node-id=0-1&node-type=canvas&t=MgUYdHY3tRMk4ZSu-0

# Backend Link
https://online-marketplace2.onrender.com