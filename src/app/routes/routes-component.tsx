import React from "react";

import { Route, Routes } from "react-router-dom";

import { PATH } from "./routes";
import { MainPage } from "src/components/pages/mainPage";

export const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path={PATH.MAIN} element={<MainPage />} />
        {/*<Route path={PATH.CHECKOUT_PURCH} element={<LoginForm />} />*/}
        {/*<Route path={"*"} element={<ErrorPage />} />*/}
      </Routes>
    </>
  );
};
