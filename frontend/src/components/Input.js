import styled from "styled-components";

export const Input = styled.input`
  border: none;
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(28, 184, 156, 0.20);
  border-radius: 15px;
  width: 90%;
  padding: 10px;
  font-size: 16px;
  transition: 0.3s;
  margin: 25px 0;

  &:focus {
    outline: none;
    box-shadow: 0px 4px 30px rgba(28, 184, 156, 0.20);
  }
`;
