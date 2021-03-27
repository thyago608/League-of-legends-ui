import { DrukWide } from "../fonts/Font";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
${DrukWide}

  :root{
    --blue: #535AFF;
    --gray-light: #EFEFEF;
    --gray-dark:#292C31;
    --black:#1F2326;
  }

  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Aldrich', sans-serif;
    font-weight: 700;
  }

  ul{
    list-style:none;
  }

  a{
    text-decoration: none;
  }
`;
