import styled from "styled-components";

import Button from "./components/Button";

// const Title = styled.h1 `
//   font-size: 5rem;
//   color: red;
// `
// const Section = styled.section `
//   padding: 2rem;
//   margin: 2rem;
// `

// function App() {
//   return (
//     <Section>
//       <Title>Hello</Title>
//     </Section>
//   );
// }


// -----------------------

const MainWrapper = styled.section `
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
const PaginationWrapper = styled.div `
    display: flex;
    width: 100%;
    justify-content: ${({page}) => 
      page === 'first' ? 'flex-end' : page === 'middle' ? 'space-between' : 'flex-start'
    };
`
const Link = styled.a.attrs(props => ({
  target: '_blank'
})) `
  color: violet;
  font-size: 1.5rem;
`

function App() {
  return (
    <MainWrapper>
      <Button primary bgColor='red'>Primary</Button>    
      <Button margin='5rem'>Second</Button> 
      <PaginationWrapper  page='middle'>
        <Button>Page 3</Button>    
        <Button>Page 4</Button>    
      </PaginationWrapper>
      <Link href='https://www.google.com/'>Link Google</Link>  
      <Link href='https://www.youtube.com/'>Link YouTube</Link>  
    </MainWrapper>
  )
}

export default App
