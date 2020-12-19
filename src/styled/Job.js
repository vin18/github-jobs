import styled from 'styled-components';

export const StyledJob = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  position: relative;
  padding-bottom: 5rem;
`;

export const StyledJobHeader = styled.div`
  display: flex;
  align-items: center;
  min-height: 10rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.blueDark};
  transform: translateY(-4rem);
`;

export const StyledImg = styled.img`
  width: 20rem;
  height: 100%;
  border-radius: 1rem 0 0 1rem;
`;

export const StyledCompany = styled.div`
  margin-right: auto;
  width: 100%;
  margin-left: 5rem;
`;

export const StyledCompanyName = styled.h1`
  font-weight: bold;
  color: #fff;
  text-align: center;
  transform: translateX(-10rem) translateY(-2rem);
  font-size: 4.5rem;
  margin-bottom: 2rem;
`;

export const StyledCompanySite = styled.a`
  text-decoration: none;
  position: absolute;
  color: #fff;
  padding: 2rem 3rem;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.grayDark};
  opacity: 0.8;
  bottom: 3rem;
  right: 3rem;
  transform: all 300ms;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.grayDark};
    opacity: 0.9;
  }
`;

export const StyledJobDescription = styled.div`
  background-color: ${(props) => props.theme.colors.blueDark};
  border-radius: 0.5rem;
  padding: 5rem;
  margin-bottom: 5rem;
`;

export const StyledJobType = styled.p`
  color: ${(props) => props.theme.colors.grayDark};
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
`;

export const StyledJobTitle = styled.h4`
  color: ${(props) => props.theme.colors.grayLight};
  font-size: 2.75rem;
  margin-bottom: 1.5rem;
`;

export const StyledJobLocation = styled.p`
  color: ${(props) => props.theme.colors.violet};
  font-size: 2rem;
`;

export const StyledButton = styled.a`
  background-color: ${(props) => props.theme.colors.violet};
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 2rem;
  padding: 1.75rem 4rem;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  transition: all 300ms;
  text-decoration: none;

  &:hover {
    filter: brightness(125%);
  }
`;

export const StyledJobDesc = styled.article`
  font-size: 2rem;
  line-height: 1.6;

  & > p {
    margin: 2rem 0;
  }
`;

export const StyledApply = styled.div`
  background-color: ${(props) => props.theme.colors.violet};
  color: ${(props) => props.theme.colors.grayLight};
  border-radius: 0.5rem;
  padding: 5rem 4rem;

  h2 {
    margin-bottom: 2rem;
  }

  p {
    line-height: 1.6;
    font-size: 2rem;
  }

  li {
    margin-left: 4rem;
  }

  li:first-child {
    margin-top: 2rem;
  }

  a {
    color: ${(props) => props.theme.colors.gray};
  }
`;
