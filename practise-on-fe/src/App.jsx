import React, { useState } from 'react'
import { UserProvider } from './context/UserContext'
import UserComponent from './components/UserComponent'
import { ThemeProvider } from './context/ThemeContext'
import ThemeComponent from './components/ThemeComponent'
import InputComponent from './components/InputComponent'


const App = () => {
  return (
    <UserProvider>
      <ThemeProvider>
        <ThemeComponent />
        <UserComponent />
        <InputComponent />
      </ThemeProvider>
    </UserProvider>
  )
}

export default App