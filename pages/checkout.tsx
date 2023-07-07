import React from "react";
import { Container } from "../styles/sharedStyles";
import { Advert } from "../components/Advent";
import { Main } from "../styles/sharedStyles";
import {
  CheckoutBody,
  CheckoutContainer,
  CheckoutTitle,
} from "../styles/checkoutStyles";
import { useAppSelector } from "../lib/store/hooks";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../lib/store/reducers/cart.reducer";
import { Product } from "../components/Product";

import { ICart } from "../@types/ICart";
import CheckoutProduct from "../components/CheckoutProduct";
import SubTotal from "../components/SubTotal";

const Checkout = () => {
  const basket = useAppSelector(selectCartItems);
  const basketCount = useAppSelector(selectCartItemsCount);

  return (
    <Container>
      <Main>
        <Advert />
        <CheckoutBody>
          <CheckoutContainer>
            {basket.length === 0 ? (
              <div>
                <h2>Your Shopping Basket is empty.</h2>
              </div>
            ) : (
              <CheckoutTitle>
                Your Shopping Basket - {basketCount}{" "}
                {basketCount > 1 ? "items" : "item"} in basket
              </CheckoutTitle>
            )}
            {basket.map((item: ICart, index: number) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  image={item.image}
                  price={item.price}
                  title={item.title}
                />
              );
            })}
          </CheckoutContainer>
          {basket.length > 0 && <SubTotal />}
        </CheckoutBody>
      </Main>
    </Container>
  );
};

export default Checkout;
