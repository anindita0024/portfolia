import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
display: flex;
gap:10px;
margin: 25px 35px;
`
const Avatar = styled.img`
width: 50px;
height: 40px;
border-radius: 100%;
`
const Details = styled.div`
display:flex;
flex-direction: column;
gap:10px;
color: ${({ theme }) => theme.text};
`
const Name = styled.span`
font-size: 13px;
font-weight: 500;
color: ${({ theme }) => theme.text};
`
const Date = styled.span`
font-size: 11px;
font-weight: 300;
color: ${({ theme }) => theme.textSoft};
margin-left: 5px;
`
const Text = styled.span`
font-size: 14px;
`

const Comment = () => {
    return (
        <Container>
            <Avatar src="https://images.pexels.com/photos/7126017/pexels-photo-7126017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Details>
                <Name>
                    Jhon Deilo <Date>2 days ago</Date>
                </Name>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ullam provident debitis soluta eligendi quos. Dolorem unde vitae harum delectus!

                </Text>
            </Details>
        </Container>
    )
}

export default Comment
