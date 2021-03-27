import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: var(--black);

  > div:nth-child(1) {
    width: 850px;
    height: 850px;

    border-radius: 50%;
    background: var(--blue);

    position: fixed;
    top: -200px;
    left: -70px;
  }

  > div:nth-child(2) {
    width: 15px;
    height: 15px;

    background: var(--blue);
    border-radius: 50%;

    position: fixed;
    top: 5px;
    right: 130px;
  }

  > div:nth-child(3) {
    width: 90px;
    height: 90px;

    border-radius: 50%;
    background: var(--gray-light);

    position: fixed;
    top: 25px;
    right: 70px;
  }
  > div:nth-child(4) {
    width: 35px;
    height: 35px;

    border-radius: 50%;
    background: #505155;

    position: fixed;
    top: 148px;
    right: 40px;
  }
  > div:nth-child(5) {
    width: 30px;
    height: 30px;

    background: #505155;
    border-radius: 50%;

    position: fixed;
    bottom: 50px;
    left: 50px;
  }
  > div:nth-child(6) {
    width: 150px;
    height: 150px;

    border-radius: 50%;
    background: white;

    position: fixed;
    bottom: -110px;
    left: 150px;
  }
  > div:nth-child(7) {
    width: 500px;
    height: 500px;

    border-radius: 50%;
    background: var(--gray-dark);

    position: fixed;
    bottom: -150px;
    right: -120px;
  }
`;
