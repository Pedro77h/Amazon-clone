import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../lib/graphql/query";

const useProducts = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  return {
    data,
    error,
    loading,
  };
};

export default useProducts;
