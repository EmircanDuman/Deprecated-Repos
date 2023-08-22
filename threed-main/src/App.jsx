import React from 'react'
import styled from 'styled-components'
import { Contact, Hero, Who, Works } from './components'

const Container = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
&::-webkit-scrollbar{
  display: none;
}
color: white;
background: url("./img/bg.jpeg");
`

function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
    </Container>
  )
}

export default App
