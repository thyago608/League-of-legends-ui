import styled from "styled-components";

export const Container = styled.header`
  background: #111111;
  height: 60px;
  border-radius: 10px 10px 0 0;

  display: grid;
  grid-template-columns: 1fr 3fr 1fr;

  .container-logos {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    width: 70%;
    margin-left: 20px;

    img:first-child {
      width: 50px;
      height: 25px;
    }

    img {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }

    &::after {
      content: "";

      width: 2px;
      height: 30%;
      background: white;

      position: absolute;
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
        font-size: 13px;
        font-family: "Montserrat";
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }
`;
