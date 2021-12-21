import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
  display:flex;
  margin-right:20px;
`;

const LoginButton = styled.button`
    padding:0.6em 1em;
    border-radius:20px;
    margin-right:7px;
    background:teal;
    color:#FFF;
    font-weight:500;
    font-size:0.9rem;
    outline:0;
    border:0;

    &:hover{
      cursor:pointer;
      background:white;
      border:1px solid teal;
      color:teal;
    }
`;

const SignupButton = styled.button`
padding:0.6em 1em;
border-radius:20px;
background:white;
border:1px solid teal;
color:teal;
font-weight:500;
font-size:0.9rem;
outline:0;


&:hover{
  cursor:pointer;
  background:teal;
  color:white;
}
`;

const Accounts = (props)=>{
  return(
    <ButtonWrapper>
      <LoginButton>Login</LoginButton>
      <SignupButton>Signup</SignupButton>
    </ButtonWrapper>
  )

}

export default Accounts