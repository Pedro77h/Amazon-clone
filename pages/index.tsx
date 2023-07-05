import { Product } from "../components/Product";
import * as S from "../styles/homeStyles";

export default function Home() {
  return (
    <S.HomeContainer>
      <S.BackgroundImg
        src="https://m.media-amazon.com/images/I/61xnEcip5RL._SX3000_.jpg"
        alt="Amazon Background"
      />
      <S.ProductRows>
        <Product
          id="1234"
          image="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg"
          price={19.19}
          rating={3}
          title="Flor muito massa"
        />
      </S.ProductRows>
    </S.HomeContainer>
  );
}
