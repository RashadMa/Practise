import React, { useEffect, useRef } from 'react'

const InputComponent = () => {
      const inputRef = useRef()
      const divRef = useRef()

      const focusToInput = () => {
            inputRef.current.focus()
      }
      const addBorderToDiv = () => {
            divRef.current.style.border = "1px solid white"
      }


      return (
            <div ref={divRef}>
                  <div>InputComponent</div>
                  <input ref={inputRef} placeholder='useRef practice'></input>
                  <button onClick={focusToInput}>
                        focus to input
                  </button>
                  <button onClick={addBorderToDiv}>
                        Add border to wrapper
                  </button>
            </div>
      )
}

export default InputComponent