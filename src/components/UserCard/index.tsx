import { Container } from "./styles";

interface UserCardProps {
  image: string;
}

export function UserCard({ image }: UserCardProps) {
  return (
    <Container>
      <img src={image} alt="" />
      <div className="content-text">
        <strong>Patch 10.3 notes - Akali skills and stats rebuild</strong>
        <span>Febrary 25, 2020</span>
      </div>
    </Container>
  );
}
