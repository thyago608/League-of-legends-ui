import avatar01 from "../../assets/path.png";
import avatar02 from "../../assets/eternals.png";
import avatar03 from "../../assets/twitch.png";

import { UserCard } from "../UserCard";
import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <div className="container-user">
        <UserCard image={avatar01} />
        <UserCard image={avatar02} />
        <UserCard image={avatar03} />
      </div>
    </Container>
  );
}
