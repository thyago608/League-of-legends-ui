import styled from "styled-components";
import { DrukWide } from "../../fonts/Font";

export const Container = styled.main`
  ${DrukWide}

  height: 650px;
  background: var(--blue);
  position: relative;

  .white-bar {
    background: white;
    height: 50px;
  }

  .background {
    background-image: url("https://i.ibb.co/GF0N8DC/background.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.6;
    filter: contrast(1);
    height: 90%;
  }

  .container-text {
    position: absolute;
    top: 50px;
    left: 30px;

    p {
      font-size: 127px;
      text-transform: uppercase;
      font-family: "Stalinist One", cursive;
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
      top: -190px;
      right: -130px;
    }
  }

  button {
    position: absolute;
    top: 460px;
    left: 180px;

    padding: 15px 50px;
    font-size: 18px;
    font-family: "Montserrat";
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      filter: brightness(0.8);
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: -10px;
      left: -10px;
      border: 1px solid black;
    }
  }
`;
