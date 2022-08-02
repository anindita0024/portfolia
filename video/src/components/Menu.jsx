import React from 'react'
import styled from 'styled-components'
import image from "../image/logo1.png"
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';

const Container = styled.div`
flex : 1;
background-color: ${({ theme }) => theme.bgLighter};
height: 121vw;
color: ${({ theme }) => theme.text};
font-size: 14px;
position: stickey;
top:0;
`
const Warraper = styled.div`
padding: 18px 26px;
`
const Logo = styled.div`
display: flex;
align-items: center;
gap:5px;
font-weight: bold;
margin-bottom:25px;
`

const Img = styled.img`
height: 30px;
`

const Item = styled.div`
display: flex;
align-items : center;
gap : 20px;
padding: 7.5px 0px;
cursor: pointer;

&:hover{
  background-color: ${({ theme }) => theme.soft};
}
`
const Hr = styled.hr`
margin: 15px 0px;
border: 0.5px solid ${({ theme }) => theme.soft};
`

const Login = styled.div`

`
const Button = styled.button`
padding:5px 15px;
background-color: transparent;
border: 1px solid #3ea6ff;
color: #3ea6ff;
border-radious: 10px;
font-weight: 500;
margin-top:10px;
cursor: pointer;
display:flex;
align-items: center;
gap:5px;
`
const Title = styled.h3`
font-size = 14px;
font-weight = 500;
color: #aaaaaa;
margin-bottom :20px;
`





const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Warraper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={image} />
            A
          </Logo>
        </Link>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreOutlinedIcon />
          Epxlore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          Subscription
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          Libray
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like , share and comment the video.
          <Link to = "signin" style = {{textDecoration : "none"}}>
            <Button><AccountCircleOutlinedIcon />SIGN IN</Button>
          </Link>

        </Login>
        <Hr />
        <Title>Best video ever</Title>

        <Item>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <MovieFilterOutlinedIcon />
          Movies
        </Item>
        <Item>
          <NewspaperOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <OutlinedFlagIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          {/* set the porops for changeing the mode  by click function */}
          <LightModeOutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Warraper>
    </Container>
  )
}

export default Menu
