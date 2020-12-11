import styled from 'styled-components';

export const StyledJobs = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  gap: 2rem;

  @media (max-width: 76rem) {
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  }
`;
