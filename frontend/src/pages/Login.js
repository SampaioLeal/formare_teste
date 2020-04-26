import React, { useState } from "react";
import { LoginBox } from "../components/LoginBox";
import { Container } from "../components/Container";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export default function Login({ store }) {
  const [user, setUser] = useState("");
  function entrar() {
    store.setUser(user);
    window.location.reload();
  }

  return (
    <Container>
      <LoginBox>
        <h1>Logo</h1>

        <Input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Nome de usuário"
        />

        <Button onClick={entrar}>Entrar</Button>
      </LoginBox>
    </Container>
  );
}
