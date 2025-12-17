const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);
const userRoutes = require('./routes/userRoutes'); // <--- Add this
app.use('/api/users', userRoutes);                 // <--- Add this
const orderRoutes = require('./routes/orderRoutes'); // <--- Import
app.use('/api/orders', orderRoutes);                 // <--- Use

// Database Connection
mongoose.connect('mongodb://127.0.0.1:27017/college-ecommerce')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ Connection Error:', err));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));