import { useRoot } from "contexts/root.context";
import { members } from "data/members";
import { Link } from "react-router-dom";
import styled from "styled-components";
import aespa from "../assets/img/aespa.jpg";

export default function Header() {
  const { selectedMemberName } = useRoot();


  return (
    <StyledHeader>
      <h1>에스파 팬레터 콜렉션</h1>
      <nav>
        <StyledNavList>
          {members.map((member) => (
            <StyledNavListItem
              key={member.name}
              selected={selectedMemberName === member.name}
            >
              <Link to={`/?memberName=${member.name}`}>{member.name}</Link>
            </StyledNavListItem>
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
const StyledNavListItem = styled.li`
  > a {
    padding: 0.5rem 2rem;
  }

  background-color: ${(props) => (props.selected ? "yellow" : "black")};
  color: ${(props) => (props.selected ? "black" : "white")};
  border-radius: 0.5rem;

  border: 1px solid black;

  &:hover {
    background-color: yellow;
    color: black;
  }
`;
