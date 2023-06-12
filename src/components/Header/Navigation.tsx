import { Nav, StyledNavLink } from "./styles";

function Navigation() {
  return (
    <Nav>
      <ul>
        <li>
          <StyledNavLink to="/">홈</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/signin">로그인</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/signup">회원가입</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/todo">TODO LIST</StyledNavLink>
        </li>
      </ul>
    </Nav>
  );
}

export default Navigation;
