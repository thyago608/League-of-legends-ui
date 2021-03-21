import { Container } from "./styles";
import { Header } from "../Header";
import { Dashboard } from "../Dashboard";

export function Layout() {
  return (
    <Container>
      <Header />
      <Dashboard />
    </Container>
  );
}
