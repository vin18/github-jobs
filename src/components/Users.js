import React from 'react';
import { Container } from '../styled/Utils';
import UserItem from '../components/UserItem';
import { StyledUsers } from '../styled/Users';

const users = [
  {
    id: 'b1691d49-ee1d-4793-9c1d-7a10a9b8b84a',
    type: 'Full Time',
    url:
      'https://jobs.github.com/positions/b1691d49-ee1d-4793-9c1d-7a10a9b8b84a',
    created_at: 'Mon Dec 07 19:23:19 UTC 2020',
    company: 'EME Hive',
    company_url: 'http://emehive.co',
    location: 'New York City',
    title: 'Infrastructure Engineer for Social Livestreaming App',
    description:
      "<p>WHO WE ARE</p>\n<p>EME Hive is a community-based, social live streaming app for finding like-minded friends and partners. Through the power of live streaming technology, users are able to form real-time connections with members of their own communities. By offering a subscription dating service as well as a live streaming platform, EME makes it easy for users to flirt, chat, and date in real-time -- all within the same app!</p>\n<p>We are a team of innovative, and friendly individuals who are redefining the rules of connection. We believe that our dedication to live-streaming and online dating technologies will bring highly efficient and safer connections to many minority communities all over the world. We are currently looking for a strong Infrastructure Engineer to join our growing team and share in our enthusiasm for taking on today’s toughest challenges in live-streaming.</p>\n<p>WHAT YOU'LL DO</p>\n<p>-Design, build, and maintain distributed content and service systems</p>\n<p>-Research and develop content and media delivery technology, such as WebRTC, HTTP Multicast, Anycast, etc.</p>\n<p>-Develop network and service metrics-gathering solutions that inform automation and perform system monitoring/alerting to secure our services, validate network security configurations, and protect against network disruption.</p>\n<p>-System development, configuration and deployment of infrastructure atop cloud VPS or 3rd party platform, namely:</p>\n<pre><code> -Proxy Servers such as haproxy, nginx, ProxySQL\n\n -Database/Web servers such as Redis, Redis Cluster, MySQL, MySQL cluster, Rails, Go, Vapor\n\n -Services such as PubSub messaging, video recording, video transcoding, managed + distributed \n  cloud store, CDN\n\n -Supporting servers and services such as orchestrator, CircleCI, GCP, AWS, GitHub, Ansible\n</code></pre>\n<p>-Manage and work with 3rd party infrastructure-as-a-service and video software vendors.</p>\n<p>-Assist with writing formal requirements and specifications documents; building and documenting solutions.</p>\n<p>-Maintain communication of project statuses and drive continued improvement in quality and availability of each the systems and product.</p>\n<p>-Contribute to our culture of shipping greatness, quality and customer focused approach.</p>\n<p>WHAT YOU MUST HAVE</p>\n<p>-BS or MS degree in Computer Science.</p>\n<p>-2+ years of engineering experience building scalable distributed systems</p>\n<p>-Deep technical background in or strong familiarity with JavaScript, Python, HTML, CSS, and Ruby, C++, MySQL,, HTML, CSS, Cloud VPS, Linux, Redis.</p>\n<p>-Ability to learn and understand new technologies/systems quickly.</p>\n<p>-Solid software development fundamentals (data structures, algorithms, problem solving, and system architecture).</p>\n<p>-Experience integrating low-level software for purpose-built solutions.</p>\n<p>-Working knowledge of content delivery networks and data center infrastructure.</p>\n<p>-In depth knowledge of video compression, encoding, decoding, streaming, and analytics.</p>\n<p>-Experience in developing/deploying streaming infrastructure on cloud services.</p>\n<p>-Previous experience with video processing services or infrastructure such as AWS Elemental MediaConvert/MediaLive, MediaConnect, or ffmpeg in-a-box</p>\n<p>-Experience working closely across a variety of teams including product management, designers, and backend engineers.</p>\n<p>-Creative problem-solving skills while working in a fast-paced, start-up environment.</p>\n",
    how_to_apply:
      '<p>Email your resume and cover letter to <a href="mailto:recruiting@emehive.co">recruiting@emehive.co</a> (not .com!).  Looking forward to hearing from you!</p>\n',
    company_logo:
      'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbFNTIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f8a7d57b1091ad6c57a6d522d8b280372a303ce8/Screen%20Shot%202020-12-07%20at%202.22.26%20PM.png',
  },
  {
    id: '954ab75e-a886-49cd-9c75-33013e4b048d',
    type: 'Full Time',
    url:
      'https://jobs.github.com/positions/954ab75e-a886-49cd-9c75-33013e4b048d',
    created_at: 'Tue Nov 24 19:04:39 UTC 2020',
    company: '7 Chord',
    company_url: 'http://http',
    location: 'New York',
    title: 'Machine Learning Engineer - Trading',
    description:
      '<p>This is an exceptional opportunity for a high caliber MSc graduate or an experienced Machine Learning Engineer to join a successful revenue-generating capital markets tech firm with a ground-breaking predictive pricing product. You will work with some of the brightest minds in data science to find innovative solutions for storing, accessing, combining and synthesizing real-time data.</p>\n<p>About Us:\n7 Chord is an award-winning FinTech start-up in NYC. BondDroid, our proprietary AI system, empowers bond traders and investors with predictive pricing and trading signals.  The firm was founded by market veterans and renowned machine learning researchers. We are backed by strategic investors and an elite group of former Wall Street executives.</p>\n<p>Techstars Class of 2017 (1% acceptance rate)\nMarkets Choice Award for “Excellence in AI” 2019\nOn the list of “Most Innovative FinTech startups of 2019” by Harrington Starr\n2020 and 2019 Benzinga Global Fintech Awards List (“Best in AI” category)\nFinTechSandbox Alumni and Data Provider</p>\n<p>What You\'ll Do:</p>\n<ul>\n<li>Work with data scientists to design, develop, and implement scalable ML solutions.</li>\n<li>Emphasis will be on deploying real-time ML solutions in a production environment using cutting edge technologies with a focus on achieving scalable, low latency, optimized solutions.</li>\n<li>Work with data scientists to develop new techniques to deal with ML solutions built on streaming data and solve problems inherent in financial data, including low signal-to-noise ratios and non-stationarity.</li>\n</ul>\n<p>Qualifications:</p>\n<ul>\n<li>2+ years of professional experience in an enterprise-level environment.</li>\n<li>MSc in Computer Science preferred.</li>\n<li>Experience handling large volumes of real-time / streaming data, preferably in a financial domain.</li>\n<li>Python 3 and PostgreSQL experience required.</li>\n<li>Experience with scikit-learn required, bonus points for other popular ML libraries.</li>\n<li>Java and MongoDB experience preferred but not required.</li>\n<li>Familiarity with messaging technologies (RabbitMQ, Kafka or Kinesis) and distributed cloud computing.</li>\n</ul>\n<p>Comp, Benefits, Perks:</p>\n<ul>\n<li>Competitive salary. Equity. Enormous growth potential.</li>\n<li>Subsidized health insurance, transportation benefit and 401K.</li>\n<li>Continuing education stipend.</li>\n<li>Work from home in 2020 and 2021. Once and if we go back to the office, free state-of-the-art gym and wellness center on premises. Access to the open private waterfront space, half-court basketball court, outdoor terraces, training and conference facilities, cafeteria and lounge.</li>\n</ul>\n<p>Please send your resume, including your linkedin and/or github profiles to: <a href="mailto:careers@7-chord.com">careers@7-chord.com</a></p>\n',
    how_to_apply:
      '<p>Please send your resume, including your linkedin and/or github profiles to: <a href="mailto:careers@7-chord.com">careers@7-chord.com</a></p>\n',
    company_logo:
      'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ2lSIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5c099f86472dd17b69407087f86e65fc32569b00/Copy%20of%20logo-7chord_symbol_trans-02.png',
  },
  {
    id: '6b9dce23-5790-46eb-9fbe-8090704eecef',
    type: 'Full Time',
    url:
      'https://jobs.github.com/positions/6b9dce23-5790-46eb-9fbe-8090704eecef',
    created_at: 'Fri Nov 13 02:28:36 UTC 2020',
    company: 'Marble',
    company_url: 'http://marblepay.com',
    location: 'New York',
    title: 'Director, Engineering',
    description:
      "<p>Company overview:</p>\n<p>Insurance companies spend billions on marketing to find new customers, and often those costs come back to consumers in the form of higher premiums. We’re changing that.\n‍\nAt Marble, we put our members at the center of the insurance process so they can effortlessly protect the things they care about, all while earning the value they deserve. We’re laser-focused on saving insurance customers money by building a rewards-based membership program.</p>\n<p>For insurance companies, Marble is the most innovative marketing and engagement tactic since email. Using our proprietary software and structure, we partner with insurance carriers, brokers, and agents to engage their customers like never before.</p>\n<p>It’s not often that you get to say this when talking about insurance, but with Marble, everybody truly does win.</p>\n<p>Marble is backed by IA Capital, the longest tenured insurtech- and fintech-focused venture capital firm in the US with a 20 year track record of successful investments and exits.</p>\n<p>What you’ll do:</p>\n<p>Marble is looking for an Engineering Director to spearhead the development and growth of our early prototypes and products. Working with Marble’s CTO , you will lay the foundation for a best-in-class engineering team that collaborates to build delightful products, designs and implements scalable infrastructure, and encourages diversity of experience and thought. Velocity is critical to our success and you will be integral in building the team and the infrastructure that delivers this velocity.</p>\n<p>What you’ll build:</p>\n<p>As the Engineering Director, you will work directly with Marble's CTO and CEO to build, lead and scale each of our three digital products: a digital insurance wallet, the first and only rewards platform for insurance, and a B2B co-branded rewards platform for insurance carriers. You will be the lead architect and engineer for Marble's backend microservices built with Django. In addition to building Marble's backend, you will manage our offshore and internal React.js frontend teams.</p>\n<p>About you:</p>\n<ul>\n<li>You are a manager with 7+ years of technology experience, specifically with Python and preferably with Django</li>\n<li>You have experience managing and working with JavaScript, specifically React.js, teams and codebases</li>\n<li>Experience in a fast growing organization building out processes and teams</li>\n<li>Experience working with complex problems involving multiple partners</li>\n<li>You have a track record of building and motivating high performing engineering teams to continuously innovate, collaborate, and improve</li>\n<li>You have demonstrated success building highly scalable APIs, back end platforms, distributed systems, data access layers, etc.</li>\n<li>You have successfully recruited high performing individual contributors and managers</li>\n<li>You’re committed to collaboration and able to work well with other business units to build, test, and measure solutions that increase organizational velocity</li>\n<li>You’ve excelled in fast-paced, ambiguous environments, particularly by organizing yourself and others with strong and flexible frameworks and processes</li>\n</ul>\n<p>Responsibilities:</p>\n<ul>\n<li>Coordinate with Marble’s CTO to set the technical roadmap for the delivery our earliest product improvements and launches</li>\n<li>Partner on the technology budget, driving the selection of third-party technologies and assisting with contract negotiations</li>\n<li>Partner on the talent strategy and roadmap for Marble’s engineering team</li>\n<li>Vet, interview, and hire engineers and engineering managers</li>\n<li>Lead and build the back end engineering team as Marble scales nationally to &gt;1MM members</li>\n<li>Coordinate with technology leadership at the largest insurance carriers in the US and worldwide, as they integrate Marble’s technology platform</li>\n<li>Maintain and strengthen best-in-class data security and privacy practices</li>\n<li>Writing code, and lots of it. Though this is a senior position, we are a small team so we expect our early engineering hires to be in the code every day until you hire a team around you.</li>\n<li>We are an early stage company and we ask that all candidates review this job description knowing that the only thing we are certain of is: things will change, including your responsibilities. Please only apply to this role if you are comfortable with this.</li>\n</ul>\n",
    how_to_apply:
      '<p>Apply here: <a href="https://jobs.lever.co/marblepay/7d97f9f3-89fd-4c54-ba18-e96f8e733861/apply">https://jobs.lever.co/marblepay/7d97f9f3-89fd-4c54-ba18-e96f8e733861/apply</a></p>\n',
    company_logo:
      'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcGFPIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7f8f2e568ebf8434bc17b124f14852f89862d77e/logotype_dark%20google%20admin.png',
  },
];

const Users = ({ jobs }) => {
  return (
    <Container>
      <StyledUsers>
        {jobs.map((job) => (
          <UserItem key={job.id} job={job} />
        ))}
      </StyledUsers>
    </Container>
  );
};

export default Users;
