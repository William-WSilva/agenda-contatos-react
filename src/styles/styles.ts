import { createGlobalStyle, styled } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
  }

`
export const Container = styled.section`
  height: 100vh;
  max-width: 100vh;
  width: 100%;
  background-color: #000;
`
