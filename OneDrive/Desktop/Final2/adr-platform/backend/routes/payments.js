/**
 * Payment Routes
 * Handles Stripe payment integration
 * Supports subscription-based payments for premium features
 */

const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const User = require('../models/User');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

/**
 * GET /api/payments/config
 * Get Stripe publishable key
 * Public endpoint - needed to initialize Stripe on frontend
 */
router.get('/config', (req, res) => {
  res.json({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
  });
});

/**
 * POST /api/payments/create-checkout-session
 * Create a Stripe checkout session for subscription
 * Protected route
 */
router.post('/create-checkout-session', authenticate, async (req, res) => {
  try {
    const { priceId, plan } = req.body;

    // Default price IDs (these would come from your Stripe Dashboard)
    // For testing, you can create products in Stripe test mode
    const defaultPriceIds = {
      monthly: 'price_monthly_placeholder',
      yearly: 'price_yearly_placeholder'
    };

    const selectedPriceId = priceId || defaultPriceIds[plan] || defaultPriceIds.monthly;

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: selectedPriceId,
          quantity: 1
        }
      ],
      success_url: `${process.env.FRONTEND_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/payment/cancelled`,
      customer_email: req.user.email,
      metadata: {
        userId: req.user._id.toString(),
        plan: plan || 'premium'
      }
    });

    res.json({
      success: true,
      sessionId: session.id,
      url: session.url
    });

  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating checkout session',
      error: error.message
    });
  }
});

/**
 * POST /api/payments/verify-session
 * Verify payment was successful and update user subscription
 * Protected route
 */
router.post('/verify-session', authenticate, async (req, res) => {
  try {
    const { sessionId } = req.body;

    // Retrieve session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== 'paid') {
      return res.status(400).json({
        success: false,
        message: 'Payment not completed'
      });
    }

    // Update user's subscription status
    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        'subscription.status': 'premium',
        'subscription.stripeCustomerId': session.customer,
        'subscription.stripeSubscriptionId': session.subscription
      },
      { new: true }
    );

    res.json({
      success: true,
      message: 'Subscription activated successfully',
      subscription: user.subscription
    });

  } catch (error) {
    console.error('Error verifying session:', error);
    res.status(500).json({
      success: false,
      message: 'Error verifying payment',
      error: error.message
    });
  }
});

/**
 * POST /api/payments/create-portal-session
 * Create customer portal session for managing subscription
 * Protected route
 */
router.post('/create-portal-session', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user.subscription.stripeCustomerId) {
      return res.status(400).json({
        success: false,
        message: 'No active subscription found'
      });
    }

    // Create portal session
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: user.subscription.stripeCustomerId,
      return_url: `${process.env.FRONTEND_URL}/dashboard`
    });

    res.json({
      success: true,
      url: portalSession.url
    });

  } catch (error) {
    console.error('Error creating portal session:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating portal session',
      error: error.message
    });
  }
});

/**
 * POST /api/payments/webhook
 * Handle Stripe webhook events
 * This endpoint receives events from Stripe
 */
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle specific events
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        // Update user subscription if not already done
        if (session.metadata.userId) {
          await User.findByIdAndUpdate(session.metadata.userId, {
            'subscription.status': 'premium',
            'subscription.stripeCustomerId': session.customer,
            'subscription.stripeSubscriptionId': session.subscription
          });
        }
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object;
        // Find user by stripeCustomerId and downgrade
        await User.findOneAndUpdate(
          { 'subscription.stripeCustomerId': subscription.customer },
          { 'subscription.status': 'free' }
        );
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object;
        // Handle failed payment - could send email notification
        console.log(`Payment failed for customer: ${invoice.customer}`);
        break;
      }
    }

    res.json({ received: true });

  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

/**
 * GET /api/payments/subscription
 * Get current user's subscription status
 * Protected route
 */
router.get('/subscription', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    res.json({
      success: true,
      subscription: {
        status: user.subscription.status,
        currentPeriodEnd: user.subscription.currentPeriodEnd
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching subscription',
      error: error.message
    });
  }
});

module.exports = router;
