import React from "react";
import { AmazonButton } from "../../styles/sharedStyles";
import { ProductProps } from "../Product";
import { useAppDispatch } from "../../lib/store/hooks";
import { addToCart } from "../../lib/store/reducers/cart.reducer";

interface AddProductBasketButtonProps extends ProductProps {}

export const AddProductBasketButton = ({
  id,
  image,
  price,
  rating,
  title,
}: AddProductBasketButtonProps) => {
  const dispatch = useAppDispatch();

  return (
    <AmazonButton
      onClick={() =>
        dispatch(
          addToCart({
            id,
            image,
            price,
            rating,
            title,
          })
        )
      }
    >
      Add To Basket
    </AmazonButton>
  );
};
