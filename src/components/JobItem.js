import React from 'react';
import {
  StyledCard,
  StyledPosted,
  StyledJobType,
  StyledJobTitle,
  StyledWrapper,
  StyledCompany,
  StyledJobLocation,
  StyledDetailsButton,
} from '../styled/JobItem';

const JobItem = ({ job }) => {
  return (
    <StyledCard>
      <StyledWrapper>
        <StyledPosted>5h ago</StyledPosted>
        <StyledJobType>{job.type}</StyledJobType>
      </StyledWrapper>

      <StyledJobTitle>{job.title}</StyledJobTitle>

      <StyledCompany>{job.company}</StyledCompany>

      <StyledJobLocation>{job.location}</StyledJobLocation>

      <StyledDetailsButton href='#'>
        <i className='fas fa-info-circle'></i> View Details
      </StyledDetailsButton>
    </StyledCard>
  );
};

export default JobItem;
