import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  border: 1px solid black;
  background: white;
  position: relative;
  padding: 20px;
  margin-left: 50px;

  img {
    width: 85px;
    height: 85px;

    position: absolute;
    top: 10px;
    left: -20px;
  }

  .content-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 70px;

    > span {
      margin-top: 3px;
      color: gray;
      filter: brightness(140%);
    }
  }
`;
