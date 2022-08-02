import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'

const Container = styled.div``
const NewComment = styled.div`
display: flex;
align-items: center;
gap: 10px
`
const Avatar = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`
const Input = styled.input`
border: none; 
border-bottom : 1px solid ${({ theme }) => theme.soft};
background-color: transparent;
outline: none;
padding: 5px;
color: ${({ theme }) => theme.text};
width:100%;
`

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src = "https://images.pexels.com/photos/7126017/pexels-photo-7126017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Input placeholder = "Write a comment"/>
      </NewComment>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </Container>
  )
}

export default Comments