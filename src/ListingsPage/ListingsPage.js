import React from "react";
import useListingsHook from "../hooks/useGetListings";
import "./ListingsPage.css";

const ListingsPage = () => {
  const { executeGetListings } = useListingsHook();
  const { loading, error, listings } = executeGetListings();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="listings-page">
      <h1 className="page-title" style={{ textAlign: "center" }}>
        Listings
      </h1>
      <div className="listings-container">
        {listings.map((listing) => (
          <div key={listing.id} className="listing-item">
            <div className="listing-image-placeholder">
              {/* Placeholder image content */}
            </div>
            <div className="listing-details">
              {listing.title}
              {listing.number_of_bedrooms}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingsPage;
