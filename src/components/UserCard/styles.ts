import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  padding: 40px 20px;
  border: 1px solid black;
  background: white;

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
