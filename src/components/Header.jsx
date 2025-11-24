import React from "react";
import styled from "styled-components";
import { FiPhoneCall } from "react-icons/fi";
import { IoCarSport } from "react-icons/io5";
export default function Header() {
  return (
    <Wrapper>
      <Container>
       
        <LogoArea>
            <LogoIcon>
              <IoCarSport size={40} />
            </LogoIcon>
            <LogoText>Car Rental</LogoText>
        </LogoArea>

        <Nav>
          <NavItem href="#">Home</NavItem>
          <NavItem href="#" >Vehicles</NavItem>
          <NavItem href="#">Details</NavItem>
          <NavItem href="#">About Us</NavItem>
          <NavItem href="#">Contact Us</NavItem>
        </Nav>

      
        <HelpArea>
          <IconWrap>
            <FiPhoneCall size={22} />
          </IconWrap>
          <HelpText>
            <span>Need help?</span>
            <strong></strong>
          </HelpText>
        </HelpArea>
      </Container>
    </Wrapper>
  );
}
const Wrapper = styled.header`
  width: 100%;
  background: #fff;
  
  padding: 20px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* Logo */
const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  color: #000;
  
`;

const LogoText = styled.span`
  font-size: 17px;
  font-weight: 700;
`;

/* Navigation */
const Nav = styled.nav`
  display: flex;
  gap: 50px;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  padding: 8px 6px;
  transition: color 120ms ease, opacity 120ms ease;
  cursor: pointer;

  &.active {
    font-weight: 700;
  }

  &:hover {
    color: #5c2dee;
    opacity: 0.9;
  }
`;

/* Right side help */
const HelpArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const IconWrap = styled.div`
  background: #5c2dee;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const LogoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
  color: #000;
`;

const HelpText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  font-size: 14px;

  span {
    opacity: 0.7;
  }

  strong {
    font-weight: 700;
    font-size: 15px;
  }
`;