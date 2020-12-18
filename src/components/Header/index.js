import React from "react";
import styled from "styled-components";

import linkedinLogo from "../../assets/icons/linkedinLogo.png";
import me from "../../assets/images/me.jpg";

import SearchIcon from "@material-ui/icons/SearchOutlined";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 0.1px solid lightgray;
  background-color: white;
  padding: 1rem 0rem;
  width: 100%;
  z-index: 999;
`;

const HeaderLogo = styled.img`
  height: 4rem;
  object-fit: contain;
`;

const HeaderLeft = styled.div`
  display: flex;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderSearchDiv = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  height: 2.2.rem;
  color: gray;
  background-color: #e3f3f8;
`;

const StyledSearchIcon = styled(SearchIcon)`
  && {
    font-size: 2rem;
  }
`;

const HeaderSearchbar = styled.input`
  border: none;
  outline: none;
  background: none;
`;

const HeaderOptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
  color: gray;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

const HeaderOptionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  white-space: nowrap;
`;

const StyledHomeIcon = styled(HomeIcon)`
  && {
    object-fit: contain;
    height: 2.5rem;
    width: 2.5rem;
  }
`;

const StyledSupervisorAccountIcon = styled(SupervisorAccountIcon)`
  && {
    object-fit: contain;
    height: 2.5rem;
    width: 2.5rem;
  }
`;

const StyledBusinessCenterIcon = styled(BusinessCenterIcon)`
  && {
    object-fit: contain;
    height: 2.5rem;
    width: 2.5rem;
  }
`;

const StyledChatIcon = styled(ChatIcon)`
  && {
    object-fit: contain;
    height: 2.5rem;
    width: 2.5rem;
  }
`;

const StyledNotificationIcon = styled(NotificationsIcon)`
  && {
    object-fit: contain;
    height: 2.5rem;
    width: 2.5rem;
  }
`;

const AvatarImage = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 30rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderLogo src={linkedinLogo} />
        <HeaderSearchDiv>
          <StyledSearchIcon />
          <HeaderSearchbar type="text" placeholder="Search" />
        </HeaderSearchDiv>
      </HeaderLeft>

      <HeaderRight>
        <HeaderOptionDiv>
          <StyledHomeIcon />
          <HeaderOptionTitle>Home</HeaderOptionTitle>
        </HeaderOptionDiv>

        <HeaderOptionDiv>
          <StyledSupervisorAccountIcon />
          <HeaderOptionTitle>My Network</HeaderOptionTitle>
        </HeaderOptionDiv>

        <HeaderOptionDiv>
          <StyledBusinessCenterIcon />
          <HeaderOptionTitle>Jobs</HeaderOptionTitle>
        </HeaderOptionDiv>

        <HeaderOptionDiv>
          <StyledChatIcon />
          <HeaderOptionTitle>Messaging</HeaderOptionTitle>
        </HeaderOptionDiv>

        <HeaderOptionDiv>
          <StyledNotificationIcon />
          <HeaderOptionTitle>Notificaitons</HeaderOptionTitle>
        </HeaderOptionDiv>

        <HeaderOptionDiv>
          <AvatarImage src={me} alt="avatar" />
          <HeaderOptionTitle>Me</HeaderOptionTitle>
        </HeaderOptionDiv>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
