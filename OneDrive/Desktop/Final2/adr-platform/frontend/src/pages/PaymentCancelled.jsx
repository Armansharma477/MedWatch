import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle, ArrowLeft, CreditCard } from 'lucide-react';

const PaymentCancelled = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <XCircle className="w-10 h-10 text-yellow-600" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Cancelled</h1>

        <p className="text-gray-600 mb-8">
          Your payment was cancelled. No charges were made to your account.
          You can try again whenever you're ready.
        </p>

        <div className="space-y-4">
          <Link
            to="/payment"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700"
          >
            <CreditCard className="w-5 h-5" />
            <span>Try Again</span>
          </Link>

          <Link
            to="/dashboard"
            className="block text-gray-600 hover:text-gray-900"
          >
            <span className="inline-flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancelled;
