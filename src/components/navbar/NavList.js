import React from 'react'
import styled from 'styled-components'

const NavlinkSection = styled.div`
  height:100%;
  display:flex;
  align-items:center;
`;

const NavlinkWrapper = styled.ul`
  height:100%;
  display:flex;
  list-style:none;

  // @media screen and (max-width:768px){
  //   overflow:hidden;
  //   flex-direction:column;
  //   position:fixed;
  //   top:80px;
  //   left:0;
  //   width:100%;
  
  // }


`;

const NavlinkItem = styled.li`
  cursor:pointer;
  font-size:1.2rem;
  padding:20px;
  border-top:2px solid transparent;
  transition:all 220ms ease-in-out;

  &:hover{
    border-top:2px solid teal;
  }

`;

const ItemLink = styled.a`
    text-decoration:none;
    color:#222;
`;

const NavList = (props)=>{

  return(
    <NavlinkSection>
      <NavlinkWrapper>
        <NavlinkItem>
          <ItemLink href="#">About</ItemLink>
        </NavlinkItem>
        <NavlinkItem>
          <ItemLink href="#">How it works</ItemLink>
        </NavlinkItem>
        <NavlinkItem>
          <ItemLink href="#">Press</ItemLink>
        </NavlinkItem>
        <NavlinkItem>
          <ItemLink href="#">Support</ItemLink>
        </NavlinkItem>
      </NavlinkWrapper>
    </NavlinkSection>
  )
}

export default NavList