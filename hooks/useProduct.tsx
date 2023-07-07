import { useQuery } from "@apollo/client";
import { GET_PRODUCT, GET_PRODUCTS } from "../lib/graphql/query";

const useProduct = (id: string) => {
  const { loading, error, data } = useQuery(GET_PRODUCT, {variables: {id}});

  return {
    data,
    error,
    loading,
  };
};

export default useProduct;
