import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { reportService } from '../services/api';
import {
  AlertTriangle,
  CheckCircle,
  Pill,
  Calendar,
  FileText,
  Activity,
  ChevronRight,
  ChevronLeft,
  Send,
  Info,
} from 'lucide-react';

const ReportADR = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reportId, setReportId] = useState(null);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    // Step 1: Drug Information
    drugName: '',
    drugDosage: '',
    drugManufacturer: '',
    batchNumber: '',
    startDate: '',
    stopDate: '',

    // Step 2: Reaction Details
    symptoms: '',
    severity: '',
    description: '',
    reactionDate: '',
    outcome: 'unknown',

    // Step 3: Patient Information (optional for HCPs)
    patientInfo: {
      age: '',
      gender: '',
      weight: '',
      existingConditions: '',
      otherMedications: '',
    },
  });

  const severityOptions = [
    { value: 'mild', label: 'Mild', description: 'Slight discomfort, no intervention needed' },
    { value: 'moderate', label: 'Moderate', description: 'Noticeable symptoms, minimal intervention' },
    { value: 'severe', label: 'Severe', description: 'Significant symptoms, requires treatment' },
    { value: 'life-threatening', label: 'Life-threatening', description: 'Urgent, immediate medical attention required' },
  ];

  const outcomeOptions = [
    { value: 'recovered', label: 'Fully Recovered' },
    { value: 'recovering', label: 'Still Recovering' },
    { value: 'not-recovered', label: 'Not Recovered' },
    { value: 'fatal', label: 'Fatal' },
    { value: 'unknown', label: 'Unknown' },
  ];

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.drugName.trim()) newErrors.drugName = 'Drug name is required';
      if (!formData.reactionDate) newErrors.reactionDate = 'Reaction date is required';
    }

    if (step === 2) {
      if (!formData.symptoms.trim()) newErrors.symptoms = 'Symptoms description is required';
      if (!formData.severity) newErrors.severity = 'Please select severity level';
      if (!formData.description.trim()) newErrors.description = 'Detailed description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('patientInfo.')) {
      const field = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        patientInfo: { ...prev.patientInfo, [field]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);

    try {
      const response = await reportService.create({
        drugName: formData.drugName,
        drugDosage: formData.drugDosage,
        drugManufacturer: formData.drugManufacturer,
        batchNumber: formData.batchNumber,
        symptoms: formData.symptoms,
        severity: formData.severity,
        description: formData.description,
        reactionDate: new Date(formData.reactionDate).toISOString(),
        startDate: formData.startDate ? new Date(formData.startDate).toISOString() : null,
        stopDate: formData.stopDate ? new Date(formData.stopDate).toISOString() : null,
        patientInfo: formData.patientInfo,
        outcome: formData.outcome,
      });

      setReportId(response.data.report._id);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting report:', error);
      setErrors({ submit: 'Failed to submit report. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">Report Submitted Successfully!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for your submission. Your report has been received and is being reviewed by our team.
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-500">Report ID</p>
              <p className="font-mono font-semibold text-gray-900">{reportId}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/dashboard')}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700"
              >
                Go to Dashboard
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200"
              >
                Submit Another Report
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Report Adverse Drug Reaction</h1>
          <p className="mt-2 text-gray-600">
            Help make medications safer by reporting side effects you've experienced or observed.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    currentStep >= step
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-24 sm:w-32 h-1 mx-2 ${
                      currentStep > step ? 'bg-primary-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-sm text-gray-600">Drug Info</span>
            <span className="text-sm text-gray-600">Reaction Details</span>
            <span className="text-sm text-gray-600">Patient Info</span>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          {errors.submit && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <p className="text-sm text-red-700">{errors.submit}</p>
            </div>
          )}

          {/* Step 1: Drug Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Pill className="w-5 h-5 text-primary-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Drug Information</h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Drug Name *
                </label>
                <input
                  type="text"
                  name="drugName"
                  value={formData.drugName}
                  onChange={handleChange}
                  placeholder="e.g., Paracetamol, Amoxicillin"
                  className={`w-full px-4 py-3 border ${
                    errors.drugName ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                />
                {errors.drugName && (
                  <p className="mt-1 text-sm text-red-600">{errors.drugName}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dosage</label>
                  <input
                    type="text"
                    name="drugDosage"
                    value={formData.drugDosage}
                    onChange={handleChange}
                    placeholder="e.g., 500mg, 10ml"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Batch Number</label>
                  <input
                    type="text"
                    name="batchNumber"
                    value={formData.batchNumber}
                    onChange={handleChange}
                    placeholder="If available"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Manufacturer</label>
                <input
                  type="text"
                  name="drugManufacturer"
                  value={formData.drugManufacturer}
                  onChange={handleChange}
                  placeholder="e.g., Cipla, Sun Pharma"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date Reaction Occurred *
                  </label>
                  <input
                    type="date"
                    name="reactionDate"
                    value={formData.reactionDate}
                    onChange={handleChange}
                    max={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 border ${
                      errors.reactionDate ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                  />
                  {errors.reactionDate && (
                    <p className="mt-1 text-sm text-red-600">{errors.reactionDate}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date Started Taking Drug</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    max={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Reaction Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-secondary-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Reaction Details</h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Symptoms/Adverse Effects *
                </label>
                <textarea
                  name="symptoms"
                  value={formData.symptoms}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Describe the symptoms you experienced (e.g., rash, nausea, headache, dizziness)"
                  className={`w-full px-4 py-3 border ${
                    errors.symptoms ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none`}
                />
                {errors.symptoms && (
                  <p className="mt-1 text-sm text-red-600">{errors.symptoms}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Severity Level *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {severityOptions.map((option) => (
                    <label
                      key={option.value}
                      className={`relative flex flex-col p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                        formData.severity === option.value
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="severity"
                        value={option.value}
                        checked={formData.severity === option.value}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span className="font-semibold text-gray-900">{option.label}</span>
                      <span className="text-sm text-gray-500 mt-1">{option.description}</span>
                      {formData.severity === option.value && (
                        <div className="absolute top-2 right-2">
                          <div className="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </label>
                  ))}
                </div>
                {errors.severity && (
                  <p className="mt-2 text-sm text-red-600">{errors.severity}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Detailed Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Provide a detailed description of what happened, when it started, how long it lasted, and any actions taken..."
                  className={`w-full px-4 py-3 border ${
                    errors.description ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none`}
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Outcome</label>
                <select
                  name="outcome"
                  value={formData.outcome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {outcomeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Step 3: Patient Information */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Patient Information</h2>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-700">
                    This information helps us better understand the adverse reaction.
                    All fields are optional - provide only what you're comfortable sharing.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                  <input
                    type="number"
                    name="patientInfo.age"
                    value={formData.patientInfo.age}
                    onChange={handleChange}
                    placeholder="Years"
                    min="0"
                    max="120"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                  <select
                    name="patientInfo.gender"
                    value={formData.patientInfo.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
                  <input
                    type="number"
                    name="patientInfo.weight"
                    value={formData.patientInfo.weight}
                    onChange={handleChange}
                    placeholder="kg"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Existing Medical Conditions</label>
                <textarea
                  name="patientInfo.existingConditions"
                  value={formData.patientInfo.existingConditions}
                  onChange={handleChange}
                  rows={2}
                  placeholder="e.g., diabetes, hypertension, allergies"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Other Medications Being Taken</label>
                <textarea
                  name="patientInfo.otherMedications"
                  value={formData.patientInfo.otherMedications}
                  onChange={handleChange}
                  rows={2}
                  placeholder="List any other medications, supplements, or herbal remedies"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="flex items-center space-x-2 px-6 py-3 text-gray-600 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>

            {currentStep < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700"
              >
                <span>Next</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Report</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportADR;
