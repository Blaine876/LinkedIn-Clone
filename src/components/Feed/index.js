import React, { useState } from "react";
import styled from "styled-components";

import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import PhotoIcon from "@material-ui/icons/Photo";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";

import Post from "../Post";

const FeedContainer = styled.div`
  flex: 0.6;
  margin: 0 2rem;
`;

const FeedInputContainer = styled.div`
  background-color: white;
  padding: 1rem;
  padding-bottom: 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
`;

const FeedInputDiv = styled.div`
  display: flex;
  border: 1px solid lightgray;
  border-radius: 3rem;
  padding: 1rem;
  color: gray;
  padding-left: 1.5rem;
`;

const FeedForm = styled.form`
  display: flex;
  width: 100%;
`;

const InputField = styled.input`
  border: none;
  flex: 1;
  margin-left: 1rem;
  outline-width: 0;
  font-weight: 600;
`;

const FormButton = styled.button`
  display: none;
`;

const FeedInputOptions = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const FeedInputOption = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  color: gray;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    background-color: whitesmoke;
    border-radius: 1rem;
  }
`;

const FeedOptionTitle = styled.h4`
  margin-left: 0.5rem;
`;

const StyledPhotoIcon = styled(PhotoIcon)`
  && {
    color: #70b5f9;
  }
`;
const StyledSubscriptionsIcon = styled(SubscriptionsIcon)`
  && {
    color: #e7a33e;
  }
`;
const StyledCalendarViewDayIcon = styled(CalendarViewDayIcon)`
  && {
    color: #f77b79;
  }
`;
const StyledEventNoteIcon = styled(EventNoteIcon)`
  && {
    color: #c0cbcd;
  }
`;

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const submitPost = (e) => {
    e.preventDefault();
  };

  return (
    <FeedContainer>
      <FeedInputContainer>
        <FeedInputDiv>
          <CreateIcon />
          <FeedForm>
            <InputField type="text" />
            <FormButton onClick={submitPost} type="submit">
              Send
            </FormButton>
          </FeedForm>
        </FeedInputDiv>

        <FeedInputOptions>
          <FeedInputOption>
            <StyledPhotoIcon />
            <FeedOptionTitle>Photo</FeedOptionTitle>
          </FeedInputOption>
          <FeedInputOption>
            <StyledSubscriptionsIcon />
            <FeedOptionTitle>Video</FeedOptionTitle>
          </FeedInputOption>
          <FeedInputOption>
            <StyledEventNoteIcon />
            <FeedOptionTitle>Event</FeedOptionTitle>
          </FeedInputOption>
          <FeedInputOption>
            <StyledCalendarViewDayIcon />
            <FeedOptionTitle>Write article</FeedOptionTitle>
          </FeedInputOption>
        </FeedInputOptions>
      </FeedInputContainer>

      {posts.map((post) => (
        <Post />
      ))}

      <Post
        name="Blaine Oakley"
        description="Test description"
        message="Wow this worked"
      />
    </FeedContainer>
  );
};

export default Feed;
