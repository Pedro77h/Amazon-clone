import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 18.75rem;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 1;
  padding: 1.25rem;
  margin: 0.7rem;

  img {
    width: 100%;
    max-height: 12.5rem;
    object-fit: contain;
    margin-bottom: 0.7rem;
  }

  .product__star {
    color: ${({ theme }) => theme.colors.orange} !important;
  }
`;

const Info = styled.div``;

const Price = styled.p`
  display: flex;
  margin: -0.7rem 0;
  font-size: 1.25rem;
  align-items: flex-start;

  span {
    font-weight: 600;
  }

  small {
    font-size: small;
    margin-top: 2px;
  }
`;

export { ProductContainer, Price, Info };
