import React, {useState} from 'react';
import styled from 'styled-components';

const Cards = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.settings.containerBorderRadius};
  padding-left: ${props => props.settings.paddingL};
  transition: background-color ${props => props.settings.containerBgTransitionSpeed + 's'};
    
  &:has(.card:hover){
    background-color: ${props => props.backgroundColor};
  }

  .card {
    width: 20%;
    background-size: cover;
    background-position: center;
    position: relative;
    cursor: pointer;
    outline: none;
    transition: scale 100ms;
  }

  .card .cardFrontImage {
    position: relative;
    z-index: 2;
  }

  .card .cardImage {
    height: 100%;
    border-radius: ${props => props.settings.imageBorderRadius};
    background-color: ${props => props.settings.imageBackgroundColor};
  }

  .cardFaders {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 1;
    opacity: 0;
    transition: opacity ${props => props.settings.animationTime/2 + 'ms'};
    pointer-events: none;
  }

  .card:hover .cardFaders {
    opacity: 1;
  }

  .card:active {
    scale: 0.98;
  }

  .cardFader {
    position: absolute;
    left: 0px;
    top: 0px;
  }

  .cardFader:nth-child(odd) {
    animation: fade-left ${props => props.settings.animationTime + 's'} linear infinite;
  }

  .cardFader:nth-child(even) {
    animation: fade-right ${props => props.settings.animationTime + 's'} linear infinite;
  }

  .cardFader:is(:nth-child(3), :nth-child(4)) {
    animation-delay: ${props => ((props.settings.animationTime * 1000) / 4) + 'ms'};
    
  }

  .cardFader:is(:nth-child(5), :nth-child(6)) {
    animation-delay: ${props => (((props.settings.animationTime * 1000) / 4) * 2) + 'ms'};
  }

  .cardFader:is(:nth-child(7), :nth-child(8)) {
    animation-delay: ${props => (((props.settings.animationTime * 1000) / 4) * 3) + 'ms'};
  }

  @media(max-width: 1200px) {
    #cards {
      flex-direction: column; 
      align-items: center;
      gap: 4rem;
      padding: 4rem;
    }
    
    .card .cardImage {
      width: 100%;    
    }
  }

  @media(max-width: 600px) {
    #cards {
      gap: 2rem;
      padding: 2rem;
    }
    
    .card {
      width: 100%;    
    }
    
    .card .cardImage {
      width: 100%;    
    }
  }

  @keyframes fade-left {
    from {
      scale: 1;
      translate: 0%;
      opacity: 1;
    }
    
    to {
      scale: 0.8;
      translate: ${props => (props.settings.animationSpread * -1) + '%'};
      
      opacity: 0;
    }
  }

  @keyframes fade-right {
    from {
      scale: 1;
      translate: 0%;
      opacity: 1;
    }
    
    to {
      scale: 0.8;
      translate: ${props => (props.settings.animationSpread) + '%'};
      opacity: 0;
    }
  }
`

const CardHoverDuplicateOG = (props) => {

  // Save a background color to state (transparent by default)
  // use onHover method to update state to whatever color that card should have

  const finalSettings = {
    paddingL: props.settings.paddingL || '0%',
    containerBackgroundColor: props.settings.containerBackgroundColor || 'rgb(29, 43, 58)',
    containerBgTransitionSpeed: props.settings.containerBgTransitionSpeed || 1,
    containerBorderRadius: props.settings.containerBorderRadius || '15px',
    imageBorderRadius: props.settings.imageBorderRadius || 'clamp(0.5rem, 0.75vw, 2rem)',
    imageBackgroundColor: props.settings.imageBackgroundColor || 'hsl(207, 19%, 9%, 1)',
    animationTime: props.settings.animationTime || 3,
    animationSpread: props.settings.animationSpread || 35
  }

  const [backgroundColor, setBackgroundColor] = useState(finalSettings.containerBackgroundColor);

  const mouseEnterHandler = (bgChangeColor) => {
    setBackgroundColor(bgChangeColor)
  }

  const mouseLeaveHandler = () => {
    setBackgroundColor(finalSettings.containerBackgroundColor)
  }

  console.log(backgroundColor)
  const cardGen = (cardData, key) => {
    return (
      <div className="card" key={key} onMouseEnter={() => mouseEnterHandler(cardData.dataColor)} onMouseLeave={mouseLeaveHandler}>
        <img className="cardFrontImage cardImage" alt={cardData.alt || ''} src={cardData.src} />
        <div className="cardFaders">
          <img className="cardFader cardImage" alt='' src={cardData.src} />
          <img className="cardFader cardImage" alt='' src={cardData.src} />
          <img className="cardFader cardImage" alt='' src={cardData.src} />
          <img className="cardFader cardImage" alt='' src={cardData.src} />
          <img className="cardFader cardImage" alt='' src={cardData.src} />
          <img className="cardFader cardImage" alt='' src={cardData.src} />
          <img className="cardFader cardImage" alt='' src={cardData.src} />
          <img className="cardFader cardImage" alt='' src={cardData.src} />
        </div>
      </div>
    )
  }

  const cards = props.settings.cards || [{ dataColor: 'rgb(97, 218, 251)', src: '/logo512.png' }, { dataColor: 'rgb(97, 218, 251)', src: '/logo512.png' }, { dataColor: 'rgb(97, 218, 251)', src: '/logo512.png' }];
  const generatedCards = cards.map((el, i) => cardGen(el, i))


  return (
    <Cards id="cards" settings={finalSettings} backgroundColor={backgroundColor}>
      {generatedCards}
    </Cards>
  )
}

export default CardHoverDuplicateOG

// Possible Improvements:
// Use the following pattern to change the background color of the cards container to a color assigned to each card
//  &:has(.card:hover) {backgroundColor: ''} /* get color assigned to each card and assign as bg color */