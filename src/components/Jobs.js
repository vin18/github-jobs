import React from 'react';
import { Container } from '../styled/Utils';
import UserItem from './JobItem';
import { StyledJobs } from '../styled/Jobs';

const Jobs = ({ jobs }) => {
  return (
    <Container>
      <StyledJobs>
        {jobs.map((job) => (
          <UserItem key={job.id} job={job} />
        ))}
      </StyledJobs>
    </Container>
  );
};

export default Jobs;
