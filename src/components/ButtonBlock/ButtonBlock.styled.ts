import styled from "styled-components";

export const ButtonBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-family: "Roboto";
  font-size: 14px;
`;

export const InputBlock = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Input = styled.input`
  padding: 5px;
  padding-left: 10px;

  width: 60px;

  border: 1px solid #adff2f;
  border-radius: 20px;
  outline: none;

  &:focus {
    border-color: #006400;
    box-shadow: 0 0 5px #7fff00;
  }
`;

export const SortBlock = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
`;
type ButtonType = {
  $sort: string;
};
export const ButtonAscending = styled.button<ButtonType>`
  padding: 4px;
  border-radius: 5px;
  border: 1px solid #adff2f;
  background-color: ${(props) =>
    props.$sort === "ascending" ? "#BCEC30" : "none"};
`;

export const ButtonDescending = styled.button<ButtonType>`
  padding: 4px;
  border-radius: 5px;
  border: 1px solid #adff2f;
  background-color: ${(props) =>
    props.$sort === "descending" ? "#BCEC30" : "none"};
`;
