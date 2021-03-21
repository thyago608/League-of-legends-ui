import { Page } from "./components/Page";
import { Layout } from "./components/Layout";
import { GlobalStyle } from "./styles/GlobalStyle";

export function App() {
  return (
    <>
      <Page>
        <Layout />
      </Page>
      <GlobalStyle />
    </>
  );
}
