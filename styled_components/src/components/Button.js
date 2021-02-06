import React from 'react'
import styled, { css } from 'styled-components'
// import { Wrapper } from './styled'

// const StyledButton = styled.button`
//   padding: 1rem 1.5rem;
//   font-size: 1.8rem;
//   color: #fff;
//   /* color: ${(props) => (props.primary ? 'red' : '#00f')}; */
//   outline: none;
//   border: none;
//   margin-bottom: 1rem;
//   background-color: #333;
//   ${({ primary }) =>
//     primary &&
//     css`
//       color: gray;
//       background-color: ${({ bgColor }) => bgColor};
//     `}
// `

// export default function Button({ primary, bgColor, children }) {
//   return (
//     <>
//       <StyledButton primary={primary} bgColor={bgColor}>
//         {children}
//       </StyledButton>
//     </>
//   )
// }

const StyledButton = styled.button`
  background-color: white;
  color: palevioletred;
  font-size: 1.2rem;
  margin: ${({ margin }) => margin || '2rem'};
  border: 2px solid paleturquoise;
  border-radius: 3px;

  ${({ primary }) =>
    primary &&
    css`
      background-color: palegoldenrod;
      color: green;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}
`

// const SuperButton = styled(StyledButton)`
//   // Add style to an component
//   font-size: 2.5rem;
// `

const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
`

export default function Button({ primary, children, margin }) {
  return (
    <>
      {/* <Wrapper> */}
      <StyledButton primary={primary} margin={margin}>
        {children}
      </StyledButton>
      {/* <SuperButton>{children}</SuperButton> */}
      <PaginationWrapper>
        <Button>Page 1</Button>
      </PaginationWrapper>
      {/* </Wrapper> */}
    </>
  )
}
