import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {
  StyledImg,
  StyledJob,
  StyledJobHeader,
  StyledCompany,
  StyledCompanyName,
  StyledCompanySite,
  StyledJobDescription,
  StyledJobType,
  StyledJobTitle,
  StyledJobLocation,
  StyledButton,
  Wrapper,
  StyledJobDesc,
  StyledApply,
} from '../styled/Job';
import Navbar from '../components/Navbar';
import jobData from './jobData';

const Job = () => {
  const location = useLocation();
  const jobId = location.pathname.split('/')[2];
  // const [job, setJob] = useState(jobData[0]);
  const [job, setJob] = useState({});

  const {
    company_logo,
    company,
    company_url,
    type,
    title,
    location: jobLocation,
    description,
    how_to_apply,
  } = job;

  useEffect(() => {
    async function fetchMovie() {
      const response = await axios.get(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          `https://jobs.github.com/positions/${jobId}.json`
        )}`
      );
      setJob(JSON.parse(response.data.contents));
      console.log(JSON.parse(response.data.contents));
    }

    fetchMovie();
  }, [jobId]);

  return (
    <>
      <Navbar />
      <StyledJob>
        <StyledJobHeader>
          <StyledImg src={company_logo} alt='' />

          <StyledCompany>
            <StyledCompanyName>{company}</StyledCompanyName>
          </StyledCompany>

          <StyledCompanySite href={company_url} target='_blank'>
            Company Site
          </StyledCompanySite>
        </StyledJobHeader>

        <StyledJobDescription>
          <StyledJobType>{type}</StyledJobType>
          <Wrapper>
            <div>
              <StyledJobTitle>{title}</StyledJobTitle>
              <StyledJobLocation>{jobLocation}</StyledJobLocation>
            </div>
            <div>
              <StyledButton href='#how-to-apply'>
                Apply now
              </StyledButton>
            </div>
          </Wrapper>
          <StyledJobDesc
            dangerouslySetInnerHTML={{
              __html: description || '',
            }}
          ></StyledJobDesc>
        </StyledJobDescription>

        <StyledApply>
          <h2>How to apply</h2>

          <p
            dangerouslySetInnerHTML={{
              __html: how_to_apply || '',
            }}
            id='how-to-apply'
          ></p>
        </StyledApply>
      </StyledJob>
    </>
  );
};

export default Job;
