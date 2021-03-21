import styled from "styled-components";

export const Container = styled.header`
  background: #111111;
  height: 60px;
  border-radius: 10px 10px 0 0;

  display: grid;
  grid-template-columns: 1fr 6fr 1fr;

  .container-logos {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img:first-child {
      width: 50px;
      height: 25px;
    }

    img {
      width: 25px;
      height: 25px;
    }
  }
  .container-avatar {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .avatar {
      width: 30px;
      height: 30px;

      border-radius: 50%;
      background: #505155;
    }
    span {
      color: var(--gray-light);
    }
  }

  .white-bar {
    width: 100%;
    height: 100px;
    background: var(--gray-light);
  }
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;

    li {
      a {
        padding: 0px 10px;
        color: var(--gray-light);
        font-size: 15px;
        font-family: "Montserrat";
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }
`;
