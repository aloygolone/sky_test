import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    transform: translateY(-400px);
    opacity: 0;
  }
  20% {
    transform: translateY(-100px);
    opacity: 0.2;
  }
  40% {
    transform: translateY(30px);
    opacity: 0.6;
  }
  60% {
    transform: translateY(-20px);
    opacity: 0.8;
  }
  80% {
    transform: translateY(10px);
    opacity: 0.6;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
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
  margin-bottom: 50px;
`;

export const UserElement = styled.li<{ $index: number }>`
  padding: 4px;
  border: 1px solid black;
  border-radius: 10px;
  background: #adff2f;
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-child(${($props) => $props.$index}) {
    animation: ${fadeIn} ${($props) => $props.$index * 0.1}s forwards;
  }
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
