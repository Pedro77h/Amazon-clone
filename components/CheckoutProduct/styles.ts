import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 1.25rem 0;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Info = styled.div`
  padding: 1.25rem;
  width: 100%;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.7rem;
`;
