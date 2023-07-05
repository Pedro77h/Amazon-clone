import { Title } from "../../styles/sharedStyles";
import { Price } from "../Price";
import { Rating } from "../Rating";
import * as S from "./styles";

interface ProductProps {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
}

export const Product = ({
  id,
  image,
  price,
  rating,
  title,
}: ProductProps) => {
  return (
    <S.ProductContainer>
      <img src={image} alt={title} />
      <S.Info>
        <Title>{title}</Title>
        <Price itemPrice={price} />
        <Rating ratingNumber={rating} />
      </S.Info>
    </S.ProductContainer>
  );
};
