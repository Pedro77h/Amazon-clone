import { Title } from "../../styles/sharedStyles";
import { AddProductBasketButton } from "../AddProductBasketButton";
import { Price } from "../Price";
import { Rating } from "../Rating";
import * as S from "./styles";

export interface ProductProps {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
}

export const Product = ({ id, image, price, rating, title }: ProductProps) => {
  return (
    <S.ProductContainer>
      <img src={image} alt={title} />
      <S.Info>
        <Title>{title}</Title>
        <Price itemPrice={price} />
        <Rating ratingNumber={rating} />
      </S.Info>

      <AddProductBasketButton
        id={id}
        image={image}
        price={price}
        rating={rating}
        title={title}
      />
    </S.ProductContainer>
  );
};
