import React from "react";

import "./App.scss";

import { RoutesComponent } from "src/app/routes";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51OVZadCH3dnwWZ7mOqRXW5NKlLIkZe4wRzdqTncga8dskhgcVQAJ2JvsyK1d9JriOPYCpZ0T7EUObBHLXpUD4HiA00k6Rg5Iaa",
);

export const App = () => {
  return (
    <div className="App">
      <Elements stripe={stripePromise}>
        <RoutesComponent />
      </Elements>
    </div>
  );
};
