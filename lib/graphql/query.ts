import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getProducts {
    products {
      id
      name
      description
      price
      images {
        id
        url
        fileName
        width
        height
      }
    }
  }
`;
