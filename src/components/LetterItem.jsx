import styled from "styled-components";

export default function LetterItem({
  handleNavigate,
  id,
  createdAt,
  nickname,
  content,
  avatar,
}) {
  return (
    <li onClick={handleNavigate(id)}>
      <StyledLetterItemWrapper>
        <StyledAvatarWrapper>
          <img src={avatar} alt={nickname + "user avatar profile"} />
        </StyledAvatarWrapper>
        <StyledLetterItemInfo>
          <span>{nickname}</span>
          <span>{createdAt}</span>
          <span>{content}</span>
        </StyledLetterItemInfo>
      </StyledLetterItemWrapper>
    </li>
  );
}

const StyledLetterItemWrapper = styled.div``;
const StyledAvatarWrapper = styled.div``;
const StyledLetterItemInfo = styled.div``;
