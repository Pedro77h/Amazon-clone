import styled from "styled-components";

export const PriceContainer = styled.div`
  display: flex;
  margin: -0.7rem 0;
  font-size: 1.25rem;
  align-items: flex-start;

  span {
    font-weight: 600;
    display: flex;
    align-items: center;
  }

  small {
    font-size: small;
    margin-top: 2px;
  }
`;

export const Pence = styled.small`
  margin-bottom: 0.5rem;
`;
