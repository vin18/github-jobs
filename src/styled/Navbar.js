import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  background-color: ${(props) => props.theme.colors.bgNavbar};
  color: ${(props) => props.theme.colors.cNavbar};
  height: 12rem;

  display: flex;
  align-items: center;

  & > h1 {
    font-size: 3rem;
    margin-left: 4rem;
  }
`;
