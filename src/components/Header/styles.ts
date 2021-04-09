import styled from "styled-components";
import { BsCaretDownFill } from "react-icons/bs";

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
    width: 60%;
    margin-left: 20px;

    img:first-child {
      width: 40px;
      height: 20px;
    }

    img {
      width: 20px;
      height: 20px;
      cursor: pointer;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
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
    position: relative;
    z-index: 44444;
    display: flex;
    align-items: center;

    padding-left: 85px;

    .avatar {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: var(--gray-light);
      margin: 0 10px;
    }

    span {
      color: var(--gray-light);
      font-size: 11px;
      transition: filter 0.2s;
      cursor: pointer;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;

export const Navigation = styled.nav`
  width: 80%;
  position: relative;
  z-index: 1111111;
  margin-left: -60px;

  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;

    li {
      a {
        padding: 0px 10px;
        color: var(--gray-light);
        font-size: 11px;
        font-family: "Montserrat";
        transition: filter 0.2s;
        cursor: pointer;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }
`;

export const ListIcon = styled(BsCaretDownFill)`
  width: 12px;
  height: 12px;
  color: white;
  margin-left: 10px;
`;
