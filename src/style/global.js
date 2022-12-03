import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  :root {
    --color-background: #FFFFFF;
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --color-grey-4: #121214;
    --color-grey-3: #212529;
    --color-grey-2: #343B41;
    --color-grey-1: #868E96;
    --color-grey-0: #F8F9FA;
    --color-success: #3FE864;
    --color-error: #E83F5B;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
    /* -webkit-font-smoothing: antialiased; */
    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, p, a, span, li, button, input{
        font-family: 'Roboto', sans-serif;
    }

  a{
    color: unset;
    text-decoration: none;
  }

  ul, ol, li{
    list-style: none;
  }

  button{
    cursor: pointer;
    border: none;
    background: transparent;
  }
`;
