import { avatarWoman } from "../../assets/path.png";
import { Container } from "./styles";

export function UserCard() {
  return (
    <Container>
      <div className="avatar"></div>
      <div className="content-text">
        <strong>Patch 10.3 notes - Akali skills and stats rebuild</strong>
        <span>Febrary 25, 2020</span>
      </div>
    </Container>
  );
}
