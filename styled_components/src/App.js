import React from 'react'
import styled from 'styled-components'
import Button from './components/Button'

// const Title = styled.h1`
//   color: red;
//   font-size: 5rem;
// `

// const Section = styled.section`
//   padding: 2rem;
//   margin: 2rem;
// `

const MainWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <MainWrapper>
      <Button primary bgColor='yellowgreen'>
        Primary
      </Button>
      <Button margin='5rem'>Second</Button>
    </MainWrapper>
  )
}

export default App
