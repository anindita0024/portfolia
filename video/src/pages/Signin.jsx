import React from 'react'
import styled from "styled-components";

const Container = styled.div`
display:flex;
align-items: center;
flex-direction:column;
justify-content:center;
height:calc(100vh - 56px);
color: ${({ theme }) => theme.text};
`

const Warraper = styled.div`
display:flex;
align-items: center;
flex-direction:column;
background-color: ${({ theme }) => theme.bgLighter};
border:1px solid ${({ theme }) => theme.soft};
padding:20px 50px;
gap:10px;
`
const Title = styled.div`
font-size:24px;
`;
const SubTitle = styled.div`
font-size:20ox;
font-weight:300;
`;
const Input = styled.input`
border:1px solid ${({ theme }) => theme.soft};
border-radious:3px;
padding:10px;
backgroungd-color:transparent;
width:100%
`;
const Button = styled.button`
border-radious:3px;
border: none;
padding:10px 20px;
font-weight: 500;
backgroungd-color:${({ theme }) => theme.soft};
color:${({ theme }) => theme.textSoft};
cursor:pointer;
`;
const More = styled.div`
display:flex;
font-size:12px;
margin-top:10px
color:${({ theme }) => theme.textSoft};
`;
const Links = styled.div`
margin-left:40px;
`;
const Link = styled.span`
margin-left:20px;
`;

const Signin = () => {
    return (
        <Container>
            <Warraper>
                <Title>Sign IN</Title>
                <SubTitle>To Contnue with </SubTitle>
                <Input placeholder= "Username"/>
                <Input placeholder= "Password" type = "password"/>
                <Button>Sign IN</Button>
                <Title>Or</Title>
                <Input placeholder= "Username"/>
                <Input placeholder= "eamil"/>
                <Input placeholder= "Password" type = "password"/>
                <Button>Sign UP</Button>
            </Warraper>
            <More>
                English(USA)
                <Links>
                <Link>Help</Link>
                <Link>Privecy</Link>
                <Link>Trems</Link>
                </Links>

            </More>
        </Container>
    )
}

export default Signin
