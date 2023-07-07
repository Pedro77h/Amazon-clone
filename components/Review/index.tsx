import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  BottomRow,
  Container,
  HelpfulBtn,
  MiddleRow,
  TopRow,
  VerifiedText,
} from "./styles";
import { Rating } from "../Rating";
import { IReview } from "../../@types/IProduct";

interface IProps {
  productReview: IReview;
  rating: number;
}

export const Review = ({ productReview, rating }: IProps) => {
  return (
    <Container key={productReview.id}>
      <TopRow>
        <AccountCircleIcon />
        <p>{productReview.name}</p>
      </TopRow>
      <MiddleRow>
        <Rating ratingNumber={rating} />
        <p>{productReview.headline}</p>
      </MiddleRow>
      <VerifiedText>Verified Purchase</VerifiedText>
      <p>{productReview.content}</p>
      <p style={{ color: "#565959" }}>3 people found this helpful</p>
      <BottomRow>
        <HelpfulBtn>Helpful</HelpfulBtn>
        <p style={{ color: "#565959", fontSize: "0.9rem" }}>Report abuse</p>
      </BottomRow>
    </Container>
  );
};

