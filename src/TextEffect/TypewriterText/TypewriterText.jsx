import React from 'react'
import styled, { keyframes } from 'styled-components'

const Typewriter = () => keyframes`
  to { left: 100%;}
`

const Blink = () => keyframes`
  to {
    background: transparent;
  }
`

const FadeInUp = () => keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Container = styled.div`

  & h1 {
    
    color: ${props => props.textSettings.titleColor};
    font-family: ${props => props.textSettings.titleFont};
    font-size: ${props => props.textSettings.titleFontSize};
    font-weight: ${props => props.textSettings.titleWeight};
    width: max-content; /**Makes sure that the reveal animation (Typewriter) is spaced to letters */
    position: relative;
  }

  & h1::before,
  & h1::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  & h1::before {
    background-color: ${props => props.textSettings.background};
    animation: 
      ${Typewriter()} ${props => props.textSettings.typeTime}ms steps(${props => props.textSettings.titleContent.length}) ${props => props.textSettings.typeDelay}ms forwards;
  }

  & h1::after {
    width: 0.125em;
    background: ${props => props.textSettings.caretColor};
    animation:
      ${Typewriter()} ${props => props.textSettings.typeTime}ms steps(${props => props.textSettings.titleContent.length}) ${props => props.textSettings.typeDelay}ms forwards,
      ${Blink()} ${props => props.textSettings.blinkTime} steps(${props => props.textSettings.titleContent.length}) infinite;
  }

  & p {
    font-family: ${props => props.textSettings.subtitleFont};
    text-align: center;
    color: ${props => props.textSettings.subtitleColor};
    font-size: ${props => props.textSettings.subtitleFontSize};
    font-weight: ${props => props.textSettings.subtitleWeight};
    opacity: 0;
    transform: translateY(3rem);
    animation: ${FadeInUp()} 2s ease ${props => props.textSettings.typeDelay + props.textSettings.typeTime + props.textSettings.subtitleDelay}ms forwards;
  }
`
// const Title = styled.h1`
//   font-family: ${props => props.textSettings.titleFont};
//   font-weight: 400;
// `

// const Subtitle = styled.p`
//   font-family: ${props => props.textSettings.subtitleFont};
// `

const TypewriterText = (props) => {
  const finalSettings ={
    titleContent: props.children || props.settings.titleContent,
    showSubtitle: props.settings.showSubtitle || false,
    subtitleContent: props.settings.subtitleContent || 'Lorem ipsum dolor sit amet',
    titleFont: props.settings.titleFont || '"Source Code Pro", monospace', // https://fonts.google.com/specimen/Source+Code+Pro?query=source+code+pro
    subtitleFont: props.settings.subtitleFont || '"Source Sans Pro", sans-serif', // https://fonts.google.com/specimen/Source+Sans+Pro?query=source+sans+pro&category=Sans+Serif,Monospace
    titleColor: props.settings.titleColor || 'black',
    subtitleColor: props.settings.subtitleColor || 'hsl(0 0% 0% / 0.7)',
    titleWeight: props.settings.titleWeight || '400',
    subtitleWeight: props.settings.subtitleWeight || '400',
    titleFontSize: props.settings.titleFontSize || 'clamp(1rem, 3vw + 1rem, 4rem)',
    subtitleFontSize: props.settings.subtitleFontSize || '2rem',
    typeTime: props.settings.typeTime || 4000,
    blinkTime: props.settings.blinkTime || '500ms',
    typeDelay: props.settings.typeDelay || 1000,
    subtitleDelay: props.settings.subtitleDelay || 0,
    background: props.settings.background || 'white',
  }

  finalSettings.caretColor = props.settings.caretColor || finalSettings.titleColor

  return (
    <Container textSettings={finalSettings}>
      <h1>{finalSettings.titleContent}</h1>
      {finalSettings.showSubtitle && <p>{finalSettings.subtitleContent}</p>}
    </Container>
  )
}

export default TypewriterText