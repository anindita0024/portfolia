import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
width: ${(props) => props.type !== "sm" && "393px"};
margin-bottom: ${(props) => props.type === "sm" ? "10px" : "45px"};
cursor: pointer;
display: ${(props) => props.type === "sm" && "flex"};
gap:10px;
`
const Image = styled.img`
width: 100%;
height: ${(props) => props.type === "sm" ? "110px" : "189px"};
background-color: #999;
flex:1
`

const Details = styled.div`
display: flex;
margin-top: ${(props) => props.type !== "sm" && "16px"};
gap:5px;
flex:1;
`
const ChannelImage = styled.img`
width: 36px;
height: 36px;
border-radius: 50%;
background-color: #999;
display : ${(props) => props.type === "sm" && "none"}
`
const Texts = styled.div`

`
const Title = styled.h2`
font-size: 16px;
font-weight: 500;
color: ${({theme}) => theme.text};
`
const ChannelName = styled.h4`
font-size:12px;
color: ${({theme}) => theme.text};
margin: 7px 0;

`
const Info = styled.div`
font-size:13px;
color:${({theme}) => theme.textSoft};
`






const Card = ({type}) => {
  return (
    <Link to = "/video/test" style={{textDecoration: "none"}}>
    <Container type = {type}>
        <Image type = {type} src="https://images.pexels.com/photos/11843489/pexels-photo-11843489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Details type = {type}>
            <ChannelImage type = {type} src='https://images.pexels.com/photos/12227831/pexels-photo-12227831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <Texts>
                <Title>Test Video</Title>
                <ChannelName>Wild Photography</ChannelName>
                <Info>60,000 views- 1 day ago</Info>
            </Texts>
        </Details>
    </Container>
    </Link>
  )
}

export default Card