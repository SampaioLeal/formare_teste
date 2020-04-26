import styled, { css } from "styled-components";

export const ChatBox = styled.div`
  background-color: white;
  border-radius: 15px;
  width: 85%;
  height: 85%;

  display: flex;

  padding: 0 20px 20px 20px;

  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
`;

export const Chat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SendArea = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Messages = styled.div`
  height: 85%;
  width: 100%;
  position: relative;
  left: 20px;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
`;

export const Message = styled.div`
  background-color: #f3f3f3;
  margin: 10px 0;
  max-width: 300px;
  padding: 10px;
  border-radius: 15px;

  p {
    font-size: 16px;
    color: #525252;
  }

  b {
    color: #035a4b;
  }

  ${(props) =>
    props.sent &&
    css`
      align-self: flex-end;
      margin-right: 20px;
      background-color: #18b498;
      p,
      b {
        color: white;
      }
    `}
`;
