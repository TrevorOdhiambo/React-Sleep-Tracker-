import React,{useState} from 'react'
import styled from 'styled-components'
import Logo from '../logo/Logo'
import NavList from './NavList'
import Accounts from './Accounts'


const NavbarContainer = styled.div`
width:100%;
height:80px;
display:flex;
align-items:center;
justify-content:space-between;
box-shadow:0px 1px 3px rgba(15,15,15,0.19);
`;

const LeftSection = styled.div`
display:flex;

`;
const MiddleSection = styled.div`
display:flex;

@media screen and (max-width:768px){
  overflow:hidden;
  flex-direction:column;
  position:fixed;
  top:80px;
  left:0;

  max-height : ${({isOpen})=>(isOpen ? "100vh" : "0")};
  transition:max-height 0.3s ease-in;
  width:100%;

}
`;
const RightSection = styled.div`
display:flex;

@media screen and (max-width:768px){
  overflow:hidden;
  flex-direction:column;
  position:fixed;
  top:80px;
  left:0;

  max-height : ${({isOpen})=>(isOpen ? "100vh" : "0")};
  transition:max-height 0.3s ease-in;
  width:100%;

}
`;
const Hamburger = styled.div`
  display;none;
  flex-direction:column;
  margin-right:40px;
  cursor:pointer;

  span{

    height:5px;
    width:25px;
    background:teal;
    margin-bottom:4px;
    border-radius:10px;
  }

  @media screen and (max-width:768px){
    display:flex;
  }
`;

const Navbar = (props)=>{
 
  return(
      <NavbarContainer>
        <LeftSection>
          <Logo/>
        </LeftSection>
        
        <MiddleSection >
         <NavList />
        </MiddleSection>
        <Hamburger >
          <span />
          <span />
          <span />
        </Hamburger>
      </NavbarContainer>
  )
}

export default Navbar
