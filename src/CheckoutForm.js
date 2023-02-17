import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  PaymentRequestButtonElement,
  useStripe,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState(null);

  useEffect(() => {
    if (stripe) {
      const pr = stripe.confirmPayNowPayment(
        "pi_3McPIxBsWVXDm4LA19hGLTBo_secret_fRQBgjB8W0OHzsXDJbdkLiAIe",
        {
          country: "SG",
          currency: "sgd",
          total: {
            label: "Carpool",
            amount: 1600,
          },
          requestPayerName: true,
          requestPayerEmail: true,
        }
      );

      pr.then(function ({ error, paymentIntent }) {
        if (error) {
          // Inform the customer that there was an error.
        } else if (paymentIntent.status === "succeeded") {
          // Inform the customer that the payment was successful
        } else if (paymentIntent.status === "requires_action") {
          // Inform the customer that the payment did not go through
        }
      });
    }
  }, [stripe]);

  if (paymentRequest) {
    return <PaymentRequestButtonElement options={{ paymentRequest }} />;
  }

  return (
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};

export default CheckoutForm;
