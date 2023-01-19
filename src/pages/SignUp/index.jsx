import { useState } from "react";
import { Container, Form, Background } from "./styles";

import { api } from "../../services/api";

import { Link, useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiMail, FiLock, FiUser } from "react-icons/fi";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(e) {
    if (!name || !email || !password) {
      alert("Preencha todos os campos");
      return;
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Crie sua conta</h2>

        <Input
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
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

        <Button title="Cadastrar" type="button" onClick={handleSignUp} />
        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  );
}
