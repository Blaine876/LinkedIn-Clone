import React from "react";
import styled from "styled-components";

import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const WidgetsContainer = styled.div`
  position: sticky;
  top: 8rem;
  flex: 0.2;
  background-color: white;
  border-radius: 1rem;
  border: 1px solid lightgray;
  height: fit-content;
  padding-bottom: 1rem;
`;

const WidgetsHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;
const WidgetsSubText = styled.h2`
  font-size: 1.6rem;
  font-weight: 400;
`;

const WidgetsArticle = styled.div`
  display: flex;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    background-color: whitesmoke;
  }
`;
const WidgetsArticleLeft = styled.section`
  color: #0177b7;
  margin-right: 0.5rem;
`;
const WidgetsArticleRight = styled.section`
  flex: 1;
`;
const WidgetsArticleRightHeading = styled.h4`
  font-size: 1.4rem;
  font-weight: 500;
`;
const WidgetsArticleRightSubTitle = styled.p`
  color: gray;
`;
const StyledInfoIcon = styled(InfoIcon)``;
const StyledFiberManualRecordIcon = styled(FiberManualRecordIcon)`
  && {
    color: blue;
    font-size: 1rem;
  }
`;

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <WidgetsArticle>
      <WidgetsArticleLeft>
        <StyledFiberManualRecordIcon />
      </WidgetsArticleLeft>

      <WidgetsArticleRight>
        <WidgetsArticleRightHeading>{heading}</WidgetsArticleRightHeading>
        <WidgetsArticleRightSubTitle>{subtitle}</WidgetsArticleRightSubTitle>
      </WidgetsArticleRight>
    </WidgetsArticle>
  );

  return (
    <WidgetsContainer>
      <WidgetsHeader>
        <WidgetsSubText>LinkedIn News</WidgetsSubText>
        <StyledInfoIcon />
      </WidgetsHeader>
      {newsArticle("Blaine Strikes again", "Top news - 9999 readers")}
      {newsArticle("COVID-19 Updates", "13hrs - 3400 readers")}
      {newsArticle("Tesla stock", "1d - 842 readers")}
      {newsArticle("Bitcoin Breakthrough", "1d - 809 readers")}
      {newsArticle("Hacker News", "2d - 299 readers")}
    </WidgetsContainer>
  );
};

export default Widgets;
