import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const SearchInput = styled.input`
  display: flex;
  height: 1.5rem;
  padding: 0.7rem;
  border: none;
  width: 100%;
  outline: 0;
`;

export const SearchIconButton = styled(SearchIcon)`
  background-color: #febd68;
`;
