import React from 'react'
import styled from 'styled-components'
import useInputs from './hooks/useInputs'

// TODO: Add theme options for font/font-size/font-weight
// TODO: General page cleanup before submitting final version

const FormContainer = styled.div`
  width: 30rem;
  max-width: 43rem;
  padding: 1rem;
  border-radius: 12px;
  background-color: ${props => props.themeSettings.cardBGColor};
  margin: 3rem auto;
  color: ${props => props.themeSettings.textColor};
  display: flex;
  justify-content: center;

  & div.inputContainer {
    margin-bottom: 1rem;
  }
  & div.inputContainer input, 
  & div.inputContainer label {
    display: block;
  }

  & div.inputContainer label {
    font-weight: ${props => props.themeSettings.labelWeight};
    margin-bottom: 0.5rem;
  }

  & div.inputContainer input,
  & div.inputContainer select {
    font: inherit;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid ${props => props.themeSettings.inputBorderColor};
    background-color:  ${props => props.themeSettings.inputBGColor};
    color: ${props => props.themeSettings.inputTextColor};
    width: 20rem;
    max-width: 100%;
  }

  & div.inputContainer input:focus {
    outline: none;
    border-color: ${props => props.themeSettings.inputFocusBorder};
    background-color: ${props => props.themeSettings.inputFocusBGColor};
  }

  /* Invalid input styles */
  & div.inputContainer.invalid input{
    border: 1px solid ${props => props.themeSettings.invalidBorderColor};
    background-color: ${props => props.themeSettings.invalidBGColor};
    color: ${props => props.themeSettings.invalidTextColor};
  }

  & div.inputContainer.invalid input:focus{
    border-color: ${props => props.themeSettings.invalidFocusBorder};
    background-color: ${props => props.themeSettings.invalidFocusBG};
  }

  & div.inputContainer.invalid p.error-text {
    color: ${props => props.themeSettings.errorTextColor};
  }

  & div.form-actions {
    text-align: right;
  }

  & div.form-actions button {
    margin-left: 1rem;
  }

  & div.formActions button {
    font: inherit;
    background-color: ${props => props.themeSettings.buttonBGColor};
    color: ${props => props.themeSettings.buttonTextColor};
    border: 1px solid ${props => props.themeSettings.buttonBorderColor};
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
  }

  & div.formActions button:hover,
  & div.formActions button:active{
    background-color: ${props => props.themeSettings.buttonHoverBG};
    border-color: ${props => props.themeSettings.buttonHoverBorder};
  }

  & div.formActions button:disabled,
  & div.formActions button:disabled:active,
  & div.formActions button:disabled:hover {
    background: ${props => props.themeSettings.buttonDisabledBG};
    color: ${props => props.themeSettings.buttonDisabledTextColor};
    border-color: ${props => props.themeSettings.buttonDisabledBorder};
    cursor: not-allowed;
  }
`

const BasicFormAlt = (props) => {
  const defaultInputList = [
    {
      validation: (value) => value.trim() !== '',
      type: 'text',
      label: 'First Name',
      id: 'ex1',
      errorText: 'First name cannot be blank',
      value: ''
    },
    {
      validation: (value) => value.trim() !== '',
      type: 'text',
      label: 'Last Name',
      id: 'ex2',
      errorText: 'Last name cannot be blank',
      value: ''
    },
    {
      validation: (value) => value.includes('@'),
      type: 'text',
      label: 'Email',
      id: 'ex3',
      errorText: 'Please use a valid email format',
      value: ''
    }
  ]

  // Check if input list was passed via props, if so use it, if not use default
  const inputList = props.settings.inputList ? [...props.settings.inputList] : defaultInputList
  // Initialize state using inputList
  // Returns object with methods to update inputs (see useInputs)
  const inputObj = useInputs(inputList)

  const formSubmissionHandler = (event) => {
    event.preventDefault()
    // Return list of inputs (and their values within) to the parent component
    // Parent must provide formSubmit method via props
    props.settings.formSubmit(inputObj.inputs)

    // Reset form after running custom method
    inputObj.resetHandler()
  }

  // Create jsx input element for each input in state
  const inputJSX = inputObj.inputs.map((input) => {
    return (
      <div key={input.id} className={input.hasError ? 'invalid inputContainer' : 'inputContainer'}>
        <label htmlFor={input.id}>{input.label}</label>
        <input
          type={input.type}
          id={input.id}
          name={input.id}
          onChange={inputObj.valueChangeHandler}
          onBlur={inputObj.blurHandler}
          value={input.value}
        />
        {input.hasError && <p className='error-text'>{input.errorText}</p>}
      </div>
    )
  })

  // Themes are optional and a nested object so looking for props.settings.theme.cardBGColor would cause an error if no theme object provided
  // Check to see if theme was passed via props, if so use it, otherwise default to an empty object
  const themeProps = props.settings.theme ? {...props.settings.theme} : {}
  const finalThemeSettings = {
    cardBGColor: themeProps.cardBGColor || 'white',
    labelWeight: themeProps.labelWeight || 700,
    textColor: themeProps.textColor || 'black',
    inputTextColor: themeProps.inputTextColor || 'black',
    inputBorderColor: themeProps.inputBorderColor || '#ccc',
    inputBGColor: themeProps.inputBGColor || 'white',
    inputFocusBorder: themeProps.inputFocusBorder || '#240370',
    inputFocusBGColor: themeProps.inputFocusGBColor || '#e0d4fd',
    invalidTextColor: themeProps.invalidTextColor || 'red',
    invalidBorderColor: themeProps.invalidBorderColor || '#b40e0e',
    invalidBGColor: themeProps.invalidBGColor || '#fbe8d2',
    invalidFocusBorder: themeProps.invalidFocusBorder || '#ff8800',
    invalidFocusBG: themeProps.invalidFocusBG || '#fbe8d2',
    errorTextColor: themeProps.errorTextColor || 'red',
    buttonBGColor: themeProps.buttonBGColor || '#240370',
    buttonTextColor: themeProps.buttonTextColor || 'white',
    buttonBorderColor: themeProps.buttonBorderColor || '#240370',
    buttonHoverBG: themeProps.buttonHoverBG || '#33059e',
    buttonHoverBorder: themeProps.buttonHoverBorder || '#33059e',
    buttonDisabledBG: themeProps.buttonDisabledBG || '#ccc',
    buttonDisabledTextColor: themeProps.buttonDisabledTextColor || '#292929',
    buttonDisabledBorder: themeProps.buttonDisabledBorder || '#ccc'
  }
  
  // Create a boolean on whether button should be disabled
  // Returns false if all inputs isValid property is true, otherwise returns true
  // (may be opposite of expected since if valid (true) and disable button (false) are both opposite of each other yet intended to correlate)
  const disableButton = ![...inputObj.inputs].reduce((acc, input) => input.isValid && acc)

  return (
    <FormContainer themeSettings={finalThemeSettings}>
      <form onSubmit={formSubmissionHandler} autoComplete="off">
        {inputJSX}
        <div className='formActions'>
          <button disabled={disableButton} type='submit'>{props.settings.buttonText || 'Submit'}</button>
        </div>
      </form>
    </FormContainer>
  )
}

export default BasicFormAlt