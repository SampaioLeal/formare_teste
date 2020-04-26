import styled, { css } from "styled-components";

export const Button = styled.button`
  background: linear-gradient(180deg, #15b195 0%, #2bc7ab 100%);
  border-radius: 15px;
  padding: 10px 0;
  width: 150px;

  border: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-left: 10px;

  cursor: pointer;

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.circle &&
    css`
      width: 40px;
      height: 40px;
      border-radius: 50%;
    `}
`;

export const LogoutButton = styled.button`
  width: 90%;
  padding: 10px;
  border: none;
  background: linear-gradient(180deg, #c81111 0%, #e62525 100%);
  border-radius: 15px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
