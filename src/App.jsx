// In this Project we have used styled components for css that is using styled-components we just have to add where to add css for what it will be added like (import styled from "styled-components") and (const Button = styled.button`(here we can add the css we want)`;) so now when we add a button it will automatically be displaed as button like (<button>This is styled component button</button>)

import React, { useState } from 'react'
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false)

  const toggleGamePlay = () => {

    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
      { isGameStarted ? <GamePlay /> : <StartGame toggle = {toggleGamePlay} /> }
    </>
  )
}

export default App

