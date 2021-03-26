import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  padding: 20px 20px 20px 80px;
  border: 1px solid black;
  background: white;

  position: relative;

  .content-text {
    display: flex;
    flex-direction: column;

    > span {
      margin-top: 3px;
      color: gray;
      filter: brightness(140%);
    }
  }
`;
