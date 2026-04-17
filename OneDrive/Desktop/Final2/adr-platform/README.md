# MedWatch India - ADR Reporting Platform

A complete full-stack pharmacovigilance platform for reporting adverse drug reactions (ADRs) in India. Built with React, Node.js, Express, and MongoDB.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
  - [Step 1: Install MongoDB](#step-1-install-mongodb)
  - [Step 2: Setup Backend](#step-2-setup-backend)
  - [Step 3: Setup Frontend](#step-3-setup-frontend)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Creating an Admin User](#creating-an-admin-user)
- [Stripe Payment Setup](#stripe-payment-setup)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [Troubleshooting](#troubleshooting)

## 🎯 Overview

MedWatch India is a pharmacovigilance platform designed to improve adverse drug reaction reporting in India. The platform helps patients and healthcare professionals easily report side effects, learn about drug safety, and increase awareness.

### Key Goals

- Reduce under-reporting of ADRs in India
- Provide an easy-to-use digital platform for reporting
- Enable healthcare professionals to track and manage reports
- Support regulatory compliance with CDSCO

## ✨ Features

### For Patients
- Simple ADR reporting form
- Track report status
- Receive drug safety alerts
- Anonymous reporting option

### For Healthcare Professionals
- Professional dashboard
- Patient report management
- Batch reporting capabilities
- Analytics and insights

### For Admins
- User management
- Report verification workflow
- Analytics dashboard
- System configuration

### General Features
- JWT-based authentication
- Role-based access control
- Stripe payment integration
- Responsive mobile-first design
- Multi-language support (coming soon)

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Axios** - HTTP client
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt.js** - Password hashing
- **Stripe** - Payment processing

## 📁 Project Structure

```
adr-platform/
├── backend/
│   ├── config/         # Configuration files
│   ├── controllers/    # Request handlers
│   ├── middleware/     # Express middleware
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   ├── utils/          # Utility functions
│   ├── .env.example    # Environment variables template
│   ├── package.json
│   └── server.js       # Entry point
│
├── frontend/
│   ├── src/
│   │   ├── components/ # Reusable components
│   │   ├── context/    # React context
│   │   ├── pages/      # Page components
│   │   ├── services/   # API services
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── README.md
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Verify: `node --version`

2. **MongoDB** (v6 or higher)
   - Download from: https://www.mongodb.com/try/download/community
   - Or use MongoDB Atlas (cloud)

3. **npm** (comes with Node.js)
   - Verify: `npm --version`

4. **Git** (optional)
   - Download from: https://git-scm.com/

## 🚀 Installation & Setup

### Step 1: Install MongoDB

#### Option A: Local MongoDB Installation

**Windows:**
1. Download MongoDB Community Server from https://www.mongodb.com/try/download/community
2. Run the installer and follow the setup wizard
3. MongoDB will run as a Windows service
4. Verify by opening Command Prompt and running: `mongod --version`

**macOS:**
```bash
# Using Homebrew
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux (Ubuntu):**
```bash
sudo apt-get install gnupg curl
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

#### Option B: MongoDB Atlas (Cloud - Recommended for Beginners)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a new cluster (free tier available)
4. Click "Connect" → "Drivers" → "Node.js"
5. Copy the connection string
6. Replace `<password>` with your database user password

### Step 2: Setup Backend

1. **Navigate to backend folder:**
```bash
cd adr-platform/backend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Setup environment variables:**
```bash
# Windows
copy .env.example .env

# macOS/Linux
cp .env.example .env
```

4. **Edit the `.env` file with your settings:**
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
MONGODB_URI=mongodb://localhost:27017/adr-platform
JWT_SECRET=your-super-secret-key-change-this-in-production
JWT_EXPIRE=7d
```

**For MongoDB Atlas, use:**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/adr-platform?retryWrites=true&w=majority
```

5. **Start the backend server:**
```bash
# Development mode with auto-restart
npm run dev

# Or production mode
npm start
```

You should see:
```
Server is running on port 5000
API available at http://localhost:5000/api
Connected to MongoDB successfully
```

### Step 3: Setup Frontend

1. **Open a new terminal and navigate to frontend:**
```bash
cd adr-platform/frontend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

You should see:
```
VITE v5.x.x  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

4. **Open your browser and go to:** http://localhost:5173

## 🔐 Environment Variables

### Backend (.env)

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment mode | `development` or `production` |
| `FRONTEND_URL` | Frontend URL for CORS | `http://localhost:5173` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/adr-platform` |
| `JWT_SECRET` | Secret key for JWT | `your-secret-key` |
| `JWT_EXPIRE` | JWT expiration time | `7d` |
| `STRIPE_SECRET_KEY` | Stripe secret key | `sk_test_...` |
| `STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | `pk_test_...` |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook secret | `whsec_...` |

### Frontend Environment Variables

Create a `.env` file in the frontend folder:

```env
VITE_API_URL=http://localhost:5000/api
```

## ▶️ Running the Application

### Development Mode

1. **Start MongoDB** (if using local):
   - Windows: Should start automatically as a service
   - macOS: `brew services start mongodb-community`
   - Linux: `sudo systemctl start mongod`

2. **Start Backend:**
```bash
cd backend
npm run dev
```

3. **Start Frontend** (in a new terminal):
```bash
cd frontend
npm run dev
```

4. **Access the application:**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000/api

### Production Mode

1. **Build the frontend:**
```bash
cd frontend
npm run build
```

2. **Start backend in production:**
```bash
cd backend
NODE_ENV=production npm start
```

## 👤 Creating an Admin User

By default, new users are registered as "patients". To create an admin:

### Method 1: Direct Database Update

1. Register a user through the website
2. Connect to MongoDB:
```bash
mongosh
```

3. Update the user role:
```javascript
use adr-platform
db.users.updateOne(
  { email: "your-email@example.com" },
  { $set: { role: "admin" } }
)
```

### Method 2: API Endpoint (Development Only)

Add this temporary route to `backend/routes/auth.js`:

```javascript
router.post('/make-admin', async (req, res) => {
  const { email } = req.body;
  await User.findOneAndUpdate({ email }, { role: 'admin' });
  res.json({ message: 'User updated to admin' });
});
```

Then POST to `/api/auth/make-admin` with the email.

## 💳 Stripe Payment Setup

### Test Mode (Free)

1. **Create a Stripe account:** https://stripe.com

2. **Get your API keys:**
   - Go to Developers → API Keys
   - Copy "Publishable key" (starts with `pk_test_`)
   - Copy "Secret key" (starts with `sk_test_`)

3. **Add to backend `.env`:**
```env
STRIPE_SECRET_KEY=sk_test_your_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key
```

4. **Create products in Stripe Dashboard:**
   - Go to Products → Add Product
   - Create "Premium Monthly" (₹999/month)
   - Create "Premium Yearly" (₹9990/year)
   - Copy the Price IDs

5. **Update payment routes** with your actual Price IDs

### Test Cards

Use these test card numbers:
- `4242 4242 4242 4242` - Successful payment
- `4000 0000 0000 0002` - Declined payment

Use any future date for expiry and any 3-digit CVC.

## 🚀 Deployment

### Frontend - Vercel

1. **Push code to GitHub**

2. **Go to https://vercel.com**
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Select the `frontend` folder as root directory
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

3. **Add environment variables:**
   - `VITE_API_URL` = your backend URL

4. **Deploy!**

### Backend - Render

1. **Go to https://render.com**
   - Sign up/login
   - Click "New Web Service"
   - Connect your GitHub repo

2. **Configure:**
   - Name: `adr-platform-api`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Root Directory: `backend`

3. **Add environment variables:**
   - All variables from your `.env` file
   - Update `FRONTEND_URL` to your Vercel URL

4. **Deploy!**

### Backend - Railway

1. **Go to https://railway.app**
   - Sign up/login
   - Click "New Project"
   - Deploy from GitHub repo

2. **Add MongoDB:**
   - Click "New" → Database → Add MongoDB

3. **Configure environment variables**

4. **Deploy!**

## 📚 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user |
| PUT | `/api/auth/update-profile` | Update profile |

### Report Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/reports` | Get all reports |
| POST | `/api/reports` | Create new report |
| GET | `/api/reports/:id` | Get single report |
| PUT | `/api/reports/:id` | Update report |
| PUT | `/api/reports/:id/status` | Update status (Admin) |

### Payment Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/payments/config` | Get Stripe config |
| POST | `/api/payments/create-checkout-session` | Create checkout |
| POST | `/api/payments/verify-session` | Verify payment |

## 🐛 Troubleshooting

### MongoDB Connection Issues

**Problem:** `MongoDB connection error`

**Solutions:**
1. Check if MongoDB is running:
   - Windows: Check Services app
   - macOS: `brew services list`
   - Linux: `sudo systemctl status mongod`

2. Verify connection string in `.env`

3. Check firewall settings

### CORS Errors

**Problem:** `Access-Control-Allow-Origin` error

**Solution:**
- Ensure `FRONTEND_URL` in backend `.env` matches your frontend URL
- For production, update to your deployed frontend URL

### JWT Secret Issues

**Problem:** Token validation fails

**Solution:**
- Generate a strong JWT secret:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```
- Update `JWT_SECRET` in `.env`
- Restart the server

### Port Already in Use

**Problem:** `Port 5000 is already in use`

**Solution:**
```bash
# Find and kill the process
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -ti:5000 | xargs kill -9
```

### Module Not Found Errors

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email support@medwatchindia.com or open an issue on GitHub.

## 🙏 Acknowledgments

- Thanks to CDSCO for pharmacovigilance guidelines
- Healthcare professionals who provided feedback
- Open source community for the amazing tools

---

**Built with ❤️ for safer medications in India** 🇮🇳
