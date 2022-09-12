import styled from 'styled-components'
import React from 'react'

const InputBox = styled.div`
  position: relative;
  width: ${(props) => props.settings.width};
  background: ${(props) => props.settings.colorBackground};
  border-radius: 5px;

  & input {
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    border: 1px solid ${(props) => props.settings.colorMain};
    background: ${(props) => props.settings.colorBackground};
    border-radius: 5px;
    outline: none;
    color: ${(props) => props.settings.colorText};
    font-size: 1em;
    transition: ${(props) => props.settings.animationSpeed + 's'};
  }

  & span {
    position: absolute;
    left: 0;
    padding: 10px;
    pointer-events: none;
    font-size: 1em;
    color: ${(props) => props.settings.colorMain};
    text-transform: ${(props) => props.settings.textTransform};
    transition: ${(props) => props.settings.animationSpeed + 's'};
  }

  & input:valid ~ span,
  & input:focus ~ span {
    color: ${(props) => props.settings.colorAccent};
    transform: translateX(10px) translateY(-7px);
    font-size: 0.65em;
    padding: 0 10px;
    background: inherit;
    border-left: 1px solid ${(props) => props.settings.colorAccent};
    border-right: 1px solid ${(props) => props.settings.colorAccent};
    letter-spacing: ${(props) => props.settings.labelSpacing};
  }

  & input:valid ~ span.alt,
  & input:focus ~ span.alt {
    background: ${(props) => props.settings.colorAccent};
    color: ${(props) => props.settings.colorBackground === 'inherit' ? '#fff' : props.settings.colorBackground};
    border-radius: 2px;
  }

  & input:valid,
  & input:focus {
    border: 1px solid ${(props) => props.settings.colorAccent};
  }
`


const AnimatedInput = (props) => {
  // Retrieve following vals from props and set default values if they don't exist
  // type // value type for this input box (default to text)
  // label // label to be used on the input
  // backgroundColor // set a custom background color (inherit by default to take parents background)
  // width // in px, adjust for wider/smaller inputs as needed
  // border radius
  // Initial text color
  // alt classname (background required to apply text color)
  const finalSettings = {
    type: props.settings.type || 'text',
    label: props.settings.label || 'label',
    width: props.settings.width || '300px',
    colorBackground: props.settings.colorBackground || 'inherit',
    colorAccent: props.settings.colorAccent || '#00dfc4',
    colorMain: props.settings.colorMain || 'rgba(255, 255, 255, 0.25)',
    colorText: props.settings.colorText || '#fff',
    animationSpeed: props.settings.animationSpeed || .5,
    textTransform: props.settings.textTransform || 'none',
    labelSpacing: props.settings.labelSpacing || '.2em',
    useAltTheme: props.settings.useAltTheme || false
  }

  const altLabelClass = finalSettings.useAltTheme ? 'alt' : ''
  
  return (
    <InputBox settings={finalSettings}>
      <input type={finalSettings.type} required="required"/>
      <span className={altLabelClass}>{finalSettings.label}</span>
    </InputBox>
  )
}

export default AnimatedInput

// Source: https://www.youtube.com/watch?v=BMphVl9suxA

/**
 * To Use:
 *  1. Ensure that npm package 'styled-components' is installed to your react app
 *    - `$npm install --save styled-components
 *  2. When calling include a 'settings' prop which will be used to configure the loading bar
 *    - Ex:
 *      <AnimatedInput 
 *        settings={{
 *          type: 'text',
 *          label: 'first name',
 *          textTransform: 'uppercase',
 *          width: '500px',
 *          colorBackground: '#1d2b3a', // Not needed but recommended or label text will default to white when focused
 *          colorAccent: '#00dfc4',
 *          colorMain: 'rgba(255, 255, 255, 0.25)',
 *          colorText: '#fff',
 *          animationSpeed: 1,
 *          labelSpacing: '.2em'
 *          useAltTheme: true
 *        }}
 *      />
 */