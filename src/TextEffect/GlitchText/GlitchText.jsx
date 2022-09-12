import React from 'react'
import styled, { keyframes } from 'styled-components'

const glitch = (r, g, b) => keyframes`
  0%, 14% {
    text-shadow: 0.05em 0 0 ${r},
      -0.05em -0.025em 0 ${g},
      -0.025em 0.05em 0 ${b};
  }
  15%, 49% {
    text-shadow: -0.05em -0.025em 0 ${r},
      0.025em 0.025em 0 ${g},
      -0.05em -0.05em 0 ${b};
  }
  50%, 99% {
    text-shadow: 0.025em 0.05em 0 ${r},
      0.05em 0 0 ${g} 
      0 -0.05em 0 ${b};
  }
  100% {
    text-shadow: -0.025em 0 0 ${r},
      -0.025em -0.025em 0 ${g},
      -0.025em -0.05em 0 ${b};
  }
`

const TextContainer = styled.p`
  position: relative;
  color: ${props => props.textSettings.color};
  font-size: ${props => props.textSettings.fontSize};
  font-weight: ${props => props.textSettings.fontWeight};
  text-transform: uppercase;

  text-shadow: 0.05em 0 0 ${props => props.textSettings.rColor},
    -0.025em -0.05em 0 ${props => props.textSettings.gColor},
    0.025em 0.05em 0 ${props => props.textSettings.bColor};

  animation: ${props => glitch(props.textSettings.rColor, props.textSettings.gColor, props.textSettings.bColor)} 500ms infinite;

  & span {
    position: absolute;
    top: 0;
    left: 0;
    opacity: .8
  }

  & span:first-child {
    animation: ${props => glitch(props.textSettings.rColor, props.textSettings.gColor, props.textSettings.bColor)} 650ms infinite;
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    transform: translate(-0.025em, -0.0125em)
  }
  & span:last-child {
    animation: ${props => glitch(props.textSettings.rColor, props.textSettings.gColor, props.textSettings.bColor)} 375ms infinite;
    clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
    transform: translate(0.025em, 0.0125em)
  }

  @media(prefers-reduced-motion: reduce){
    &, 
    &::before, 
    &::after {
      animation-delay: -1ms !important;
      animation-duration: -1ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: initial !important;
      scroll-behavior: auto !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
  }
`



const GlitchText = (props) => {
  const finalSettings = {
    color: props.settings.color || 'black',
    fontSize: props.settings.fontSize || '6rem',
    fontWeight: props.settings.fontSize || 700,
    rColor: props.settings.rColor || 'rgba(255, 0, 0, .75)',
    gColor: props.settings.gColor || 'rgba(0, 255, 0, .75)',
    bColor: props.settings.bColor || 'rgba(0, 0, 255, .75)'
  }

  return (
    <TextContainer textSettings={finalSettings}>
      <span aria-hidden='true'>{props.children}</span>
      {props.children}
      <span aria-hidden='true'>{props.children}</span>
    </TextContainer>
  )
}

export default GlitchText

// Source: https://www.youtube.com/watch?v=7Xyg8Ja7dyY