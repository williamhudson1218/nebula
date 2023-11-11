import React, { useState } from "react";
import useCreateListingHook from "../hooks/useCreateListing";
import "./ListingForm.css"; // Import the CSS file

const ListingForm = () => {
  const { executeCreateListing } = useCreateListingHook();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    price: 0,
    number_of_bedrooms: 1,
    number_of_bathrooms: 1,
    property_type: "",
    max_guests: 1,
    amenities: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateListing = async () => {
    const parsedFormData = {
      ...formData,
      max_guests: parseInt(formData.max_guests, 10),
      number_of_bedrooms: parseInt(formData.number_of_bedrooms, 10),
      number_of_bathrooms: parseInt(formData.number_of_bathrooms, 10),
    };

    try {
      const createdListing = await executeCreateListing(parsedFormData);
      console.log("Listing created:", createdListing);
    } catch (error) {
      // Handle the error
      console.error("Error creating listing:", error);
      console.log("input:", parsedFormData);
    }
  };

  return (
    <div className="listing-form-container">
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
      />

      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        name="location"
        value={formData.location}
        onChange={handleInputChange}
      />

      <label htmlFor="price">Price:</label>
      <input
        type="number"
        id="price"
        name="price"
        value={formData.price}
        onChange={handleInputChange}
      />

      <label htmlFor="number_of_bedrooms">Number of Bedrooms:</label>
      <input
        type="number"
        id="number_of_bedrooms"
        name="number_of_bedrooms"
        value={formData.number_of_bedrooms}
        onChange={handleInputChange}
      />

      <label htmlFor="number_of_bathrooms">Number of Bathrooms:</label>
      <input
        type="number"
        id="number_of_bathrooms"
        name="number_of_bathrooms"
        value={formData.number_of_bathrooms}
        onChange={handleInputChange}
      />

      <label htmlFor="property_type">Property Type:</label>
      <input
        type="text"
        id="property_type"
        name="property_type"
        value={formData.property_type}
        onChange={handleInputChange}
      />

      <label htmlFor="max_guests">Max Guests:</label>
      <input
        type="number"
        id="max_guests"
        name="max_guests"
        value={formData.max_guests}
        onChange={handleInputChange}
      />

      <label htmlFor="amenities">Amenities:</label>
      <input
        type="text"
        id="amenities"
        name="amenities"
        value={formData.amenities}
        onChange={handleInputChange}
      />

      <button className="create-listing-button" onClick={handleCreateListing}>
        Create Listing
      </button>
    </div>
  );
};

export default ListingForm;
