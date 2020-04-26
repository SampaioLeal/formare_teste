import styled, { css } from "styled-components";

export const UsersList = styled.div`
  border-right: 1px solid #d6d6d6;
  width: 200px;
  margin-top: 20px;
`;

export const User = styled.div`
  height: 60px;
  width: 90%;
  display: flex;
  align-items: center;

  border-bottom: 1px solid #d6d6d6;

  button {
    margin-right: 10px;
    width: 30px;
    height: 30px;
    padding: 0;
  }

  p{
    color: #5a5a5a;
  }

  ${(props) =>
    props.logged &&
    css`
      font-weight: bold;
      p {
        color: black;
        text-shadow: 0px 0px 10px rgba(24, 180, 152, 0.4);
      }
    `}
`;
