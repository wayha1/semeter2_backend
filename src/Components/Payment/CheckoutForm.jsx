import React, { useState } from 'react';
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const cardElement = elements.getElement(CardNumberElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    } else {
      setError(null);
    }

    try {
      const response = await fetch('http://localhost:8000/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const paymentIntentResponse = await response.json();

      if (paymentIntentResponse.error) {
        setError(paymentIntentResponse.error.message);
        setLoading(false);
        return;
      }

      const { client_secret } = paymentIntentResponse;

      const { error: confirmError } = await stripe.confirmCardPayment(client_secret);

      if (confirmError) {
        setError(confirmError.message);
        setLoading(false);
      } else {
        setError(null);
        alert('Payment successful!');
        setLoading(false);
      }
    } catch (fetchError) {
      setError(fetchError.message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-6 bg-pink-100 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block mb-2 text-gray-700">Card Number</label>
        <CardNumberElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
          className="p-2 border rounded bg-white"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700">Expiration Date</label>
        <CardExpiryElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
          className="p-2 border rounded bg-white"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700">CVC</label>
        <CardCvcElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
          className="p-2 border rounded bg-white"
        />
      </div>
      {error && <div className="mb-4 text-red-500">{error}</div>}
      <button
        type="submit"
        className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Pay'}
      </button>
    </form>
  );
};

export default CheckoutForm;
