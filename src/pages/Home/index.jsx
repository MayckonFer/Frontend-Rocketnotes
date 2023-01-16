import { FiPlus } from "react-icons/fi";

import { Link } from "react-router-dom";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles.js";

import { Header } from "../../components/Header";
import { Notes } from "../../components/Notes";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" isActived />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Nodejs" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Notes
            data={{
              title: "React",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "rocketseat" },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
