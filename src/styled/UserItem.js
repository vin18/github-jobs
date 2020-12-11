import styled from 'styled-components';

export const StyledUserItem = styled.div``;

export const StyledCard = styled.div`
  background-color: ${(props) => props.theme.colors.blueDark};
  margin-bottom: 2rem;
  padding: 3rem;
  min-height: 26rem;
  border-radius: 0.5rem;
  box-shadow: ${(props) => props.theme.colors.boxShadowDark};
  position: relative;
`;

export const StyledWrapper = styled.div`
  margin-top: 2rem;
`;

export const StyledPosted = styled.span`
  color: ${(props) => props.theme.colors.gray};
  font-size: 1.8rem;
  margin-right: 4rem;
`;

export const StyledJobType = styled.span`
  color: ${(props) => props.theme.colors.gray};
  font-size: 1.8rem;
`;

export const StyledJobTitle = styled.h2`
  margin-top: 2rem;
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const StyledCompany = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-size: 1.8rem;
  margin-bottom: 4rem;
`;

export const StyledJobLocation = styled.p`
  color: ${(props) => props.theme.colors.violet};
  font-weight: 600;
`;

export const StyledDetailsButton = styled.a`
  color: ${(props) => props.theme.colors.violet};
  text-decoration: none;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition: all 0.3s;

  &:hover {
    background-color: #fff;
  }

  i {
    font-size: 1.8rem;
  }
`;
