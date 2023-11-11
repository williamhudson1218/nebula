import { useQuery, gql } from "@apollo/client";
import client from "./apollo";

const GET_LISTINGS_QUERY = gql`
  query GetListings {
    listings {
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

const useGetListings = () => {
  const { loading, error, data } = useQuery(GET_LISTINGS_QUERY, { client });

  const executeGetListings = () => {
    if (loading) {
      return { loading: true, error: null, listings: null };
    }

    if (error) {
      console.error("Error fetching listings:", error);
      return { loading: false, error, listings: null };
    }

    const { listings } = data;
    return { loading: false, error: null, listings };
  };

  return { executeGetListings };
};

export default useGetListings;
