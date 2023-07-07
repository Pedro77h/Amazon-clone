import styled from "styled-components";

const Container = styled.div`
  padding: 0 0.5rem;
  height: 100%;
  min-height: 100vh;
  background-color: white;
`;
const Main = styled.main`
  padding: 2rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1500px;
`;

const Title = styled.h1`
  margin: 1.5rem 0 1rem;
  line-height: 1.15;
  font-size: 1.4rem;
  font-weight: 500;
  text-align: left;
  text-decoration: none;

  a {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`;

const AmazonButton = styled.button`
  background: #ffd814;
  border-color: #fcd200;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
  font-size: 0.8rem;
  padding: 0.7rem;
  cursor: pointer;
`;

export { Container, Main, Title, Description, AmazonButton };
