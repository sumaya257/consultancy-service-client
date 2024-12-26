# Guideline Grove

## Live Site URL
[Visit the Website](https://consultation-service-27d2a.web.app/)

## Selected Category: Category 2 (consultancy)

---

## Features of the Website
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop devices.
- **User Authentication with JWT**: Secure authentication flow using JSON Web Tokens (JWT) for user login and session management.
- **Cookies for Token Storage**: Tokens are securely stored in HTTP-only cookies to protect against  attacks .
- **Dynamic Routing**: Utilizes React Router for dynamic paths and private routes accessible only after user authentication.
- **Interactive UI Components**: Includes a visually appealing carousel, modals, tabs, and category-based filtering to enhance user engagement.
- **Category-Specific Features**: Provides customized experiences and content for the selected category (Category 2).
- **Real-Time Updates**: Implements features like cart and wishlist functionality with local storage or server-side integration.

---

## Technologies Used

### Frontend
- **React**: For building the user interface with reusable components.
- **Tailwind CSS**: For responsive, utility-first styling.
- **React Router**: For seamless navigation and dynamic routing.
- **Axios**: For handling API requests and managing client-server communication.

### Backend
- **Node.js**: For building the server-side application.
- **Express.js**: For routing and API creation.
- **MongoDB**: For storing and managing application data.
- **JWT (JSON Web Tokens)**: For user authentication and securing API endpoints.
- **Cookies**: Used to store JWT securely and manage user sessions.

---

## Authentication Flow (JWT with Cookies)
1. **User Login**:
   - Users log in by entering their credentials (email and password).
   - The backend validates the credentials and generates a signed JWT token.
   - The token is sent back to the frontend and stored in an HTTP-only cookie.

2. **Accessing Protected Routes**:
   - The cookie containing the JWT is sent with every request to the server.
   - The backend verifies the token and grants access to protected resources or pages.

3. **Logout**:
   - Logging out clears the cookie on the client side, effectively ending the session.

4. **Security Features**:
   - **HTTP-Only Cookies**: Ensures tokens cannot be accessed via JavaScript, reducing XSS risks.
   - **Token Expiration**: JWT tokens are configured with an expiration time to prevent indefinite sessions.
   - **Role-Based Access**: Certain routes or features are restricted based on user roles (if implemented).

---

## Technologies for JWT and Cookies
- **jsonwebtoken**: To sign and verify JWT tokens.
- **cookie-parser**: For parsing cookies on the server side.
- **dotenv**: To manage environment variables securely (e.g., secret keys for signing tokens).

---

## API Highlights
- **Authentication Endpoints**:
  - `POST /login`: Authenticates the user and generates a JWT stored in cookies.
  - `GET /protected`: Example of a route accessible only with a valid token.
- **Category-Specific Content**:
  - `GET /categories/:id`: Returns data for a specific category.

---

## Additional Information
- **Future Enhancements**:
  - Integration of advanced role-based authorization (e.g., admin vs. regular users).
  - Adding refresh token functionality for prolonged user sessions.
- **Contact Information**:
  - Email: `your-email@example.com`
  - GitHub: [Your GitHub Profile](https://github.com/your-username)

---

Thank you! 😊
