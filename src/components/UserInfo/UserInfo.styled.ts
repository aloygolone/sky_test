import styled, { keyframes } from "styled-components";

const typing = keyframes`
from {
  width: 0;
}
to {
    max-width: 100%;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const UserBlock = styled.div`
  display: flex;
  gap: 50px;
  padding: 10px 10px 0px 10px;
  align-items: center;
`;

export const UserPhoto = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  border: 1px solid #4b0082;
`;

export const UserInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Text = styled.div`
  font-family: "Roboto";
  position: relative;
  white-space: nowrap;

  &::after {
    content: attr(data-text);
    position: absolute;
    overflow: hidden;
    max-width: 0;
    animation: ${typing} 1s steps(20, end);
  }
`;

export const Input = styled.input`
  padding: 2px;
  padding-left: 8px;
  margin-left: 8px;
  margin-right: 4px;
  width: 40px;

  border: 1px solid black;
  border-radius: 20px;
  outline: none;

  &:focus {
    border-color: #006400;
    box-shadow: 0 0 5px #7fff00;
  }
`;

export const InteractiveText = styled.span`
  color: #4b0082;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
  position: relative;
`;

export const ReposBlock = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  animation: ${fadeIn} 1s ease-in-out 1s forwards;
`;

export const ReposText = styled.li`
  font-family: "Roboto";
  font-size: 16px;
  text-align: center;
  border: 1px solid #4b0082;
  border-radius: 10px;
  padding-left: 8px;
  padding-right: 8px;
  background-color: #ffebcd;
  cursor: pointer;
`;
