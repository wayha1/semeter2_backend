import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../Components/Payment/CheckoutForm';

const stripePromise = loadStripe('pk_test_51PH2vERvwUFIwe3TbN1v3XQaTAJ0pszrDD7S6ywzyNtnuqIDhTgjNFnYoMxzNdsfdzeHtf0VKaUk9doEeK7qwkAM00lKbVe9q2');

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="min-h-screen flex items-center justify-center">
        <CheckoutForm />
      </div>
    </Elements>
  );
};

export default Payment;
