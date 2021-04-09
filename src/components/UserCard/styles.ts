import styled, { css } from "styled-components";
import { TiSocialTwitter } from "react-icons/ti";
import { SiDiscord } from "react-icons/si";

export const Container = styled.section`
  border: solid #bdbdbd 1px;
  box-shadow: -1px 6px 6px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  background: white;
  padding: 5px 5px 10px 80px;

  position: relative;
  margin-left: 50px;

  img {
    width: 85px;
    height: 85px;

    position: absolute;
    top: 10px;
    left: -20px;
    cursor: pointer;
  }

  .container-text {
    display: flex;
    flex-direction: column;
    font-size: 14px;

    > span {
      margin-top: 3px;
      color: gray;
      filter: brightness(140%);
    }
  }
  .container-icons {
    margin-top: 10px;
  }
`;

export const ContainerIcons = styled.div``;

const iconCSS = css`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
export const TwitterIcon = styled(TiSocialTwitter)`
  ${iconCSS}
`;

export const DiscordIcon = styled(SiDiscord)`
  ${iconCSS}
  margin-left: 25px;
`;
