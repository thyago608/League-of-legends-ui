import { UserCard } from "../UserCard";
import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <div className="container-user">
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </Container>
  );
}
