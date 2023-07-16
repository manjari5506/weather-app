import React from "react";
import { Route, Routes } from "react-router-dom";
import {InputPage} from "./InputPage";
import {Output} from "./Output";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<InputPage />} />;
      <Route path="/output" element={<Output />} />
    </Routes>
  );
};

export default AllRoutes;