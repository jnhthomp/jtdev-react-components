import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  margin-bottom: 7.5%;
  position: relative;
  color: ${props => props.buttonSettings.color};
  font-size: ${props => props.buttonSettings.fontSize};
  background: ${props => props.buttonSettings.colorBg};
  border: ${props => props.buttonSettings.color} .125em solid;
  border-radius: 0.25em;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  padding: .25em 1em;
  
  text-shadow: 
    0 0 0.125em hsl(0 0% 100% / 0.5),
    0 0 0.45em ${props => props.buttonSettings.color};

  box-shadow:
    inset 0 0 0.5em 0 ${props => props.buttonSettings.color},
    0 0 0.5em 0 ${props => props.buttonSettings.color};

  transition: background-color ${props => props.buttonSettings.transitionSpeed}ms linear;

  &:before {
    pointer-events: none;
    content: '';
    position: absolute;
    background: ${props => props.buttonSettings.color};
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;

    transform: 
      perspective(2em) 
      rotateX(40deg) 
      scale(1, 0.35);

    filter: blur(1em);
    opacity: 0.7;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 2em 0.5em ${props => props.buttonSettings.color};
    opacity: 0;
    transition: opacity ${props => props.buttonSettings.transitionSpeed}ms linear;
  }

  &:hover,
  &:focus {
    background: ${props => props.buttonSettings.color};
    color: ${props => props.buttonSettings.colorBg};
    text-shadow: none;
  }

  &:focus:before,
  &:hover:before {
    opacity: 1;
  }
  &:focus:after,
  &:hover:after {
    opacity: 1;
  }
`

const NeonButton = (props) => {
  const finalSettings = {}
  const importSettings = () => {

    finalSettings.color = props.settings.color ?
      props.settings.color :
      `hsl(317 100% 54%)`
    
    finalSettings.colorBg = props.settings.colorBg ?
      props.settings.colorBg :
      `hsl(323 21% 16%)`

    finalSettings.fontSize = props.settings.fontSize ?
      props.settings.fontSize :
      `1.5rem`
    
    finalSettings.transitionSpeed = props.settings.transitionSpeed ?
      props.settings.transitionSpeed :
      `100`
    
    finalSettings.clickAction = props.settings.clickAction ?
      props.settings.clickAction :
      () => console.log('clicked')
  }

  importSettings()
  return (
    <Button buttonSettings={finalSettings} onClick={finalSettings.clickAction}>{props.children}</Button>
  )
}

export default NeonButton

// Source: https://www.youtube.com/watch?v=6xNcXwC6ikQ