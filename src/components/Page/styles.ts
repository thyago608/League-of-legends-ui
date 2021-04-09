import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: var(--black);

  > div:nth-child(1) {
    width: 60rem;
    height: 60rem;

    border-radius: 50%;
    background: var(--blue);

    position: fixed;
    top: -20rem;
    left: -15rem;

    @media (min-width: 1081px) {
      & {
        width: 62rem;
        height: 62rem;
        top: -22rem;
        left: -16rem;
      }
    }
  }

  > div:nth-child(2) {
    width: 1.5rem;
    height: 1.5rem;

    background: var(--blue);
    border-radius: 50%;

    position: fixed;
    top: 0.5rem;
    right: 13rem;
  }

  > div:nth-child(3) {
    width: 9rem;
    height: 9rem;

    border-radius: 50%;
    background: var(--gray-light);

    position: fixed;
    top: 2.5rem;
    right: 7rem;
  }
  > div:nth-child(4) {
    width: 3.5rem;
    height: 3.5rem;

    border-radius: 50%;
    background: #505155;

    position: fixed;
    top: 14.8rem;
    right: 4rem;
  }

  > div:nth-child(5) {
    width: 3rem;
    height: 3rem;

    background: #505155;
    border-radius: 50%;

    position: fixed;
    bottom: 5rem;
    left: 5rem;

    @media (min-width: 1081px) {
      & {
        bottom: 3rem;
        left: 8rem;
      }
    }
  }
  > div:nth-child(6) {
    width: 15rem;
    height: 15rem;

    border-radius: 50%;
    background: white;

    position: fixed;
    left: 15rem;
    bottom: -10rem;

    @media (min-width: 1081px) {
      & {
        bottom: -11rem;
      }
    }
  }
  > div:nth-child(7) {
    width: 30rem;
    height: 30rem;

    border-radius: 50%;
    background: var(--gray-dark);

    position: fixed;
    bottom: -15rem;
    right: -12rem;
  }
`;
