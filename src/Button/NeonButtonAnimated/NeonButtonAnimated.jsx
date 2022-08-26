import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  font-family: consolas;
  background: none;
  border: none;
  cursor: pointer;

  position: relative;
  display: inline-block;
  padding: .75em 1.5em;
  color: ${props => props.buttonSettings.colorPrimary};
  text-transform: uppercase;
  letter-spacing: 4px;
  text-decoration: none;
  font-size: ${props => props.buttonSettings.fontSize};
  overflow: hidden;
  transition: ${props => props.buttonSettings.transitionSpeed * .2}s;

  &:hover{
    color:${props => props.buttonSettings.colorSecondary};
    background: ${props => props.buttonSettings.colorPrimary};
    box-shadow: 
      0 0 .5em ${props => props.buttonSettings.colorPrimary}, 
      0 0 1em ${props => props.buttonSettings.colorPrimary}, 
      0 0 2em ${props => props.buttonSettings.colorPrimary};
    transition-delay: ${props => props.buttonSettings.transitionSpeed}s;
  }

  & span {
    position: absolute;
    display: block;
  }

  & span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${props => props.buttonSettings.colorPrimary})

  }

  &:hover span:nth-child(1){
    left: 100%;
    transition: ${props => props.buttonSettings.transitionSpeed}s;
  }

  & span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, ${props => props.buttonSettings.colorPrimary});

  }

  &:hover span:nth-child(3){
    right: 100%;
    transition: ${props => props.buttonSettings.transitionSpeed}s;
    transition-delay: ${props => props.buttonSettings.transitionSpeed * .5}s;
  }

  & span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, ${props => props.buttonSettings.colorPrimary});

  }

  &:hover span:nth-child(2){
    top: 100%;
    transition: ${props => props.buttonSettings.transitionSpeed}s;
    transition-delay: ${props => props.buttonSettings.transitionSpeed * .25}s;
  }

  & span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, ${props => props.buttonSettings.colorPrimary});

  }

  &:hover span:nth-child(4){
    bottom: 100%;
    transition: ${props => props.buttonSettings.transitionSpeed}s;
    transition-delay: ${props => props.buttonSettings.transitionSpeed * .75}s;
  }
`

const NeonButtonAnimated = (props) => {
  const finalSettings = {};
  const importSettings = () =>{
    finalSettings.colorPrimary = props.settings.colorPrimary ?
      props.settings.colorPrimary :
      '#2196f3'

    finalSettings.colorSecondary = props.settings.colorSecondary ?
      props.settings.colorSecondary :
      '#255784'

    finalSettings.fontSize = props.settings.fontSize ?
      props.settings.fontSize :
      '24px'

    finalSettings.transitionSpeed = props.settings.transitionSpeed ?
      props.settings.transitionSpeed :
      1
  };

  importSettings()
  return (
    <Button buttonSettings={finalSettings}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.children}
    </Button>
  )
}

export default NeonButtonAnimated

// Source: https://www.youtube.com/watch?v=ex7jGbyFgpA&t=190s