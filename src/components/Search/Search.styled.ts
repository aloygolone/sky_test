import styled from "styled-components";

export const SearchContainter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SearchInput = styled.input`
  padding: 5px;
  font-size: 16px;
  width: 568px;
  font-family: "Roboto";
  border: 1px solid #adff2f;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #006400;
    box-shadow: 0 0 5px #7fff00;
  }
`;

export const Text = styled.div``;

export const ResultBlock = styled.div`
  font-family: "Roboto";
  font-size: 14px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

export const ResultPerPage = styled.div<PrePageBlockProps>`
  cursor: pointer;
  text-decoration: ${(props) =>
    props.$isselected === "true" ? "underline" : "none"};
  color: ${(props) => (props.$isselected === "true" ? "#2491D2" : "black")};
`;
type PrePageBlockProps = {
  $isselected: string;
};

export const PrePageBlock = styled.span`
  display: flex;
  gap: 10px;
`;
