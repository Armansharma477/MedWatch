import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { paymentService } from '../services/api';
import { useAuth } from '../context/AuthContext';
import {
  CreditCard,
  Check,
  Shield,
  Zap,
  Users,
  BarChart3,
  Lock,
  AlertTriangle,
  Star,
} from 'lucide-react';

const Payment = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [isLoading, setIsLoading] = useState(false);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    fetchSubscription();
  }, []);

  const fetchSubscription = async () => {
    try {
      const response = await paymentService.getSubscription();
      setSubscription(response.data.subscription);
    } catch (error) {
      console.error('Error fetching subscription:', error);
    }
  };

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const response = await paymentService.createCheckoutSession({
        plan: selectedPlan,
      });

      // Redirect to Stripe Checkout
      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Error initiating checkout. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleManageSubscription = async () => {
    try {
      const response = await paymentService.createPortalSession();
      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error('Error creating portal session:', error);
    }
  };

  const plans = {
    monthly: {
      name: 'Premium Monthly',
      price: 999,
      period: 'month',
      priceId: 'price_monthly',
      popular: false,
    },
    yearly: {
      name: 'Premium Yearly',
      price: 9990,
      period: 'year',
      priceId: 'price_yearly',
      popular: true,
      savings: 'Save 17%',
    },
  };

  const features = [
    { icon: Zap, text: 'Unlimited ADR Reports' },
    { icon: BarChart3, text: 'Advanced Analytics Dashboard' },
    { icon: Users, text: 'Priority Support' },
    { icon: Shield, text: 'Data Export & API Access' },
    { icon: Star, text: 'Early Access to New Features' },
    { icon: Lock, text: 'Enhanced Security Features' },
  ];

  // If user already has premium subscription
  if (subscription?.status === 'premium') {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">You're on Premium!</h1>
            <p className="text-gray-600 mb-8">
              You have access to all premium features. Thank you for supporting MedWatch India!
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Current Plan</span>
                <span className="font-semibold text-gray-900">Premium</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Status</span>
                <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                  Active
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleManageSubscription}
                className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700"
              >
                Manage Subscription
              </button>
              <button
                onClick={() => navigate('/dashboard')}
                className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Upgrade to Premium</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get unlimited reports, advanced analytics, and priority support.
            Choose the plan that works best for you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {Object.entries(plans).map(([key, plan]) => (
            <div
              key={key}
              onClick={() => setSelectedPlan(key)}
              className={`relative rounded-2xl p-8 cursor-pointer transition-all ${
                selectedPlan === key
                  ? 'bg-white shadow-xl border-2 border-primary-500'
                  : 'bg-white shadow-md border-2 border-gray-200 hover:border-gray-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-2xl text-gray-500">₹</span>
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500">/{plan.period}</span>
                </div>
                {plan.savings && (
                  <p className="text-green-600 font-medium mb-4">{plan.savings}</p>
                )}

                <div
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    selectedPlan === key
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedPlan === key ? 'Selected' : 'Choose Plan'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Premium Features</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-primary-600" />
                </div>
                <span className="text-gray-700">{feature.text}</span>
                <Check className="w-5 h-5 text-green-500 ml-auto flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Checkout Button */}
        <div className="text-center">
          <button
            onClick={handleCheckout}
            disabled={isLoading}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold text-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <CreditCard className="w-5 h-5" />
                <span>
                  Subscribe to {plans[selectedPlan].name} - ₹{plans[selectedPlan].price}/
                  {plans[selectedPlan].period}
                </span>
              </>
            )}
          </button>

          <p className="mt-4 text-sm text-gray-500">
            Secure payment processing by Stripe. Cancel anytime.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex items-center justify-center space-x-8 text-gray-400">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5" />
            <span className="text-sm">SSL Secure</span>
          </div>
          <div className="flex items-center space-x-2">
            <Lock className="w-5 h-5" />
            <span className="text-sm">Encrypted</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="w-5 h-5" />
            <span className="text-sm">Verified by Stripe</span>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: 'Can I cancel my subscription?',
                a: 'Yes, you can cancel anytime. You\'ll continue to have access until the end of your billing period.',
              },
              {
                q: 'Is there a free trial?',
                a: 'Yes, we offer a 7-day free trial. You won\'t be charged until the trial ends.',
              },
              {
                q: 'What payment methods are accepted?',
                a: 'We accept all major credit cards, debit cards, and UPI payments through Stripe.',
              },
              {
                q: 'Can I switch between plans?',
                a: 'Yes, you can upgrade or downgrade your plan at any time from your account settings.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
