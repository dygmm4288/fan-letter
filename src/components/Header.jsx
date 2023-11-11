import { SelectedMemberContext } from "App";
import { memberKoreanMap } from "lib/member";
import { useContext } from "react";
import styled from "styled-components";
import aespa from "../assets/img/aespa.jpg";

export default function Header({ handleSelectMember, members }) {
  const { selectedMember } = useContext(SelectedMemberContext);
  return (
    <StyledHeader>
      <h1>에스파 팬레터 콜렉션</h1>
      <nav>
        <StyledNavList>
          {members.map((member) => (
            <MemberNavItem
              key={"nav-item/" + member}
              handleSelectMember={handleSelectMember(member)}
              member={member}
              selected={selectedMember === member}>
              {memberKoreanMap[member]}
            </MemberNavItem>
          ))}
        </StyledNavList>
      </nav>
    </StyledHeader>
  );
}
function MemberNavItem({ handleSelectMember, selected, children }) {
  return (
    <StyledNavListItem onClick={handleSelectMember} selected={selected}>
      {children}
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
  background-color: ${(props) => (props.selected ? "yellow" : "black")};
  color: ${(props) => (props.selected ? "black" : "white")};
  border-radius: 0.5rem;
  padding: 0.5rem 2rem;
  border: 1px solid black;

  &:hover {
    background-color: yellow;
    color: black;
  }
`;
