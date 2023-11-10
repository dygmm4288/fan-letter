import styled from "styled-components";

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
      {member}
    </StyledNavListItem>
  );
}

const StyledHeader = styled.header``;
const StyledNavList = styled.ul``;
const StyledNavListItem = styled.li``;
