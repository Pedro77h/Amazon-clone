import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  padding: 1.25rem;
  background-color: ${({ theme }) => theme.colors.white};
  height: max-content;
  flex-direction: column;
`;

export const CheckoutTitle = styled.h2`
  margin-right: 0.7rem;
  padding: 0.7rem;
  border-bottom: 1px solid lightgray;
`;

export const CheckoutBody = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  :first-child {
    flex: 0.6;
  }
  :last-child {
    flex: 0.4;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    :first-child {
      flex: 1;
    }
    :last-child {
      flex: 1;
    }
  }
`;
