import styled, { DefaultTheme } from "styled-components";

export const Container = styled.div`
  width: 18.75;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  border: 1px solid lightgray;
  gap: 0.3rem;

  h1 {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.2;
  }

  label {
    font-weight: 600;
    font-size: 0.9rem;
  }
  p {
    margin-top: 1rem;
    font-size: 0.9rem;
  }

  input {
    height: 1.9rem;
    margin-bottom: 0.6rem;
    width: 98;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const Button = styled.button<{ signIn?: boolean }>`
  ${({ signIn }) => signIn && "background: #f0c14b;  border-color: #a88734 #9c7e31 #846a29;"}
 
  color: ${({ theme }) => theme.colors.black};
  margin-top: 0.5rem;
  border-radius: 2px;
  width: 100%;
  height: 1.9rem;
  cursor: pointer;
`;
