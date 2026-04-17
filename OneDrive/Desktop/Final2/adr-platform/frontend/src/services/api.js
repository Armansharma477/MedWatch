/**
 * API Service
 * Centralizes all API calls to the backend
 * Uses Axios for HTTP requests
 */

import axios from 'axios';

// Base URL for API requests
// In development, Vite proxy handles this
// In production, this should be your deployed backend URL
const API_URL = import.meta.env.VITE_API_URL || '/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request interceptor to attach token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized errors
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth Service
export const authService = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  getProfile: () => api.get('/auth/me'),
  updateProfile: (data) => api.put('/auth/update-profile', data),
  changePassword: (data) => api.post('/auth/change-password', data)
};

// Report Service
export const reportService = {
  create: (reportData) => api.post('/reports', reportData),
  getAll: (params) => api.get('/reports', { params }),
  getById: (id) => api.get(`/reports/${id}`),
  update: (id, data) => api.put(`/reports/${id}`, data),
  delete: (id) => api.delete(`/reports/${id}`),
  updateStatus: (id, status, notes) => api.put(`/reports/${id}/status`, { status, adminNotes: notes }),
  getStats: () => api.get('/reports/stats/overview')
};

// User Service (Admin)
export const userService = {
  getAll: (params) => api.get('/users', { params }),
  getById: (id) => api.get(`/users/${id}`),
  update: (id, data) => api.put(`/users/${id}`, data),
  delete: (id) => api.delete(`/users/${id}`)
};

// Payment Service
export const paymentService = {
  getConfig: () => api.get('/payments/config'),
  createCheckoutSession: (data) => api.post('/payments/create-checkout-session', data),
  verifySession: (sessionId) => api.post('/payments/verify-session', { sessionId }),
  getSubscription: () => api.get('/payments/subscription'),
  createPortalSession: () => api.post('/payments/create-portal-session')
};

export default api;
