/**
 * Logger Utility
 * Simple logging utility for the application
 * In production, you might want to use a library like Winston
 */

const logger = {
  info: (message, ...args) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] INFO:`, message, ...args);
  },

  error: (message, error, ...args) => {
    const timestamp = new Date().toISOString();
    console.error(`[${timestamp}] ERROR:`, message, error?.message || error, ...args);
    if (error?.stack && process.env.NODE_ENV === 'development') {
      console.error(error.stack);
    }
  },

  warn: (message, ...args) => {
    const timestamp = new Date().toISOString();
    console.warn(`[${timestamp}] WARN:`, message, ...args);
  },

  debug: (message, ...args) => {
    if (process.env.NODE_ENV === 'development') {
      const timestamp = new Date().toISOString();
      console.log(`[${timestamp}] DEBUG:`, message, ...args);
    }
  }
};

module.exports = logger;
