import React from 'react'
import styled, { keyframes } from 'styled-components'

const slice = (color) => keyframes`
  0%, 95%{
    border-color: ${color};
  }

  95%{
    border-color: rgba(0 0 0 /0);
    right: -10%;
    bottom: 70%;
  }
`

const slide = () => keyframes`
  to{
    left: -5px;
  }
`

const TextContainer = styled.p`
  position: relative;
  color: transparent;
  font-size: ${props => props.textSettings.fontSize};
  font-weight: ${props => props.textSettings.fontWeight};
  text-transform: uppercase;
  /* overflow: hidden; */
  white-space: nowrap;

  
  &:before{
    content: '';
    width: ${props => props.textSettings.sliceLength};
    border-top: 3px solid rgba(0 0 0 / 0);
    border-radius: 100vh;
    position: absolute;
    right: 100%;
    bottom: 25%;
    transform: rotate(-3.75deg);
    animation: ${props => slice(props.textSettings.sliceColor)} ${props => props.textSettings.sliceTime}ms forwards;
    z-index: 10;
  }
  

  & span {
    position: absolute;
    top: 0;
    left: 0;
  }

  & span:first-child{
    color: ${props => props.textSettings.color};
    clip-path: polygon(0 0, 100% 0, 100% 34%, 0 70%);
    animation: ${props => slide()} 750ms ${props => props.textSettings.sliceDelay}ms forwards;


  }

  & span:last-child{
    color: ${props => props.textSettings.color};
    clip-path: polygon(0 100%, 100% 100%, 100% 34%, 0 70%);
  }
`

const SamuraiText = (props) => {

  const finalSettings = {
    color: props.settings.color || 'black',
    fontSize: props.settings.fontSize || 'clamp(1rem, 3vw + 1rem, 4rem)',
    fontWeight: props.settings.fontSize || 700,
    sliceColor: props.settings.sliceColor || 'white',
    sliceLength: props.settings.sliceLength || '10%',
    sliceTime: props.settings.sliceTime || 500,
  }

  finalSettings.sliceDelay = props.settings.sliceDelay + finalSettings.sliceTime || finalSettings.sliceTime * 2

  return (
    <TextContainer textSettings={finalSettings}>
      <span aria-hidden='true'>{props.children}</span>
      {props.children}
      <span aria-hidden='true'>{props.children}</span>
    </TextContainer>
  )
}

export default SamuraiText