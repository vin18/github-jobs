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
} from '../styled/UserItem';

const UserItem = ({ user }) => {
  return (
    <StyledCard>
      <StyledWrapper>
        <StyledPosted>5h ago</StyledPosted>
        <StyledJobType>Full Time</StyledJobType>
      </StyledWrapper>

      <StyledJobTitle>Senior Software Engineer</StyledJobTitle>

      <StyledCompany>So Digital Inc</StyledCompany>

      <StyledJobLocation>
        Remote, Seoul, Tokyo, Mountain View, San Fransisco
      </StyledJobLocation>

      <StyledDetailsButton href='#'>
        <i class='fas fa-info-circle'></i> View Details
      </StyledDetailsButton>
    </StyledCard>
  );
};

export default UserItem;
