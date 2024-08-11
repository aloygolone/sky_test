import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const UserBlock = styled.ul`
  max-width: 600px;
  border: 1px solid black;
  padding: 12px;
  border-radius: 20px;
  background: #ffefd5;
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
`;

export const UserElement = styled.li`
  padding: 4px;
  border: 1px solid black;
  border-radius: 10px;
  background: #adff2f;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: ${fadeIn} 1.5s forwards;
`;

export const UserText = styled.div`
  color: black;
  font-family: "Roboto";
  font-size: 20px;
`;

export const Arrow = styled.svg`
  cursor: pointer;
  height: 15px;
  width: 15px;
  position: absolute;
  right: 15px;
`;
