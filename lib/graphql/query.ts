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

export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(where: { id: $id }) {
      id
      name
      description
      price
      categories {
        id
        name
      }
      images {
        width
        height
        fileName
        url
      }
      reviews {
        id
        rating
        email
        name
        headline
        content
      }
    }
  }
`;

