import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const NavigBar = styled.nav`
  padding: 20px;
  border-bottom: 2px ;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;
export const StyledLink = styled(NavLink)`
  color: white;
  font-size: 30px;
  text-decoration: none;
  padding: 15px 40px;
  font: 14px "Rubik", sans-serif;
  text-decoration: none;
  font-weight:700;
  background:rgba(0, 0, 0, 0.1);
  background-size: 300%;
  display: inline-block;
  color: #f44ea4;
  border-radius: 5px;
  border: 1px solid #f44ea4;
  position: relative;
  cursor: pointer;
  /*animation: glowing 8s linear infinite;*/
  text-transform: uppercase;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  letter-spacing: 1px;
  &:after {
    content: " ";
    position: absolute;
    border-radius: inherit;
    left: -6px;
    right: -6px;
    bottom: -6px;
    top: -6px;
    background: inherit;
    background-size: inherit;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.5s ease;
    filter: blur(16px);
    animation: glowing 7s linear infinite;
    transform: translateZ(0);
  }
  &:hover {
   
  background: 
    linear-gradient(80deg, 
      #e662e6, 
      #d1016c, 
      #d70b25, 
      #e662e6);
  background-size: 300%;
  border:none;
  color: #fff;
  
  /*animation: glowing 8s linear infinite;*/
  
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  
    &:after {
      opacity: 1;
    }
  }


@keyframes glowing {
  100% {
    background-position: -400%;
  }
}
`;