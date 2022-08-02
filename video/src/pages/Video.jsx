import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import Comments from "../components/Comments";
import Card from '../components/Card';

const Container = styled.div`
  display: flex;
  gap: 23px;
`;
const Content = styled.div`
  flex: 5;
`;

const VideoWarraper = styled.div``;
const Title = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-top: 18px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 15px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
  margin: 12px 0px;
`;
const Recomandation = styled.div`
  flex: 2;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
display: flex;
gap: 18px;
`;
const Image = styled.img`
width: 50px;
height: 50px;
border-radius: 100%;

`;
const ChannelDetails = styled.div`
display:flex;
flex-direction:column;
color:  ${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
font-weight:500
`;
const ChannelCounter = styled.span`
margin-top:4px;
margin-bottom: 18px;
font-size:10.8px;
color: ${({ theme }) => theme.textSoft};
`;
const Describtion = styled.p`
font-size: 12px;
`;
const Subscribe = styled.button`
background-color: dodgerBlue;
font-weight: bold;
color:white;
border: none;
border-radius:3px;
height: max-content;
cursor: pointer;
padding: 10px 20px;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWarraper>
          <iframe
            width="100%"
            height="720"
            src="https://player.vimeo.com/external/498079075.sd.mp4?s=c47dadcc1a7fceebed979d2acbea922959b60e0b&profile_id=165&oauth2_token_id=57447761"
            title="youtube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWarraper>
        <Title>Test video</Title>
        <Details>
          <Info>2,002,006 views Premiered Jul 6, 2022 </Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon />
              1.5k
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon />
              Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon />
              Share
            </Button>
            <Button>
              <LibraryAddOutlinedIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />

        <Channel>
          <ChannelInfo>
            <Image src="https://images.pexels.com/photos/12319685/pexels-photo-12319685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <ChannelDetails>
              <ChannelName>Creative World</ChannelName>
              <ChannelCounter>30k followers</ChannelCounter>
              <Describtion>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                rerum molestiae quae officiis minima necessitatibus consectetur
                maxime ipsum corporis atque!
              </Describtion>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe>+Follow</Subscribe>
        </Channel>
        <Hr />
        <Comments/>
      </Content>
      <Recomandation>
        <Card type= "sm"/>
        <Card type= "sm"/>
        <Card type= "sm"/>
        <Card type= "sm"/>
        <Card type= "sm"/>
        <Card type= "sm"/>
        <Card type= "sm"/>
        <Card type= "sm"/>
      </Recomandation>
    </Container>
  );
};

export default Video;
