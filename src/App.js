
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";
import { Cart } from "./Pages/Cart/Cart";
import { Favorits } from "./Pages/Favorits/Favorits";
import { Home } from "./Pages/Home";
import StartPage from "./Pages/StartPage";




function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<StartPage />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Favorits" element={<Favorits />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
