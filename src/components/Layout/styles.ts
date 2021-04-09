import styled from "styled-components";

export const Container = styled.div`
  width: 1300px;

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  @media (max-width: 1150px) {
    & {
      width: 1100px;
    }
  }
`;
