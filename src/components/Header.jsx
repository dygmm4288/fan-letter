import { useLetter } from "contexts/letter.context";
import { memberNameToKorean, memberNames } from "data/member";
import styled from "styled-components";
import aespa from "../assets/img/aespa.jpg";

export default function Header() {
  const { selectedMemberName, selectMember } = useLetter();
  return (
    <StyledHeader>
      <h1>에스파 팬레터 콜렉션</h1>
      <nav>
        <StyledNavList>
          {memberNames.map((memberName) => (
            <StyledNavItem
              key={memberName}
              onClick={() => selectMember(memberName)}
              selected={selectedMemberName === memberName}>
              {memberNameToKorean(memberName)}
            </StyledNavItem>
          ))}
        </StyledNavList>
      </nav>
    </StyledHeader>
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
const StyledNavItem = styled.li`
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
