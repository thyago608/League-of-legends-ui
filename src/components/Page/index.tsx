import { ReactNode } from "react";
import { Container } from "./styles";

interface PageProps {
  children: ReactNode;
}

export function Page({ children }: PageProps) {
  return (
    <Container>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className="omit1"></div>
      <div className="omit2"></div>
      {children}
    </Container>
  );
}
