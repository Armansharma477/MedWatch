import React from 'react';
import { RefreshCcw, CheckCircle, XCircle, Clock, CreditCard, AlertTriangle } from 'lucide-react';

const Refund = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Refund Policy</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Clear and fair refund terms for our subscription services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <RefreshCcw className="w-6 h-6 text-primary-600" />
              <h2 className="text-xl font-bold text-gray-900">Overview</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              At MedWatch India, we want you to be completely satisfied with our services. This
              Refund Policy outlines the terms under which refunds may be granted for our Premium
              and Enterprise subscription plans. Please read this policy carefully before making
              a purchase.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              <strong>Last Updated:</strong> April 16, 2026
            </p>
          </div>

          {/* Free Plan */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h2 className="text-xl font-bold text-gray-900">Free Plan</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our Free plan is available at no cost and includes basic ADR reporting capabilities.
              As this is a free service, no refunds apply. You can use the Free plan indefinitely
              with no obligation to upgrade.
            </p>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <CreditCard className="w-6 h-6 text-primary-600" />
              <h2 className="text-xl font-bold text-gray-900">Premium Plan Refund Policy</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">7-Day Free Trial</h3>
                <p className="text-gray-600">
                  All Premium subscriptions begin with a 7-day free trial. You will not be charged
                  during this period. You can cancel anytime during the trial without any charges.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">14-Day Money-Back Guarantee</h3>
                <p className="text-gray-600">
                  If you are not satisfied with your Premium subscription, you may request a full
                  refund within 14 days of your first payment. This applies only to your first
                  subscription period.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Prorated Refunds</h3>
                <p className="text-gray-600">
                  After the 14-day period, you may cancel your subscription at any time. You will
                  continue to have access to Premium features until the end of your current billing
                  period. We do not provide prorated refunds for partial months.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Annual Subscription Refunds</h3>
                <p className="text-gray-600">
                  For annual subscriptions, if you cancel within 14 days, you receive a full refund.
                  After 14 days but within 30 days, you may request a refund minus the equivalent
                  of one month at the monthly rate. No refunds after 30 days.
                </p>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="w-6 h-6 text-secondary-600" />
              <h2 className="text-xl font-bold text-gray-900">Enterprise Plan Refund Policy</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Custom Agreements</h3>
                <p className="text-gray-600">
                  Enterprise subscriptions are governed by custom service agreements. Refund terms
                  are specified in your specific contract and may vary based on the services agreed upon.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Pilot Period</h3>
                <p className="text-gray-600">
                  Enterprise agreements typically include a 30-day pilot/evaluation period. During
                  this time, you may terminate the agreement without penalty if the solution does
                  not meet your requirements.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Termination for Convenience</h3>
                <p className="text-gray-600">
                  Enterprise contracts may include a "termination for convenience" clause allowing
                  either party to terminate with 90 days notice. Refund terms in such cases are
                  defined in your agreement.
                </p>
              </div>
            </div>
          </div>

          {/* Non-Refundable Items */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <XCircle className="w-6 h-6 text-red-600" />
              <h2 className="text-xl font-bold text-gray-900">Non-Refundable Items</h2>
            </div>

            <p className="text-gray-600 mb-4">The following are not eligible for refunds:</p>

            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-2">
                <span>•</span>
                <span>Setup fees or implementation charges (unless service was never delivered)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>•</span>
                <span>Training services that have already been conducted</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>•</span>
                <span>Custom development work or integrations</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>•</span>
                <span>Subscriptions cancelled after the eligible refund period</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>•</span>
                <span>Violations of terms of service leading to account termination</span>
              </li>
            </ul>
          </div>

          {/* How to Request a Refund */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <RefreshCcw className="w-6 h-6 text-primary-600" />
              <h2 className="text-xl font-bold text-gray-900">How to Request a Refund</h2>
            </div>

            <p className="text-gray-600 mb-4">To request a refund, please follow these steps:</p>

            <ol className="space-y-3 text-gray-600 list-decimal list-inside">
              <li>Log into your MedWatch India account</li>
              <li>Go to Settings → Billing → Request Refund</li>
              <li>Fill out the refund request form with your reason</li>
              <li>Submit the request</li>
            </ol>

            <p className="text-gray-600 mt-4">
              Or email us directly at <a href="mailto:billing@medwatchindia.com" className="text-primary-600 hover:underline">billing@medwatchindia.com</a> with your account details and refund reason.
            </p>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Processing Time</p>
                  <p className="text-gray-600 text-sm">
                    Refund requests are processed within 5-7 business days. Approved refunds are
                    issued to the original payment method within 5-10 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Disputes */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
              <h2 className="text-xl font-bold text-gray-900">Refund Disputes</h2>
            </div>

            <p className="text-gray-600 leading-relaxed">
              If your refund request is denied and you believe this is in error, you may appeal the
              decision by contacting our billing team with additional information supporting your claim.
              We aim to resolve all disputes within 10 business days.
            </p>

            <p className="text-gray-600 leading-relaxed mt-4">
              If we cannot reach a satisfactory resolution, you may escalate the matter to our
              Grievance Officer at <a href="mailto:grievance@medwatchindia.com" className="text-primary-600 hover:underline">grievance@medwatchindia.com</a>.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl shadow-sm border border-primary-100 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Questions About Refunds?</h2>

            <p className="text-gray-600 mb-4">
              Our billing team is here to help you with any questions about refunds or subscription charges.
            </p>

            <div className="space-y-2 text-gray-600">
              <p><strong>Email:</strong> <a href="mailto:billing@medwatchindia.com" className="text-primary-600 hover:underline">billing@medwatchindia.com</a></p>
              <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST</p>
              <p><strong>Response Time:</strong> Within 24 hours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Refund;
