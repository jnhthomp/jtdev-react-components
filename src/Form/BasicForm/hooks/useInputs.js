import { useReducer } from "react"

const inputsReducer = (state, action) => {

  // Update a given input value (uses id retrieved from event)
  if(action.type === 'UPDATE_INPUT'){
    // Select the input being changed
    const inputFilter = [...state.inputs].filter((input) => input.id === action.value.id)[0]
    // Validate input being changed
    const inputIsValid = inputFilter.validation(action.value.value)
    // Mark errors for input
    const hasError = !inputIsValid && inputFilter.isTouched
    // Update state with new input value/statuses
    const newStateInputs = [...state.inputs].map((input) => input.id === action.value.id ? 
      { ...input, 
        value: action.value.value,
        isValid: inputIsValid,
        hasError: hasError
      } : input)
    return { ...state, inputs: newStateInputs }
  }
  // Mark an item as touched after onBlur event
  if(action.type === 'SET_TOUCHED'){
    // Select the input to be marked
    const inputFilter = [...state.inputs].filter((input) => input.id === action.value.id)[0]
    // Validate input being touched
    const inputIsValid = inputFilter.validation(action.value.value)
    // Update state with new input statuses
    const newStateInputs = [...state.inputs].map((input) => input.id === action.value.id ? 
      {...input, isTouched: true, hasError: !inputIsValid, isValid: inputIsValid} : 
      input
    )
    return {...state, inputs: newStateInputs}
  }
  // Clear/reset all input fields after submission 
  // Note does not reset to initial value of the input if a value was passe
  if(action.type === 'RESET'){
    // Set all inputs to initial values and update state with cleared inputs
    const resetInputs = [...state.inputs].map((input) => {
      return {
        ...input,
        value: '',
        isValid: false,
        hasError: false,
        isTouched: false
      }
    })
    return {...state, inputs: resetInputs}
  }
}

const useInputs = (inputArr) => {

  // Create object to manage state 
  const [inputsState, dispatchInputs] = useReducer(inputsReducer, inputArr, (inputs) => {
    // Initialize state object using provided inputsArr when form component calls useInputs
    const initializedInputs = [...inputs].map((input) => {
      return {
        // Import provided key/values
        ...input,
        // Set initial value if not provided
        value: input.value || '',
        // Set initial status for each input
        isValid: false,
        hasError: false,
        isTouched: false
      }
    })
    return {
      // Add initialized inputs to state object with handler methods
      inputs: [...initializedInputs],
      
      valueChangeHandler: (event) => {
        dispatchInputs({
          type: 'UPDATE_INPUT', 
          value: { id: event.target.name, value: event.target.value },
        })
      },

      blurHandler: (event) => {
        dispatchInputs({ type: 'SET_TOUCHED', value: { id: event.target.name, value: event.target.value } })
      },

      resetHandler: () => {
        dispatchInputs({type: 'RESET'})
      }
    }
  })

  return inputsState
}

export default useInputs