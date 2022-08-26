import styled from 'styled-components'

const LoaderContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  background: inherit;
`

const Loader = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => props.loaderSettings.height}px;
  background: #fff;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);

&:before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, 
    ${((props) => props.loaderSettings.loaderColors.reduce((acc, color, i) => i !== 0 && i !== 1 ? acc + `, ${color}` : color, '').concat(`, ${props.loaderSettings.loaderColors[1]}`))});
  animation: animate ${(props) => props.loaderSettings.animationSpeed + 's'} linear infinite;
  background-size: ${(props) => props.loaderSettings.loaderColorsSize + '%'};
  filter: blur(${(props) => props.loaderSettings.blurSize});
}

@keyframes animate {
  0% {
    background-position: 0, 0;
  }

  0% {
    background-position: ${(props) => props.loaderSettings.loaderColorsSize + '%'}, 0;
  }
}
`

const GlowBar = (props) => {
  const finalSettings = {}
  const importSettings = () => {
    

    finalSettings.loaderColorsRepeat = props.settings.loaderColorsRepeat ?
      props.settings.loaderColorsRepeat :
      3

    finalSettings.loaderColors = props.settings.loaderColors ? 
      props.settings.loaderColors.join('').repeat(finalSettings.loaderColorsRepeat).split('#').map((el) => el !== '' ? `#${el}` : el) : 
      ['#fb0094', '#0000ff', '#00ff00', '#ffff00'].join('').repeat(finalSettings.loaderColorsRepeat).split('#').map((el) => el !== '' ? `#${el}`: el)
    
    finalSettings.loaderColorsSize = props.settings.loaderColorsSize ?
      props.settings.loaderColorsSize :
      400
    
    finalSettings.animationSpeed = props.settings.animationSpeed ?
      props.settings.animationSpeed :
      20

    finalSettings.height = props.settings.height ?
      props.settings.height :
      10

    finalSettings.blurSize = props.settings.blurSize ?
      `${props.settings.blurSize}px` :
      `${10}px`
  }

  importSettings()
  
  return (
    <LoaderContainer>
      <Loader loaderSettings={finalSettings}/>
    </LoaderContainer>
  )
}

export default GlowBar;

// Source: https://www.youtube.com/watch?v=rdtTCVzTwSQ

/**
 * To use:
 *  1. Ensure that npm package 'styled-components' is installed to your react app
 *    - `$npm install --save styled-components
 *  2. When calling include a 'settings' prop which will be used to configure the loading bar
 *    - Ex:
 *      <GlowBar 
 *        settings={{
 *          loaderColors: ['#fb0094', '#0000ff', '#00ff00', '#ffff00,'] // list of colors as strings
 *          loaderColorsRepeat: 3 // increase number to make color sections smaller
 *          loaderColorSize: 400 // Higher number makes each section larger
 *          animationSpeed: 20 //Time in seconds to complete one full animation
 *          height: 10 // height (in px) of the bar
 *          blurSize: 10 // larger number gives larger blur
 *        }}
 *      />
 */