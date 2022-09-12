import React from 'react'
import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkScroll} from 'react-scroll'


const Sidebar = ({isOpen,toggle}) => {
  return (
    
    <SideContainer isOpen={isOpen} onClick={toggle}>
      
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        

    <Menu>
   
                    <NavLinks to='home' 
                    onClick={toggle}  
                    activeClass="active"
                    spy={true}
                    smooth={true} 
                    offset={-80} duration={500}>Home</NavLinks>
                    <NavLinks 
                    to='languages' 
                    onClick={toggle}
                     activeClass="active"
                     spy={true}
                     smooth={true} 
                     offset={-80} duration={500}>Languages</NavLinks>
                    <NavLinks to='portfolio'
                    onClick={toggle}
                    activeClass="active"
                    spy={true}
                    smooth={true} 
                    offset={-50} duration={500}>Portfolio</NavLinks>
                    <NavLinks to='contact' onClick={toggle}>Contact</NavLinks>
              </Menu>
              

   
    </SideContainer>
  )
}



const SideContainer=styled.div`
    position:fixed;
    z-index: 10001; 
    width:100% ;
    height: 100%;
    background:#36494eff;
    display: grid;
    align-items: center;
    top:0;
    left:0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen})=>(isOpen ?'100%':'0')};
    top:${({isOpen})=>(isOpen ?'0':'-100%')};
   
    
`

const CloseIcon =styled(FaTimes)`
    color:#a9cef4ff;
`

const Icon = styled.div`
    position:absolute;
    top:1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    
    
    `
const Menu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5,80px);
  text-align: center;

  @media screen and (max-width:480px){
    grid-template-rows: repeat(5,60px);
    
  }

`

const NavLinks = styled(LinkScroll)`
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;


    &:hover{
        color:#0a0e0f;
        transition: 0.2s ease-in-out;
    }
`
export default Sidebar


