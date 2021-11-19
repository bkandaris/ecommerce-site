import React, { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
const Key = 'pk_test_4zLfjF05n9WauyUiHY30Oe9R00lHvBkohm';

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (stripeToken) => {
    setStripeToken(stripeToken);
  };
  console.log(Key);
  console.log('stripeToken', stripeToken);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          'http://localhost:5000/api/checkout/payment',
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log('data', res.data);
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StripeCheckout
        name='Benazon'
        // image=""
        billingAddress
        shippingAddress
        description='Your total is $20'
        amount={2000}
        token={onToken}
        stripeKey={Key}>
        <button
          style={{
            border: 'none',
            width: 120,
            borderRadius: 5,
            padding: '20px',
            backgroundColor: 'black',
            color: 'white',
            fontWeight: '500',
            cursor: 'pointer',
          }}>
          Pay
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
