import { useRouter } from "next/router";
import React from "react";
import useProduct from "../../hooks/useProduct";
import { Container, Main } from "../../styles/sharedStyles";
import { Advert } from "../../components/Advent";
import ProductDetails from "../../components/ProductDetails";

function ProductInfo() {
  const router = useRouter();
  const { id } = router.query;

  const { loading, data, error } = useProduct(id as string);

  if (loading) return <p>loading...</p>;

  if (error) return <p>error</p>;

  return (
    <Container>
      <Main>
        <Advert />
        <ProductDetails product={data.product} />
      </Main>
    </Container>
  );
}

export default ProductInfo;
