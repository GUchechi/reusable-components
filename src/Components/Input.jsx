import React from 'react'

const Input = ({inputType,inputValue, setInputValue}) => {
  return (
    <div>
        <input 
          type={inputType}
          value={inputValue}
          onChange={ e => setInputValue(e.target.value)}
        />
    </div>
  )
}

export default Input