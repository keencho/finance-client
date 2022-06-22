import styled from 'styled-components';
import {Navbar} from 'react-bootstrap';

export const StyledNavbar = styled(Navbar)`
  background-color: ${props => props.theme.color.headerBackgroundColor};
`

export const StyledNavbarBrand = styled(Navbar.Brand)`
  margin-right: 15px;
`

export const StyledNavLink = styled.div`
  font-size: 16px;
`

export const BtnToggleThemeMode = styled.button`
  box-sizing: border-box;
  padding: 12px;
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 46px;
  height: 46px;
`

export const ToggleThemeSun = styled.div<{ visible: boolean }>`
  width: 50%;
  height: 50%;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.6) rotate(0deg);
  transition: transform 0.3s ease-in, opacity 0.2s ease-in 0.1s;
  background: radial-gradient(circle, rgba(0, 0, 0, 0) 50%, #f0f0f0 50%);
    
  &:before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, #f0f0f0 30%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 50%, #f0f0f0 50%);
    transform: rotate(45deg);
  }

  ${props => props.visible === true && `
    pointer-events: auto;
    opacity: 1;
    transform: scale(1) rotate(180deg);
    transition: transform 0.3s ease-in, opacity 0.2s ease-in 0.1s;
  `}
`

export const ToggleThemeMoonStar = styled.div<{ small: boolean }>`
  position: absolute;
  top: 25%;
  left: 5%;
  display: block;
  width: 0;
  height: 0;
  border-right: 7px solid rgba(0, 0, 0, 0);
  border-bottom: 5px solid #f0f0f0;
  border-left: 7px solid rgba(0, 0, 0, 0);
  transform: scale(0.55) rotate(35deg);
  opacity: 0;
  transition: all 0.2s ease-in 0.4s;
    
  &:before {
    border-bottom: 5px solid #f0f0f0;
    border-left: 3px solid rgba(0, 0, 0, 0);
    border-right: 3px solid rgba(0, 0, 0, 0);
    position: absolute;
    height: 0;
    width: 0;
    top: -3px;
    left: -5px;
    display: block;
    content: '';
    transform: rotate(-35deg);
  }
  
  &:after {
    position: absolute;
    display: block;
    color: red;
    top: 0;
    left: -7px;
    width: 0;
    height: 0;
    border-right: 7px solid rgba(0, 0, 0, 0);
    border-bottom: 5px solid #f0f0f0;
    border-left: 7px solid rgba(0, 0, 0, 0);
    transform: rotate(-70deg);
    content: '';
  }
  
  ${props => props.small === true && `
    transform: scale(0.35) rotate(35deg);
    position: relative;
    top: 50%;
    left: 35%;
    opacity: 0;
    transition: all 0.2s ease-in 0.45s;
  `}
`

export const ToggleThemeMoon = styled.div<{ visible: boolean }>`
  width: 50%;
  height: 50%;
  pointer-events: none;
  position: absolute;
  left: 12.5%;
  top: 18.75%;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 50%;
  box-shadow: 9px 3px 0 0 #f0f0f0;
  opacity: 0;
  transform: scale(0.3) rotate(65deg);
  transition: transform 0.3s ease-in, opacity 0.2s ease-in 0.1s;

  ${props => props.visible === true && `
    pointer-events: auto;
    opacity: 1;
    transform: scale(1) rotate(0deg);
    transition: transform 0.3s ease-in, opacity 0.2s ease-in 0.1s;
    
    ${ToggleThemeMoonStar} {
      opacity: .7;
    }
  `}
`
