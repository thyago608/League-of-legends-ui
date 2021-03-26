import styled from "styled-components";

export const Container = styled.footer`
  position: relative;
  .white-bar {
    background: white;
    height: 60px;
  }

  .container-user {
    position: absolute;
    top: -60px;
    left: -30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    border: 1px solid white;
  }
`;
