import riotImg from "../../assets/riot.png";
import llImg from "../../assets/ll.png";
import { Container, Navigation } from "./styles";

const Nav = () => {
  return (
    <Navigation>
      <ul>
        <li>
          <a href="#">Game</a>
        </li>
        <li>
          <a href="#">Champions</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Patch Notes</a>
        </li>
        <li>
          <a href="#">Discover</a>
        </li>
        <li>
          <a href="#">Esports</a>
        </li>
        <li>
          <a href="#">Universe</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </ul>
    </Navigation>
  );
};
export function Header() {
  return (
    <Container>
      <div className="container-logos">
        <img src={riotImg} alt="riot-logo" /> |
        <img src={llImg} alt="league-of-legends-logo" />
      </div>
      <Nav />
      <div className="container-avatar">
        <div className="avatar"></div>
        <span>Unepickid</span>
      </div>
    </Container>
  );
}
