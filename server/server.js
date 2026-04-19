const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const applicationRoutes = require('./routes/applications');
const authRoutes = require('./routes/auth');
const User = require('./models/User');
const bcrypt = require('bcryptjs');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/applications', applicationRoutes);
app.use('/api/auth', authRoutes);

// Seed Initial Users
const seedUsers = async () => {
  try {
    const userExists = await User.findOne({ email: 'user@gmail.com' });
    if (!userExists) {
      const hashedPassword = await bcrypt.hash('user', 10);
      await User.create({
        name: 'Standard User',
        email: 'user@gmail.com',
        password: hashedPassword,
        role: 'user'
      });
      console.log('Seed: User account created');
    }

    const adminExists = await User.findOne({ email: 'admin@gmail.com' });
    if (!adminExists) {
      const hashedPassword = await bcrypt.hash('admin', 10);
      await User.create({
        name: 'System Admin',
        email: 'admin@gmail.com',
        password: hashedPassword,
        role: 'admin'
      });
      console.log('Seed: Admin account created');
    }
  } catch (err) {
    console.error('Seeding error:', err);
  }
};

// Database connection
const connectDB = async () => {
  try {
    if (process.env.MONGO_URI) {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('MongoDB connected');
      await seedUsers();
    } else {
      console.warn('MONGO_URI is not defined, skipping database connection for now.');
    }
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
