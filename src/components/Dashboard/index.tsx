import woman from "../../assets/image.png";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <div className="white-bar"></div>
      <div className="background"></div>
      <div className="container-text">
        <p>404 page</p>
        <p>not found</p>
      </div>
      <div className="container-image">
        <img src={woman} alt="" />
      </div>
    </Container>
  );
}
