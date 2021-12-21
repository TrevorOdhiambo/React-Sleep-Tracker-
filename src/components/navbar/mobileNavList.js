import React,{useState} from 'react'
import styled from 'styled-components'
import Accounts from './Accounts'
import MenuToggle from './menuToggle'


const NavlinkSection = styled.div`
  height:100%;
  display:flex;
  align-items:center;
`;

const NavlinkWrapper = styled.ul`
  margin:0;
  padding:0;
  height:100%;
  display:flex;
  list-style:none;
  background:#fff;
  width:100%;
  flex-direction:column;
  position:fixed;
  top:65px;
  left:0;

`;

const NavlinkItem = styled.li`
  width:100%;
  display:flex;
  margin-bottom:10px;
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

const Marginer = styled.div`
  height:2em;
`;



const MobileNavList = (props)=>{
  const [isOpen,setIsOpen] = useState(false)
  return(
    <NavlinkSection>
      <MenuToggle isOpen={isOpen} toggle={()=>setIsOpen(!isOpen)}/>
      {isOpen &&(
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
        <Marginer/>
        <Accounts/>
      </NavlinkWrapper>
      )}
    </NavlinkSection>
  )
}

export default MobileNavList