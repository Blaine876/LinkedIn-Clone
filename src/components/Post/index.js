import React, { forwardRef } from "react";
import styled from "styled-components";

import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlined from "@material-ui/icons/ShareOutlined";
import SendOutlined from "@material-ui/icons/SendOutlined";
import { Avatar } from "@material-ui/core";
import { FeedInputOption } from "../Feed";

const PostContainer = styled.div`
  background-color: white;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
`;

const PostHeader = styled.header`
  display: flex;
  margin-bottom: 1rem;
`;

const PostInfoDiv = styled.div`
  margin-left: 1rem;
`;

const PostBodyDiv = styled.div`
  overflow-wrap: anywhere;
`;

const PostNameText = styled.h2``;

const PostDescriptionText = styled.p`
  font-size: 1.2rem;
  color: gray;
`;

const PostButtonsDiv = styled.div`
  display: flex;
`;

const MessageText = styled.p``;

const StyledThumbUpAltOutlinedIcon = styled(ThumbUpAltOutlinedIcon)``;

const StyledChatOutlinedIcon = styled(ChatOutlinedIcon)``;
const StyledShareOutlinedIcon = styled(ShareOutlined)``;
const StyledSendOutlinedIcon = styled(SendOutlined)``;

const PostOptionTitle = styled.h4`
  margin-left: 0.5rem;
`;

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <PostContainer ref={ref}>
      <PostHeader>
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <PostInfoDiv>
          <PostNameText>{name}</PostNameText>
          <PostDescriptionText>{description}</PostDescriptionText>
        </PostInfoDiv>
      </PostHeader>
      <PostBodyDiv>
        <MessageText>{message}</MessageText>
      </PostBodyDiv>

      <PostButtonsDiv>
        <FeedInputOption>
          <StyledThumbUpAltOutlinedIcon />
          <PostOptionTitle>Like</PostOptionTitle>
        </FeedInputOption>

        <FeedInputOption>
          <StyledChatOutlinedIcon />
          <PostOptionTitle>Comment</PostOptionTitle>
        </FeedInputOption>

        <FeedInputOption>
          <StyledShareOutlinedIcon />
          <PostOptionTitle>Share</PostOptionTitle>
        </FeedInputOption>

        <FeedInputOption>
          <StyledSendOutlinedIcon />
          <PostOptionTitle>Send</PostOptionTitle>
        </FeedInputOption>
      </PostButtonsDiv>
    </PostContainer>
  );
});

export default Post;
