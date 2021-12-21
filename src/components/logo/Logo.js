import React from 'react'
import styled from "styled-components"
const Logo = (props)=>{
  const LogoWrapper = styled.div`
    display:flex;
    align-items:center;
    margin-left:10px;

  `;
  const LogoTitle = styled.h2`
    font-size:2rem;
    font-weight:700;
    color:teal;
    margin-left:4px;
  `;
  return(
    <LogoWrapper>
      <LogoTitle>Sleepy</LogoTitle>
    </LogoWrapper>
  )
}

export default Logo