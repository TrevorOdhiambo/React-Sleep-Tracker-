import React from 'react'
import styled from 'styled-components'
import Logo from '../../logo/Logo'

const Navbar = (props)=>{

  const NavbarContainer = styled.div`
    width:100%;
    height:80px;
    display:flex;
    align-items:center;
    box-shadow:0px 1px 3px rgba(15,15,15,0.19);
  `;

  const LeftSection = styled.div`
    display:flex;
    
  `;
  const MiddleSection = styled.div`
    display:flex;
    flex:2;

  `;
  const RightSection = styled.div`
    display:flex;

  `;
  return(
      <NavbarContainer>
        <LeftSection>
          <Logo/>
        </LeftSection>
        <MiddleSection></MiddleSection>
        <RightSection></RightSection>
      </NavbarContainer>
  )
}

export default Navbar
