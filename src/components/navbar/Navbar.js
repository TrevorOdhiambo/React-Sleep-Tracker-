import React, { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo href="">
       Sleepy
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink onClick={() => setIsOpen(!isOpen)} href="#">About us</MenuLink>
        <MenuLink onClick={() => setIsOpen(!isOpen)} href="">How it works</MenuLink>
        <MenuLink onClick={() => setIsOpen(!isOpen)} href="">Sleeps sounds</MenuLink>
        <MenuLink onClick={() => setIsOpen(!isOpen)} href="">Sleep quiz</MenuLink>
        <LoginButton>Login</LoginButton>
        <SignupButton>Signup</SignupButton>
      </Menu>

    </Nav>
  );
};

export default Navbar;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #222;
  transition: all 0.3s ease-in;
  font-size: 1.2rem;
  &:hover {
    color:teal;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: teal;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.8rem;
  
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    background:white;
    height: ${({ isOpen }) => (isOpen ? "100vh" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 5px;
    width: 25px;
    background:teal;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

const LoginButton = styled.button`
  padding:0.6em 1.1em;
  border-radius:20px;
  background:teal;
  color:white;
  outline:0;
  border:2px solid teal;
  font-size:0.8rem;
  font-weight:500;
  margin:10px;

  &:hover{
    cursor:pointer;
    background:white;
    color:teal;
    border:2px solid teal;
  }
`;
const SignupButton = styled.button`
  padding:0.6em 1.1em;
  border-radius:20px;
  background:white;
  color:teal;
  outline:0;
  border:2px solid teal;
  font-size:0.8rem;
  font-weight:500;

  &:hover{
    cursor:pointer;
    background:teal;
    color:white;
    border:2px solid teal;
  }
`;