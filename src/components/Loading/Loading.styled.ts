import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
`;

export const LoaderBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
`;

export const Dots = styled.div`
  width: 20px;
  height: 20px;
  background-color: #000;
  border-radius: 50%;
  margin: 0 5px;
  animation: ${bounce} 0.5s infinite alternate;

  &:nth-child(2) {
    animation-delay: 0.1s;
  }

  &:nth-child(3) {
    animation-delay: 0.2s;
  }
`;
