import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --blue: #535AFF;
    --gray-light: #EFEFEF;
    --gray-dark:#292C31;
    --black:#1F2326;

    /* Se o font-size estiver em 16px, o tamanho de fonte será 10px  */
  
  }

  html{
    @media(max-width: 1080px){
        font-size: 93.75%;  
    }
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
