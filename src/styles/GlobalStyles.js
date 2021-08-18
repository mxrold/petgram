import { createGlobalStyle } from 'styled-components'
import { Colors } from './Colors'

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  *, *::before, *::after {
    box-sizing: inherit;
  }
  
  ul, li, h1, h2, h3, p, button {
    padding: 0;
    margin: 0;
  }

  ul {
    list-style: none;
  }

  button {
    background: transparent;
    outline: 0;
  }

  body {
    width: 100%;
    max-width: 500px;
    height: 100vh;
    margin: 0 auto;
    overscroll-behavior: none;
    background: ${Colors.bgApp};
  }

  #app {
    min-height: 100vh;
    padding-bottom: 10px;
    overflow-x: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
  }

`
