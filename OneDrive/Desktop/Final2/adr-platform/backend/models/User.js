/**
 * User Model
 * Defines the structure of user data in MongoDB
 * Supports three roles: patient, hcp (healthcare professional), and admin
 */

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  // Basic Information
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters'],
    select: false // Don't return password in queries by default
  },

  // User Role: patient, hcp (healthcare professional), or admin
  role: {
    type: String,
    enum: ['patient', 'hcp', 'admin'],
    default: 'patient'
  },

  // Phone number (optional)
  phone: {
    type: String,
    trim: true
  },

  // Professional Information (for HCPs)
  professionalInfo: {
    registrationNumber: String,
    hospital: String,
    specialization: String
  },

  // Profile Status
  isVerified: {
    type: Boolean,
    default: false
  },

  // Subscription status (for premium features)
  subscription: {
    status: {
      type: String,
      enum: ['free', 'premium', 'enterprise'],
      default: 'free'
    },
    stripeCustomerId: String,
    stripeSubscriptionId: String,
    currentPeriodEnd: Date
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  // Only hash if password is modified
  if (!this.isModified('password')) return next();

  try {
    // Generate salt and hash password
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Method to return user data without sensitive info
userSchema.methods.toJSON = function() {
  const user = this.toObject();
  delete user.password;
  delete user.__v;
  return user;
};

module.exports = mongoose.model('User', userSchema);
