import React from "react";
import styled from "styled-components";

import { Avatar } from "@material-ui/core";
import backdrop from "../../assets/images/backdrop.jpg";

const SidebarContainer = styled.div`
  top: 8rem;
  position: sticky;
  flex: 0.2;
  border-radius: 1rem;
  text-align: center;
  height: fit-content;
`;

const SidebarTopSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgray;
  border-bottom: 0;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: white;
  padding-bottom: 1rem;
`;

const SidebarTopImage = styled.img`
  height: 6rem;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  margin-bottom: -2rem;
`;

const SidebarBottomSection = styled.section`
  text-align: left;
  padding: 1rem;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 1rem;
  margin-top: 1rem;
`;

const StyledAvatar = styled(Avatar)`
  && {
    margin-bottom: 1rem;
  }
`;

const SidebarTopTitle = styled.h2`
  font-size: 1.8rem;
`;

const SidebarTopSubTitle = styled.h4`
  color: gray;
  font-size: 1.2rem;
`;

const SidebarStatsDiv = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid lightgray;
  background-color: white;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

const SidebarStat = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SidebarStatText = styled.p`
  color: gray;
  font-size: 1.3rem;
  font-weight: 600;
`;

const SidebarStatTextNumber = styled.p`
  font-weight: 700;
  color: #0a66c2;
`;

const SidebarRecentItem = styled.div`
  display: flex;
  font-size: 1.3rem;
  color: gray;
  font-weight: bolder;

  margin-bottom: -0.5rem;
  padding: 0.5rem;
  &:hover {
    border-radius: 1rem;
    background-color: whitesmoke;
    color: black;
    cursor: pointer;
  }
`;
const SidebarSpan = styled.span`
  margin-right: 1rem;
`;

const SidebarBottomSubText = styled.h2`
  text-align: left;
  font-size: 1.2rem;
`;

const SidebarTopicText = styled.p``;

const Sidebar = () => {
  const recentItem = (topic) => (
    <SidebarRecentItem>
      <SidebarSpan>#</SidebarSpan>
      <SidebarTopicText>{topic}</SidebarTopicText>
    </SidebarRecentItem>
  );
  return (
    <SidebarContainer>
      <SidebarTopSection>
        <SidebarTopImage src={backdrop} alt="backdrop" />
        <StyledAvatar />
        <SidebarTopTitle>Blaine Oakley</SidebarTopTitle>
        <SidebarTopSubTitle>blaine.oakley@gmail.com</SidebarTopSubTitle>
      </SidebarTopSection>

      <SidebarStatsDiv>
        <SidebarStat>
          <SidebarStatText>Who viewed you</SidebarStatText>
          <SidebarStatTextNumber>1,337</SidebarStatTextNumber>
        </SidebarStat>

        <SidebarStat>
          <SidebarStatText>Views on post</SidebarStatText>
          <SidebarStatTextNumber>9,000</SidebarStatTextNumber>
        </SidebarStat>
      </SidebarStatsDiv>

      <SidebarBottomSection>
        <SidebarBottomSubText>Recent</SidebarBottomSubText>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("computerengineering")}
        {recentItem("webdev")}
        {recentItem("frontend")}
      </SidebarBottomSection>
    </SidebarContainer>
  );
};

export default Sidebar;
