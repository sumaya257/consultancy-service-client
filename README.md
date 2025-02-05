# <span style="color: #4CAF50;">Guideline Grove</span> <i class="fas fa-leaf"></i>

## 🚀 <span style="color: #2196F3;">Live Site URL</span> <i class="fas fa-link"></i>
🔗 [Visit the Website](https://consultation-service-27d2a.web.app/)

---

## 🔧 <span style="color: #FF5722;">Features of the Website</span> <i class="fas fa-cogs"></i>
- 🖥️ **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop devices.
- 🔐 **User Authentication with JWT**: Secure authentication flow using JSON Web Tokens (JWT) for user login and session management.
- 🍪 **Cookies for Token Storage**: Tokens are securely stored in HTTP-only cookies to protect against attacks.
- 🛣️ **Dynamic Routing**: Utilizes React Router for dynamic paths and private routes accessible only after user authentication.
- 🎨 **Interactive UI Components**: Includes a visually appealing carousel, modals, tabs, and category-based filtering to enhance user engagement.
- ⚡ **Real-Time Updates**: Implements features like cart and wishlist functionality with local storage or server-side integration.

---

## 💻 <span style="color: #009688;">Technologies Used</span> <i class="fas fa-code"></i>

### 🎨 <span style="color: #FF5722;">Frontend</span> <i class="fas fa-laptop-code"></i>
- **React**: For building the user interface with reusable components.
- **Tailwind CSS**: For responsive, utility-first styling.
- **React Router**: For seamless navigation and dynamic routing.
- **Axios**: For handling API requests and managing client-server communication.

### ⚙️ <span style="color: #FF5722;">Backend</span> <i class="fas fa-server"></i>
- **Node.js**: For building the server-side application.
- **Express.js**: For routing and API creation.
- **MongoDB**: For storing and managing application data.
- **JWT (JSON Web Tokens)**: For user authentication and securing API endpoints.
- **Cookies**: Used to store JWT securely and manage user sessions.

---

## 🔒 <span style="color: #3F51B5;">Authentication Flow (JWT with Cookies)</span> <i class="fas fa-lock"></i>
1. **User Login**: Users log in by entering their credentials (email and password).
2. **Accessing Protected Routes**: The cookie containing the JWT is sent with every request to the server.
3. **Logout**: Logging out clears the cookie on the client side, effectively ending the session.
4. **Security Features**: Includes HTTP-only cookies, token expiration, and role-based access.

---

## 📈 <span style="color: #607D8B;">Future Enhancements</span> <i class="fas fa-arrow-up"></i>
- 🎛️ **Advanced Role-Based Access Control (RBAC)**
- 💳 **Payment Gateway Integration**
- 📊 **SEO Optimization**
- 📧 **Email Notifications**
- 🌍 **Multi-language Support**
- 🗓️ **Service Scheduling Integration**
- ♿ **Accessibility Improvements**
- ⚡ **Performance Optimization**

---

## 📦 <span style="color: #4CAF50;">Dependencies</span> <i class="fas fa-box"></i>

### ⚙️ <span style="color: #FF5722;">Client-Side Dependencies:</span> <i class="fas fa-puzzle-piece"></i>
- **React**, **Tailwind CSS**, **React Router**, **Axios**, **FontAwesome**, **Lottie React**

### 🛠️ <span style="color: #FF5722;">Development Dependencies:</span> <i class="fas fa-tools"></i>
- **Vite**, **ESLint**, **DaisyUI**, **PostCSS**, **Prettier**

---

## 🚀 <span style="color: #009688;">How to Run the Project Locally</span> <i class="fas fa-terminal"></i>

## 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/sumaya257/consultancy-service-client.git
cd AdoptNest
2️⃣ Install Dependencies
sh
Copy code
npm install
3️⃣ Configure Environment Variables
Create a .env file in the root directory and add the following:

sh
Copy code
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
4️⃣ Start the Development Server
sh
Copy code
npm run dev
