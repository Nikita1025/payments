import React from "react";

import { Route, Routes } from "react-router-dom";

import { PATH } from "./routes";
import { MainPage } from "src/components/pages/mainPage";
import { CheckoutPurchPage } from "src/components/pages/checkoutPurchPage";
import { CheckoutSubPage } from "src/components/pages/checkoutSubPage";
import { CheckoutTrialSubPage } from "src/components/pages/checkoutTrialSubPage";
import { ErrorPage } from "src/components/pages/errorPage";

export const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path={PATH.MAIN} element={<MainPage />} />
        <Route path={PATH.CHECKOUT_PURCH} element={<CheckoutPurchPage />} />
        <Route path={PATH.CHECKOUT_SUB1} element={<CheckoutSubPage />} />
        <Route
          path={PATH.CHECKOUT_TRAIL_SUB}
          element={<CheckoutTrialSubPage />}
        />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </>
  );
};
