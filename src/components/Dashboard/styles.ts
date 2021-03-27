import styled from "styled-components";

export const Container = styled.main`
  height: 600px;
  background: var(--blue);

  .white-bar {
    background: white;
    height: 60px;
  }

  .background {
    background-image: url("https://i.ibb.co/GF0N8DC/background.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: contrast(80%);
    height: 90%;
    position: relative;
  }

  .container-text {
    position: absolute;
    top: 100px;
    left: 0;

    p {
      font-size: 120px;
      letter-spacing: 10px;
      text-transform: uppercase;
      color: white;
    }
  }

  .container-image {
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100%;

    img {
      height: 1080px;
      position: absolute;
      top: -120px;
      right: -140px;
    }
  }

  button {
  }
`;
