import Image from "next/image";
import React from "react";
import { ICategories, IProduct, IReview } from "../../@types/IProduct";
import { Container, LeftColumn, RightColumn } from "./styles";
import { Title } from "../../styles/sharedStyles";
import { AddProductBasketButton as AddToBasketButton } from "../AddProductBasketButton";
import { Price } from "../Price";
import { Review } from "../Review";

interface ProductDetailsProps {
  product: IProduct;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <Container>
      <LeftColumn>
        <Image
          src={product.images[0].url}
          alt={product.name}
          width={300}
          height={300}
          priority
        />
      </LeftColumn>
      <RightColumn>
        <Title>{product.name}</Title>
        <Price itemPrice={product.price} />
        {product.categories.map((category: ICategories) => (
          <p key={category.id}>{category.name}</p>
        ))}
        <p>{product.description}</p>

        <AddToBasketButton
          id={product.id}
          title={product.name}
          price={product.price}
          rating={5}
          image={product.images[0].url}
        />

        {product.reviews.length > 0 && (
          <>
            <Title>Top reviews from United Kingdom</Title>
            {product.reviews.map((productReview: IReview) => (
              <Review productReview={productReview} rating={4} />
            ))}
          </>
        )}
      </RightColumn>
    </Container>
  );
};

export default ProductDetails;
