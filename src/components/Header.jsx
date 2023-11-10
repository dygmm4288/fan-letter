import { memberKoreanMap } from "App";
import styled from "styled-components";
import aespa from "../assets/img/aespa.jpg";

export default function Header({
  handleSelectMember,
  members,
  selectedMember,
}) {
  return (
    <StyledHeader>
      <h1>에스파 팬레터 콜렉션</h1>
      <nav>
        <StyledNavList>
          {members.map((member) => (
            <MemberNavItem
              key={"nav-item/" + member}
              handleSelectMember={handleSelectMember}
              member={member}
              selected={member === selectedMember}
            />
          ))}
        </StyledNavList>
      </nav>
    </StyledHeader>
  );
}

function MemberNavItem({ member, handleSelectMember, selected }) {
  return (
    <StyledNavListItem onClick={handleSelectMember(member)} selected={selected}>
      {memberKoreanMap[member]}
    </StyledNavListItem>
  );
}

const StyledHeader = styled.header`
  height: 300px;
  background: url(${aespa});

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  h1 {
    color: yellow;
    font-size: 3.5rem;
  }
  nav {
    position: absolute;
    bottom: 1rem;
  }
`;
const StyledNavList = styled.ul`
  display: flex;
  flex-direction: row;

  background-color: gray;
  border: 1px solid white;

  gap: 1.5rem;

  padding: 1rem;

  border-radius: 0.5rem;
`;
const StyledNavListItem = styled.li`
  border-radius: 0.5rem;
  padding: 0.5rem 2rem;
  background-color: black;
  color: white;
  border: 1px solid black;

  &:hover {
    background-color: yellow;
    color: black;
  }
`;
