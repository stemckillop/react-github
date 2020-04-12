import React from 'react';
import Header from '../components/header/header'
import Profile from '../components/profile/Profile'
import Styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

const AppWrapper = Styled.div`
  text-align: center;
`

function App() {
  return (
    <>
    <GlobalStyle />
    <AppWrapper>
      <Header />
      <Profile />
    </AppWrapper>
    </>
  );
}

export default App;
