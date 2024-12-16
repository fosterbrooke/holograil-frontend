import { fetchAPI } from './api';

export const pricingPlans = {
  onetime: 'price_1PycsEJlIvt55eMlzHaHkd9a',
  year: 'price_1PycseJlIvt55eMlDRFmQDfR',
  month: 'price_1Pyct6JlIvt55eMlTbd4SHN9',
  day: 'price_1PyctZJlIvt55eMlorJURoTl',
};

interface PurchaseRequestBody {
  email: string;
  plan_id?: string;
  amount?: number;
  payment_method_id?: string;
}

async function handlePurchase(mode: string, data: PurchaseRequestBody) {
  try {
    const fetchURL = `/subscriptions/create-checkout-session/${mode}`;

    const session = await fetchAPI(fetchURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(data),
    });
    window.location.href = session.url; // Redirect to Stripe checkout
  } catch (error) {
    console.error('Error creating checkout session:', error);
  }
}

export default handlePurchase;
