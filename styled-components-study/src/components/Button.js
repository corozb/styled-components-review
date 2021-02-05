import React from 'react'
import styled, {css } from 'styled-components'

// import { Wrapper } from '../styled'
import {FadeIn} from './styled'

// const StyledButton = styled.button  `
//   padding: 1rem 1.5rem;
//   font-size: 1.8rem;
//   color: #fff;
//   /* color: ${(props) => (props.primary ? 'red' : 'blue')}; */
//   border: none;
//   margin-bottom: 1rem;
//   background-color: #333;
//   ${(primary) => primary && css`
//     color: gray;
//     background-color: ${({bgColor}) =>  bgColor};
//   `}
// `

// function Button({children, primary, bgColor}) {
//     return (
//         <Wrapper>
//          <StyledButton primary={primary} bgColor={bgColor}>{children}</StyledButton>   
//         </Wrapper>
//     )
// }

const StyledButton = styled.button  `
  /* background-color: white; */
  /* color: palevioletred; */
  /* font-size: 1.2rem; */
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.main};
  margin: ${({margin}) => margin || '2rem'};
  margin-top: ${(props) => props.theme.spacers.large};
  
  font-size: ${props => props.theme.fontSizes.p};
  padding: 1rem 1.5rem;
  border: 2px solid paleturquoise;
  border-radius: 3px;
  animation: 2s ${FadeIn} ease-in;

  ${({primary}) => 
    primary && 
    css`
        background-color: palegoldenrod;
        color: green;
        box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.2);
  `}

  &:hover {
      color: white;
      background-color: palegreen;
      cursor: pointer
  }

  .addClass {
      color: orange
  }

  @media ${({ theme}) => theme.mediaQueries['bellow768']} {
      font-size: 0.4rem;
      color: blue;
  }
`

const OutterWrapper = styled.div `
    width: 100%;
    background-color: blueviolet;
    margin-top: 2rem;

    &:hover ${StyledButton} {
        color: red;
        background-color: palevioletred
    }
`

// const SuperButton = styled(StyledButton) ` //Add style to a component
//     font-size: 2.5rem;
// `

function Button({children, primary, margin}) {
    return (
        <>
        {/* <Wrapper> */}
        <OutterWrapper>
            <StyledButton primary={primary} margin={margin}>
                {children}
                <p className='addClass'>Style class</p>
            </StyledButton>
        </OutterWrapper>
         {/* <SuperButton>{children}</SuperButton> */}
        {/* </Wrapper>  */}
        </> 
    )
}

export default Button
