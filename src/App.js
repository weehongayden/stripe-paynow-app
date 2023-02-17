import "./App.css";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "./CheckoutForm";

function App() {
  const stripePromise = loadStripe("pk_test_otyK4mgNCNlANjnIQBKlmWsl");
  const options = {
    clientSecret:
      "pi_3McPIxBsWVXDm4LA19hGLTBo_secret_fRQBgjB8W0OHzsXDJbdkLiAIe",
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
}

export default App;
