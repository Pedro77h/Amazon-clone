import React from "react";
import Link from "next/link";

import { SearchBox } from "./SearchBox";

import * as S from "./styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { selectUser, signOut } from "../../lib/store/reducers/user.reducer";
import { useAppDispatch } from "../../lib/store/hooks";
import { useRouter } from "next/router";
import { selectCartItemsCount } from "../../lib/store/reducers/cart.reducer";

export const Header = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const user = useSelector(selectUser);
  const basketCount = useSelector(selectCartItemsCount);

  const handleSignIn = () => {
    if (user !== null) {
      dispatch(signOut());
    } else {
      router.push("/login");
    }
  };

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
          <S.OptionTopLine>Hello {user?.email} </S.OptionTopLine>
          <S.OptionBottomLine onClick={handleSignIn}>
            {user !== null ? "Sign Out" : "Sign In"}
          </S.OptionBottomLine>
        </S.Option>
      </S.SignInLink>

      <S.Option>
        <S.OptionTopLine>Return</S.OptionTopLine>
        <S.OptionBottomLine>& Orders</S.OptionBottomLine>
      </S.Option>

      <S.CheckoutLink href="/checkout">
        <S.Basket>
          <ShoppingCartOutlinedIcon fill="white" />
          <S.BasketCounter>{basketCount}</S.BasketCounter>
        </S.Basket>
      </S.CheckoutLink>
    </S.Nav>
  );
};
