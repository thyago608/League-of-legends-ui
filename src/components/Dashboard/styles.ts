import styled from "styled-components";

export const Container = styled.main`
  height: 550px;
  background: var(--blue);
  position: relative;

  .white-bar {
    background: white;
    height: 50px;
  }

  .background {
    background-image: url("https://i.ibb.co/VDKxPzS/background.png");
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
      font-size: 110px;
      text-transform: uppercase;
      font-family: "Stalinist One", cursive;
      color: white;
    }
  }

  .container-image {
    position: absolute;
    top: -185px;
    right: -80px;
    height: 100%;

    img {
      height: 1010px;
      object-fit: contain;
    }
  }

  button {
    position: absolute;
    top: 370px;
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
      top: -8px;
      left: -10px;
      border-radius: 5px 0 0 0;
      border: 1px solid black;
    }
  }
`;
