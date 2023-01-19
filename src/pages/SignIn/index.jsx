import { useState } from "react";
import { Container, Form, Background } from "./styles";

import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiMail, FiLock } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Faça seu login</h2>

        <Input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Entrar" type="button" onClick={handleSignIn} />
        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  );
}
