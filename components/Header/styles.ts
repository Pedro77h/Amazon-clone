import Image from "next/image";
import styled from "styled-components";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NextLink from "next/link";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.navBg};
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  margin: 0;
  padding: 0.6rem 1rem;
  z-index: 1000;
`;

export const Logo = styled(Image)`
  margin: 0 1.25rem;
  height: 3.1rem;
  cursor: pointer;
  object-fit: contain;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.6rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const OptionTopLine = styled.span`
  font-size: 0.6rem;
`;

export const OptionBottomLine = styled.span`
  font-size: 0.8rem;
  font-weight: 800;
`;

export const Basket = styled.div`
  display: flex;
  align-items: center;
`;

export const BasketCounter = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.orange};
  font-weight: 500;
`;

export const SignInLink = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
`;

export const CheckoutLink = styled(NextLink)`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
`;
