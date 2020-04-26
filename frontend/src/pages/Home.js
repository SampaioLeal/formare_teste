import React, { useEffect, useState, useRef } from "react";
import { Container } from "../components/Container";
import {
  ChatBox,
  Chat,
  SendArea,
  Messages,
  Message,
} from "../components/ChatBox";
import { UsersList, User } from "../components/UsersList";
import { Input } from "../components/Input";
import { Button, LogoutButton } from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { observer } from "mobx-react";

function Home({ store }) {
  const [message, setMessage] = useState("");
  const chatbox = useRef(null);
  function sendMessage() {
    if (message !== "") {
      store.sendMessage(message);
      setMessage("");
    }
  }

  useEffect(() => {
    store.connect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    chatbox.current.scrollIntoView();
  }, [store.messages]);

  return (
    <Container>
      <ChatBox>
        <UsersList>
          {store.users &&
            store.users.map((user, i) => {
              const logged = store.user === user;

              return (
                <User logged={logged} key={i}>
                  <Button circle>
                    <FontAwesomeIcon icon={faUser} />
                  </Button>
                  <p>{user}</p>
                </User>
              );
            })}
          <LogoutButton onClick={store.logout}>Sair</LogoutButton>
        </UsersList>
        <Chat>
          <Messages>
            {store.messages &&
              store.messages.map((message, i) => {
                const author = store.user === message.author;
                const date = new Date(message.createdAt);
                const hour = store.getHour(date);
                const day = store.getDay(date);
                return (
                  <Message key={i} sent={author}>
                    <b>
                      {day} - {message.author} - {hour}
                    </b>
                    <p>=> {message.content}</p>
                  </Message>
                );
              })}
            <div ref={chatbox} />
          </Messages>
          <SendArea>
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button onClick={sendMessage} circle>
              <FontAwesomeIcon icon={faTelegramPlane} />
            </Button>
          </SendArea>
        </Chat>
      </ChatBox>
    </Container>
  );
}

export default observer(Home);
