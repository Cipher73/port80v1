import React from 'react'
import styled from 'styled-components'
//import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

import {FaBars} from 'react-icons/fa'

const Navbar = ({toggle}) => {
    return (
       <>
       <Nav>
          <Container>
              <Logo>ANGELA</Logo>
              <MobileIcon onClick={toggle}>
                <FaBars/>
              </MobileIcon>
              <Menu>
                <NavItem>
                    <NavLinks 
                    to='home'
                    activeClass="active"
                    spy={true}
                    smooth={true} 
                    offset={-80} duration={500}
                    
                    >Home</NavLinks>
                 </NavItem>
                    <NavItem>
                    <NavLinks 
                    to='languages'
                    activeClass="active"
                    spy={true}
                    smooth={true} 
                    offset={-80} duration={500}
                    delay={1000}
                    >Languages</NavLinks>
                    </NavItem>
                    <NavItem>
                    <NavLinks 
                    to='portfolio'
                    activeClass="active"
                    spy={true}
                    smooth={true} 
                    duration={500}
                    offset={-50} 
                    >Portfolio</NavLinks>
                    </NavItem>
                    <NavItem>
                    <NavLinks 
                    to='contact'
                    activeClass="active"
                    spy={true}
                    smooth={true} 
                    offset={-60} duration={500}
                    
                    >Contact</NavLinks>
                </NavItem>
              </Menu>
          </Container>
       </Nav>
       </>
    )
  }

  const Menu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin-right: -22px;


    @media screen and (max-width:720px) {
      display: none;
      
    }
  `

  const MobileIcon=styled.div`
  display:none;
  
  @media screen and (max-width: 720px){
    display:block;
    position: absolute;
    top:0;
    right: 0;
    transform: translate(-100%,60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #a9cef4ff;

    
  }
  
  `
  const NavItem=styled.li`
    height: 80px;


  `
  const NavLinks = styled(LinkScroll)`
    color:#E6E8E6;
    display:flex;
    align-items: center;
    text-decoration: none;
    padding :0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
      border-bottom:3px solid #7ea0b7ff;
    }
  `
  
  const Container=styled.div`
    display: flex;
    justify-content: space-between;
    height:80px;
    z-index: 1;
    width:100%;
    padding: 0 24px;
    max-width: 1100px;

  `

  const Logo = styled.div `
     color:#E6E8E6;
     justify-content:flex-start;
     cursor:pointer;
     font-size:1,5rem;
     display:flex;
     align-items:center;
     margin-left:24px;
     font-weight:bold;
     text-decoration:none;

  `



  const Nav=styled.nav`
    background: #070707;
    height :80px;
    margin-top:-80px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top:0;
    z-index: 9999;

    @media screen and (max-width: 980px) {
        transition:0.8s all ease;
  
    }

  `
  
  export default Navbar