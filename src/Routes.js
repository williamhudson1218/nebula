import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ListingsPage from "./ListingsPage";
// import MyAccountPage from "./MyAccountPage"; // Create this component
import ListingForm from "./ListingForm"; // Create this component

const AppRoutes = () => {
  return (
    <>
      <Navigate from="/" to="/listings" replace />
      <Routes>
        <Route path="/listings" element={<ListingsPage />} />
        {/* <Route path="/my-account" component={MyAccountPage} /> */}
        <Route path="/create-listing" element={<ListingForm />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
