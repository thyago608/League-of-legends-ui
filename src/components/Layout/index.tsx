import { Container } from "./styles";
import { Header } from "../Header";
import { Dashboard } from "../Dashboard";
import { Footer } from "../Footer";

export function Layout() {
  return (
    <Container>
      <Header />
      <Dashboard />
      <Footer />
    </Container>
  );
}
