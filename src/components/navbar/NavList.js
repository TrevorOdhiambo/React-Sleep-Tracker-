import React from 'react'
import styled from 'styled-components'

const NavlinkSection = styled.div`
  
`;

const NavlinkWrapper = styled.ul`

`;

const NavlinkItem = styled.li`

`;

const ItemLink = styled.a`
    
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