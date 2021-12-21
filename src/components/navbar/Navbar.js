import React from 'react'
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
`;
const RightSection = styled.div`
display:flex;

`;

const Navbar = (props)=>{
 
  return(
      <NavbarContainer>
        <LeftSection>
          <Logo/>
        </LeftSection>
        <MiddleSection>
         <NavList/>
        </MiddleSection>
        <RightSection>
         <Accounts/>
        </RightSection>
      </NavbarContainer>
  )
}

export default Navbar
