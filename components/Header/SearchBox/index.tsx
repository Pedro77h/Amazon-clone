import React from "react";
import * as S from "./styles";

export const SearchBox = () => {
  return (
    <S.Container>
      <S.SearchInput type="text" />
      <S.SearchIconButton />
    </S.Container>
  );
};
