import { memo } from "react";
import styled from "styled-components";

function Avatar({ src, nickname, style }) {
  return (
    <StyledAvatarWrapper {...style}>
      <img src={src} alt={nickname + "user avatar profile"} />
    </StyledAvatarWrapper>
  );
}

export default memo(Avatar);

const StyledAvatarWrapper = styled.figure`
  width: ${(props) => (props.width ? props.width : "60px")};
  height: ${(props) => (props.height ? props.height : "60px")};
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;
