/**
 * ADR Report Model
 * Stores adverse drug reaction reports submitted by patients and healthcare professionals
 */

const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  // Reference to the user who submitted the report
  reporter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  // Drug Information
  drugName: {
    type: String,
    required: [true, 'Drug name is required'],
    trim: true
  },
  drugDosage: {
    type: String,
    trim: true
  },
  drugManufacturer: {
    type: String,
    trim: true
  },
  batchNumber: {
    type: String,
    trim: true
  },

  // Reaction Details
  symptoms: {
    type: String,
    required: [true, 'Symptoms description is required'],
    trim: true
  },

  // Severity Level
  severity: {
    type: String,
    enum: ['mild', 'moderate', 'severe', 'life-threatening'],
    required: true
  },

  // Detailed Description
  description: {
    type: String,
    required: [true, 'Detailed description is required'],
    trim: true
  },

  // Date of Reaction
  reactionDate: {
    type: Date,
    required: true
  },

  // Date drug was started
  startDate: {
    type: Date
  },

  // Date drug was stopped (if applicable)
  stopDate: {
    type: Date
  },

  // Patient Information (for HCP reports on behalf of patients)
  patientInfo: {
    age: Number,
    gender: {
      type: String,
      enum: ['male', 'female', 'other', 'prefer-not-to-say']
    },
    weight: Number,
    existingConditions: String,
    otherMedications: String
  },

  // Report Status (for admin workflow)
  status: {
    type: String,
    enum: ['submitted', 'under-review', 'verified', 'rejected', 'forwarded'],
    default: 'submitted'
  },

  // Admin notes
  adminNotes: {
    type: String
  },

  // Outcome of the reaction
  outcome: {
    type: String,
    enum: ['recovered', 'recovering', 'not-recovered', 'fatal', 'unknown'],
    default: 'unknown'
  },

  // Reporter type (patient or HCP)
  reporterType: {
    type: String,
    enum: ['patient', 'hcp'],
    required: true
  }
}, {
  timestamps: true // Adds createdAt and updatedAt
});

// Index for faster queries
reportSchema.index({ reporter: 1, status: 1 });
reportSchema.index({ drugName: 1 });
reportSchema.index({ severity: 1 });

module.exports = mongoose.model('Report', reportSchema);
