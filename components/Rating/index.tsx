import * as S from "./styles";
import StarIcon from "@mui/icons-material/Star";

interface RatingProps {
  ratingNumber: number;
}

export const Rating = ({ ratingNumber }: RatingProps) => {
  return (
    <S.Container>
      {new Array(ratingNumber).fill(<StarIcon className="product__star" />)}
    </S.Container>
  );
};
