import logo from './logo.svg';

import {AppStyled,AppImg,AppHeader} from "./App.Styled"



function App() {
  return (
  <AppStyled>
     <AppHeader>
        <AppImg src={logo}  alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </AppHeader>
      </AppStyled>
  );
}

export default App;
