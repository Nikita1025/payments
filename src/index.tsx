import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { App } from "src/app/App";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
const stripePromise = loadStripe(
  "pk_test_51OVZadCH3dnwWZ7mOqRXW5NKlLIkZe4wRzdqTncga8dskhgcVQAJ2JvsyK1d9JriOPYCpZ0T7EUObBHLXpUD4HiA00k6Rg5Iaa",
);
root.render(
  <BrowserRouter>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
