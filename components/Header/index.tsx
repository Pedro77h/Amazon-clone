import React from "react";
import Link from "next/link";

import { SearchBox } from "./SearchBox";

import * as S from "./styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const Header = () => {
  return (
    <S.Nav>
      <Link href="/">
        <S.Logo
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
          width={100}
          height={100}
        />
      </Link>

      <SearchBox />

      <S.SignInLink>
        <S.Option>
          <S.OptionTopLine>Hello</S.OptionTopLine>
          <S.OptionBottomLine>Sign in</S.OptionBottomLine>
        </S.Option>
      </S.SignInLink>

      <S.Option>
        <S.OptionTopLine>Return</S.OptionTopLine>
        <S.OptionBottomLine>& Orders</S.OptionBottomLine>
      </S.Option>

      <S.CheckoutLink href="/checkout">
        <S.Basket>
          <ShoppingCartOutlinedIcon fill="white" />
          <S.BasketCounter>0</S.BasketCounter>
        </S.Basket>
      </S.CheckoutLink>
    </S.Nav>
  );
};
