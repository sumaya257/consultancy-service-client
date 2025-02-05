# Guideline Grove

## Live Site URL
[Visit the Website](https://consultation-service-27d2a.web.app/)

## Selected Category: (consultancy)

---

## Features of the Website
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop devices.
- **User Authentication with JWT**: Secure authentication flow using JSON Web Tokens (JWT) for user login and session management.
- **Cookies for Token Storage**: Tokens are securely stored in HTTP-only cookies to protect against attacks.
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
1. **User Login**: Users log in by entering their credentials (email and password).
2. **Accessing Protected Routes**: The cookie containing the JWT is sent with every request to the server.
3. **Logout**: Logging out clears the cookie on the client side, effectively ending the session.
4. **Security Features**: Includes HTTP-only cookies, token expiration, and role-based access.

---

## Future Enhancements
- **Advanced Role-Based Access Control (RBAC)**
- **Refresh Token Implementation**
- **User Profile Management**
- **Search Functionality**
- **Real-time Features with WebSockets**
- **Mobile App Integration**
- **Payment Gateway Integration**
- **Advanced Analytics**
- **Rating and Reviews System**
- **SEO Optimization**
- **Email Notifications**
- **Data Backup and Restore**
- **Multi-language Support**
- **Service Scheduling Integration**
- **Accessibility Improvements**
- **Performance Optimization**
- **Progressive Web App (PWA)**

---

## Dependencies

### Client-Side Dependencies:
- **React**, **Tailwind CSS**, **React Router**, **Axios**, **FontAwesome**, **Lottie React**

### Development Dependencies:
- **Vite**, **ESLint**, **DaisyUI**, **PostCSS**, **Prettier**

---

## How to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone <repo_url>
   cd consultation-service-client
Install the dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
npm run dev
Visit http://localhost:5173 to view the project in your browser.

