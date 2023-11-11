import { useMutation, gql } from "@apollo/client";
import client from "./apollo";

const CREATE_LISTING_MUTATION = gql`
  mutation CreateListing($input: ListingInput!) {
    createListing(input: $input) {
      id
      title
      description
      location
      price
      number_of_bedrooms
      number_of_bathrooms
      property_type
      max_guests
      amenities
      inserted_at
      updated_at
    }
  }
`;

const useCreateListingHook = () => {
  const [createListing] = useMutation(CREATE_LISTING_MUTATION, { client });

  const executeCreateListing = async (input) => {
    try {
      const { data } = await createListing({ variables: { input } });
      return data.createListing;
    } catch (error) {
      console.error("Error creating listing:", error);
      throw error;
    }
  };

  return { executeCreateListing };
};

export default useCreateListingHook;
