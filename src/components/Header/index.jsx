import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <Profile to="/profile">
          <img src="https://github.com/MayckonFer.png" alt="Foto do usuário" />

          <div>
            <span>Bem-vindo</span>
            <strong>Mayckon Fernandes</strong>
          </div>
        </Profile>

        <Logout>
          <RiShutDownLine />
        </Logout>
      </Content>
    </Container>
  );
}
