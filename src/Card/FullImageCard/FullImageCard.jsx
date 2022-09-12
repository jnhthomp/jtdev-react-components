import React from 'react'
import styled from 'styled-components';

const Card = styled.div`
  background-image: url(${(props) => props.settings.backgroundImage});
  background-size: cover;
  padding: 8rem 0 0;
  max-width: ${(props) => props.settings.maxWidth};
  border-radius: .5rem;
  overflow: hidden;
  transition: transform ${(props) => props.settings.animationSpeed} ease;

  &:hover,
  &:focus-within{
    transform: scale(${(props) => props.settings.scaleUp});
  }

  &:hover .title:after,
  &:focus-within .title:after{
    transform: scaleX(1);
    bottom: ${(props) => props.settings.barUpperPadding};
  }

  &:hover .content,
  &:focus-within .content {
    transform: translateY(0);
    transition-delay: ${(props) => props.settings.animationSpeed};
  }

  &:focus-within .content {
    transition-duration: 0ms;
  }

  &:hover .content > *:not(.title),
  &:focus-within .content > *:not(.title) {
    opacity: 1;
    transition-delay: ${(props) => props.settings.animationSpeed * 2};
  }

  &:focus-within .content > *:not(.title){
    transition-delay: 0ms;
  }
`

const CardContent = styled.div`
  padding: ${(props) => props.settings.padding};
  background: linear-gradient(
    hsl(0 0% 0% / 0),
    hsl(20 0% 0% / .3) 20%,
    hsl(0 0% 0% / 1)
  );
  transform: translateY(65%);
  transition: transform ${(props)=> props.settings.animationSpeed} ease;

  & > *:not(.title) {
    opacity: 0;
    transition: opacity ${(props) => props.settings.animationSpeed} linear;
  }
`

const CardTitle = styled.h2`
  color: ${(props) => props.settings.titleColor};
  position: relative;
  width: max-content;
  max-width: 100%;

  &:after {
    content: '';
    position: absolute;
    height: ${(props) => props.settings.barHeight};
    left: calc(${(props) => props.settings.padding} * -1);
    bottom: 0;
    background: ${(props) => props.settings.accentColor};
    width: calc(100% + ${(props) => props.settings.padding});
    transform: scaleX(0);
    transform-origin: left;
    transition: transform ${(props) => props.settings.animationSpeed} ease;
  }
`

const CardBody = styled.p`
  color: ${(props) => props.settings.bodyColor};
`

const CardButton = styled.a`
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  color: ${(props)=> props.settings.buttonTextColor};
  background-color: ${(props) => props.settings.cardButtonPrimaryColor};
  padding: .5em 1.25em;
  border-radius: .25em;

  &:hover,
  &:focus {
    background-color: ${(props) => props.settings.cardButtonSecondaryColor}; 
  }
`
const FullImageCard = (props) => {
  const defaultClick = () => console.log('clicked')

  const finalSettings = {
    backgroundImage: props.settings.backgroundImage || '/logo512.png', // Default to image included with 'create-react-app',
    maxWidth: props.settings.maxWidth || '35ch',
    animationSpeed: props.settings.animationSpeed || '500ms',
    sacleUp: props.settings.scaleUp || 1.05,
    barUpperPadding: () => props.settings.barUpperPadding ? (props.settings.barUpperPadding * -1) + 'px' : -3 + 'px',
    padding: props.settings.padding || '1.5rem',
    titleColor: props.settings.titleColor || '#fff',
    // buttonTextColor: props.settings.buttonTextColor || finalSettings.titleColor,
    bodyColor: props.settings.bodyColor || 'rgba(255, 255, 255, .8)',
    barHeight: props.settings.barHeight || '3px',
    accentColor: props.settings.accentColor || 'hsl(142, 90%, 61%)',
    cardTitle: props.settings.cardTitle || 'Card Title',
    cardBody: props.settings.cardBody || 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas eius illum veritatis, explicabo autem quis molestias',
    cardButtonText: props.settings.cardButtonText || 'Learn More',
    // cardButtonPrimaryColor: props.settings.cardButtonPrimaryColor || finalSettings.accentColor,
    cardButtonSecondaryColor: props.settings.cardButtonSecondaryColor || '#fff',
    buttonAction: props.settings.buttonAction || defaultClick
  };

  finalSettings.buttonTextColor = props.settings.buttonTextColor || finalSettings.titleColor
  finalSettings.cardButtonPrimaryColor = props.settings.cardButtonPrimaryColor || finalSettings.accentColor
  
  return (
    <Card settings={finalSettings}>
      <CardContent settings={finalSettings} className="content">
        <CardTitle settings={finalSettings} className="title">{finalSettings.cardTitle}</CardTitle>
        <CardBody settings={finalSettings}>{finalSettings.cardBody}</CardBody>
        <CardButton settings={finalSettings} onClick={finalSettings.buttonAction}>{finalSettings.cardButtonText}</CardButton>
      </CardContent>
    </Card>
  )
}

export default FullImageCard

// Source: https://www.youtube.com/watch?v=5DEq5cWNYt8

/**
 * To Use:
 *  1. Ensure that npm package 'styled-components' is installed to your react app
 *    - `$npm install --save styled-components
 *  2. When calling include a 'settings' prop which will be used to configure the loading bar
 *    - Ex:
 *      <FullImageCard 
 *        settings={{
 *          backgroundImage: '/JWSTHD.jpg', // place image in public folder structure and provide path
 *          maxWidth: '38ch', // set width (ch is a good value type but could technically be anything)
 *          animationSpeed: 900, // speed of animation as an int or string in ms
 *          scaleUp: 1.25, // scale as an int or string (shrink < 1 < grow)
 *          barUpperPadding: 5, // space between bar and title in px
 *          padding: '2rem', // padding between edge and title/body/button
 *          titleColor: '#9f81d7', // Color of title text
 *          bodyColor: '#7a68bb', // Color of body text
 *          barHeight: '2px', // thickness of accent bar
 *          accentColor: '#7cf9b7', // Color of accent bar (and button if no value unassigned)
 * %        //buttonTextColor: 'hsl(207, 19%, 9%)', // Set to match title color if no value given
 *          cardTitle: 'Custom Settings', // Text to display in title
 *          cardBody: 'Here you can add custom text for the card. You should keep it relatively short.', // text to display in body
 *          cardButtonText: 'Click Here', // Text to display in button
 *%         // cardButtonPrimaryColor: '', // set to match accentColor if no value given
 *          cardButtonSecondaryColor: '#25cf51' // Color to change background to on card hover,
 *          buttonAction: () => console.log('Custom click') // action to execute on button click
 *        }}
 *      />
 */