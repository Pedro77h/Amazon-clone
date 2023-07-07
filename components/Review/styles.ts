import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  p {
    margin: 2px 0;
  }
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .MuiSvgIcon-root {
    font-size: 1.9rem;
    color: gray;
    margin-right: 0.7rem;
  }
`;

export const MiddleRow = styled(TopRow)`
  .MuiSvgIcon-root {
    color: ${({ theme }) => theme.colors.orange};
    font-size: 1.3rem;
  }

  p {
    font-weight: bold;
  }
`;

export const VerifiedText = styled.p`
  color: ${({ theme }) => theme.colors.orange};
  font-weight: bold;
  font-size: 0.8rem;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const HelpfulBtn = styled.button`
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  width: fit-content;
  padding: 0 0.7rem 0 0.75rem;
  box-shadow: none;
  font-size: 0.8rem;
  height: 1.8rem;
  border: 1px solid lightgray;
  margin-right: 0.7rem;
  cursor: pointer;
`;

export const BottomRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0.7rem 0 0.75rem;
  cursor: pointer;
`;
